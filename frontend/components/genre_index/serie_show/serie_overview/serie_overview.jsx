import React from 'react';
import SerieOverviewLeft from './serie_overview_left';

class SerieOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const serie = this.props.serie;
    return(
      <div className='serie-expand-main'>
        <SerieOverviewLeft serie={serie} />
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
