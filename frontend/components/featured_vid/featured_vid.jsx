import React from 'react';
import FeaturedVidModal from './featured_vid_modal';


class FeaturedVid extends React.Component {



  render() {
    return (
      <div className='featured-vid'>
        <FeaturedVidModal
          trailerSource='https://s3.amazonaws.com/docflix-prod/featured-vid.mp4'
          videoSource='https://s3.amazonaws.com/docflix-prod/series/another-world/video.mp4' />
      </div>
    );
  }

}

export default FeaturedVid;
