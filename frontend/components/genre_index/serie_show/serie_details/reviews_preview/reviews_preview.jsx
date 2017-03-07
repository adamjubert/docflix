import React from 'react';
import StarRating from '../../../../star_rating';


class ReviewsPreview extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const reviews = this.props.reviews;

    if (reviews.length === 0) {
      return( <div>Loading...</div>);
    }
    return(
      <ul className='review-preview-list'>
        { reviews.reverse().map((review) => (
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
