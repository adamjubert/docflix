import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends React.Component {
    render() {
        const rating = this.props.rating;
        return (
          <div>
            <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <span>★</span>}
                starCount={5}
                starColor={'red'}
                value={rating}
            />
          </div>
        );
    }
}

export default StarRating;

// Star rating info:
// https://github.com/voronianski/react-star-rating-component
