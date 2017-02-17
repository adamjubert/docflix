import React from 'react';

class SerieOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const serie = this.props.serie;
    return(
      <div className='serie-expand-main'>
        <div className='serie-overview-left'>
          <section className='serie-overview-left-container'>
            <h2>{serie.name}</h2>
            <ul className='serie-overview-list'>
              <li>{serie.avg_review} Stars</li>
              <li>{serie.year}</li>
              <li className='mpaa-rating'>TV-{serie.mpaa_rating}</li>
            </ul>
            <p>{this.props.serie.description}</p>
          </section>
        </div>
        <div className='serie-overview-right'>
          <section className='serie-overview-right-container'>
            <div className='serie-overview-video'></div>
          </section>
        </div>
      </div>
    );
  }
}

export default SerieOverview;
