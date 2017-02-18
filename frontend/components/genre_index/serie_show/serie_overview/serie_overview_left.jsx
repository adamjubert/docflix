import React from 'react';
import StarRating from '../../../star_rating';

class SerieOverviewLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const serie = this.props.serie;
    return(
      <div className='serie-overview-left'>
        <section className='serie-overview-left-container'>
          <h2 className='serie-title'>{serie.name}</h2>
          <ul className='serie-overview-list'>
            <li><StarRating rating={serie.avg_rating}/></li>
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
