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
      debugger
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.action({
      stars: parseInt(this.state.stars),
      comment: this.state.comment,
      user_id: this.props.user_id,
      series_id: this.props.series_id
     });
  }

  onStarClick(nextValue, prevValue, name) {
      this.setState({stars: nextValue});
  }

  render () {
    const headText = "Write a Review";
    const btnText = "Submit";

    return (
      <div>
        <h3>{headText}</h3>
        <form onSubmit={this.handleSubmit} className='review-form'>
          <div className='review-stars'>
            <label>Rate this title:</label>
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
              Write your review here.
            </textarea>
          </label>
          <input type="submit" value={btnText} className='btn-review' />
        </form>
      </div>
    );
  }
}

export default ReviewForm;

//
// <label>Title
//   <input
//     type="text"
//     value={this.state.title}
//     onChange={this.update('title')} />
// </label>
// <label>
//   <textarea
//     value={this.state.body}
//     onChange={this.update('body')} />
// </label>

// <label>Stars
//   <input
//     type="text"
//     value={this.state.stars}
//     onChange={this.update('stars')} />
// </label>
