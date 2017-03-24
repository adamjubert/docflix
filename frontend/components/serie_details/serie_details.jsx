import React from 'react';
import { Link } from 'react-router';

import StarRating from '../star_rating';
import ReviewsPreview from '../reviews_preview/reviews_preview';
import ReviewFormContainer from '../review_form/review_form_container';
import ReviewModal from '../review_modal/review_modal';

class SerieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.serie.id);
  }

  render() {
    const serie = this.props.serie;
    const revLength = serie.reviews.length;
    const reviews = this.props.reviews;

    return(
      <div className='serie-expand-main'>
        <div className='serie-review-container'>
          <div className='serie-reviews-preview'>
            <h2 className='serie-title'>{serie.name}</h2>
            <ReviewsPreview reviews={reviews.slice(reviews.length - 2, reviews.length)}
                            styling={'review-preview-comment'}/>
                          <ReviewModal serieName={serie.name} reviews={reviews} userReview={this.props.userReview} />
          </div>
        </div>
        <div className='serie-reviews-create'>
              <ReviewFormContainer
                userReview={this.props.userReview} />

        </div>
      </div>
    );
  }
}

export default SerieDetails;
