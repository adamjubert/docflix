import React from 'react';
import SerieOverviewLeft from './serie_overview_left';
import VideoModal from '../../../video_modal.jsx';

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
            <div className='serie-overview-video'>
              <VideoModal videoSource={serie.thumbnail_url}/>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SerieOverview;

// NB: Pass the serie's first episode's video URL through props to VideoModal
