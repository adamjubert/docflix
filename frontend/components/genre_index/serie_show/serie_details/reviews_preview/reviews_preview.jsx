import React from 'react';
import StarRating from '../../../../star_rating';


class ReviewsPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.serieId);
  }

  render() {
    const reviews = this.props.reviews;


    if (reviews[0] === undefined) {
      return( <div>'loading'</div>);
    }

    return(
      <ul className='review-preview-list'>
        { reviews.map((review) => (
          <li key={"review-" + review.id}>
            <StarRating rating={review.stars}/>
            <p className={this.props.styling}>{review.comment}</p>
          </li>
        )) }
      </ul>
    );
  }
}
export default ReviewsPreview;

//.review-preview-comment
// { reviews.map((review) => (
//   <li key={"review-" + review.id}>
//     <StarRating rating={review.stars}/>
//     <p className={this.props.styling}>{review.comment}</p>
//   </li>
// )) }
