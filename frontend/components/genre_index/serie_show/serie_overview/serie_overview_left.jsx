import React from 'react';
import StarRating from '../../../star_rating';

class SerieOverviewLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  avgStars() {
    const reviews = this.props.serie.reviews;
    const sum = reviews.reduce(function(prevVal, review) {
      return prevVal + parseInt(review.stars);
    }, 0);
    return(
      sum === 0 ? 0 : Math.round(((sum / reviews.length) * 10 ) / 10 )
    );
  }

  render() {
    const serie = this.props.serie;
    return(
      <div className='serie-overview-left'>
        <section className='serie-overview-left-container'>
          <h2 className='serie-title'>{serie.name}</h2>
          <ul className='serie-overview-list'>
            <li><StarRating rating={ this.avgStars() }/></li>
            <li>{serie.year}</li>
            <li className='mpaa-rating'>TV-{serie.mpaa_rating}</li>
          </ul>
          <p>{this.props.serie.description}</p>
        </section>
      </div>
    );
  }
}

export default SerieOverviewLeft;
