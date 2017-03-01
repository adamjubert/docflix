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

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  deleteReview() {
    this.props.deleteReview(this.props.userReview.id).then(
      () => this.setState({stars: 0, comment: ''}));
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

  onStarClick(nextValue, prevValue, name) {
      this.setState({stars: nextValue});
  }

  render () {
    const headText = this.props.formType === 'new' ? "Rate this title:" : "Edit your Review:";
    const btnText = this.props.formType === 'new' ? "Submit" : "Update";
    let deleteBtn;
    if (this.props.formType !== 'new') deleteBtn =
      <input type="submit"
             value="Delete"
             className='btn-review'
             onClick={() => this.deleteReview()}></input> ;
    return (
      <div className='review-form-container'>
        <h3>{headText}</h3>
        <form onSubmit={this.handleSubmit} className='review-form'>
          <div className='review-stars'>
            <label></label>
            <StarRatingComponent
                name="rate1"
                starCount={5}
                starColor={'red'}
                value={this.state.stars}
                onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <label>
            <textarea
              value={this.state.comment}
              onChange={this.update('comment')}>

            </textarea>
          </label>
          <div className='auth-errors'>{this.errorHandler()}</div>
          <input type="submit" value={btnText} className='btn-review' />
          { deleteBtn }
        </form>
      </div>
    );
  }
}

export default ReviewForm;
