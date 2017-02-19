import React from 'react';
import SerieOverviewLeft from './serie_overview_left';
import VideoModal from '../../../video_modal.jsx';

class SerieOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const serie = this.props.serie;
    const ep1 = serie.episodes[0];
    const videoUrl = (ep1 === undefined) ? '' : ep1.video_url;
    const thumbUrl = (ep1 === undefined) ? '' : ep1.thumbnail_url;
    return(
      <div className='serie-expand-main'>
        <SerieOverviewLeft serie={serie} />
        <div className='serie-overview-right'>
          <section className='serie-overview-right-container'>
            <div className='serie-overview-video'>
              <VideoModal videoSource={ videoUrl } thumbnail={ thumbUrl }/>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SerieOverview;

// NB: Pass the serie's first episode's video URL through props to VideoModal
