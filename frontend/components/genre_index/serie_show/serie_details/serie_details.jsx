import React from 'react';
import { Link } from 'react-router';

import StarRating from '../../../star_rating';
import ReviewsPreview from './reviews_preview';
import ReviewForm from '../../../review_form/review_form';
import ReviewModal from '../../../review_modal';

class SerieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const serie = this.props.serie;
    const revLength = serie.reviews.length;
    return(
      <div className='serie-expand-main'>
        <div className='serie-review-container'>
          <div className='serie-reviews-preview'>
            <h2 className='serie-title'>{serie.name}</h2>
            <ReviewsPreview reviews={serie.reviews.slice(revLength - 3, revLength)} />
            <ReviewModal reviews={serie.reviews} reviewCount={serie.reviews.length} />
          </div>
        </div>
        <div className='serie-reviews-create'>
          <ReviewForm />
        </div>
      </div>
    );
  }
}

export default SerieDetails;


// <div className='serie-reviews-preview'>
//   <ul>
//     { serie.reviews.slice(0, 3).map((review) => (
//       <li key={"review-" + review.id}>
//         <StarRating rating={review.stars}/>
//         <p>{review.comment}</p>
//       </li>
//     )) }
//   </ul>
// </div>
