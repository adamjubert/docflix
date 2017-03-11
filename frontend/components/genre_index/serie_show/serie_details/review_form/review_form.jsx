import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props;
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchReview(this.props.params.reviewId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.review);
  }

  // stars won't reset on delete without this
  defaultStarComponent() {
    return <StarRatingComponent
      name="rate1"
      starCount={5}
      starColor={ "rgb(51, 51, 51)" }
      value={ 5 }
      onStarClick={this.onStarClick.bind(this)}/>;
  }

  deleteButton() {
    return <div
      type="submit"
      value="Delete"
      className='btn-review btn-delete'
      onClick={() => this.deleteReview()}>Delete</div> ;
  }

  deleteReview() {
    this.setState({ stars: 0, comment: '' });
    this.props.deleteReview(this.props.userReview).then(
      () => this.setState({stars: 0, comment: ''}));
  }

  errorHandler() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    let id = this.props.userReview ? this.props.userReview.id : null;
    this.props.action({
      id,
      stars: parseInt(this.state.stars),
      comment: this.state.comment,
      user_id: this.props.user_id,
      series_id: this.props.series_id
     });
  }


  onStarClick(nextValue, prevValue, name) {
      this.setState({stars: nextValue});
  }

  // gives the "real" star rating as opposed to defaultStarRating
  starComponent() {
    return <StarRatingComponent
      name="rate1"
      starCount={5}
      starColor={'red'}
      value={ this.state.stars }
      onStarClick={this.onStarClick.bind(this)}/>;
  }

  reviewButtons() {
    const btnText = this.props.formType === 'new' ? "Submit" : "Update";
    return <div className='review-form-btns'>
      <input type="submit" value={btnText} className='btn-review' />
      { this.props.formType !== 'new' ? this.deleteButton() : '' }
    </div>;
  }

  reviewForm() {
    return <form onSubmit={this.handleSubmit} className='review-form'>
      { this.reviewStars() }
      { this.reviewTextArea() }
      <div className='auth-errors'>{this.errorHandler()}</div>
      { this.reviewButtons() }
    </form>;
  }

  reviewStars() {
    return <div className='review-stars'>
      <label></label>
      { this.state.stars === 0 ?
          this.defaultStarComponent() :
          this.starComponent() }
    </div>;
  }

  reviewTextArea() {
    return <label>
      <textarea
        value={this.state.comment}
        onChange={this.update('comment')}>

      </textarea>
    </label>;
  }


  render () {
    const headText = this.props.formType === 'new' ?
      "Rate this title:" :
      "Edit your Review:";
    return (
      <div className='review-form-container'>
        <h3>{headText}</h3>
        { this.reviewForm() }
      </div>
    );
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

}

export default ReviewForm;
