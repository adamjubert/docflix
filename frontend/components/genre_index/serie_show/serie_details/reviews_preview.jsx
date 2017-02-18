import React from 'react';
import StarRating from '../../../star_rating';


class ReviewsPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reviews = this.props.reviews;
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
