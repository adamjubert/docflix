import React from 'react';
import { Link } from 'react-router';

import StarRating from '../../../star_rating';
import ReviewsPreview from './reviews_preview';
import ReviewFormContainer from '../../../review_form/review_form_container';
import ReviewModal from './review_modal/review_modal';

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
            <ReviewsPreview reviews={serie.reviews.slice(0, 2)}
                            styling={'review-preview-comment'}/>
            <ReviewModal serie={serie} reviewCount={serie.reviews.length} />
          </div>
        </div>
        <div className='serie-reviews-create'>
          <ReviewFormContainer serie={serie}/>
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
