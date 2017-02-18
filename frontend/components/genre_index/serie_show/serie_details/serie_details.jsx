import React from 'react';
import { Link } from 'react-router';

import StarRating from '../../../star_rating';
import ReviewsPreview from './reviews_preview';

class SerieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const serie = this.props.serie;
    return(
      <div className='serie-expand-main'>
        <div className='serie-review-container'>
          <h2 className='serie-title'>{serie.name}</h2>
          <div className='serie-reviews-preview'>
            <ReviewsPreview reviews={serie.reviews.slice(3)} />
            <Link to="#" className='see-all-reviews'>See all reviews ({serie.reviews.length})</Link>
          </div>
          <div className='serie-reviews-create'>

          </div>
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
