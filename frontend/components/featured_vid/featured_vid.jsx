import React from 'react';
import FeaturedVidModal from './featured_vid_modal';


class FeaturedVid extends React.Component {



  render() {
    return (
      <div className='featured-vid'>
        <FeaturedVidModal
          videoSource='http://s3.amazonaws.com/docflix-prod/featured-vid.mp4' />
      </div>
    );
  }

}

export default FeaturedVid;
