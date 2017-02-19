import React from 'react';


class FeaturedVid extends React.Component {

  render() {
    return (
      <div className='featured-vid'>
        <iframe src="https://www.youtube.com/embed/bo-4_r94ljY?autoplay=1"
          width="100%" height="100%" frameBorder="0"
          allowFullscreen></iframe>
      </div>
    );
  }

}

export default FeaturedVid;
// <video width="100%" height="100%" autoplay  >
// <source src='https://www.youtube.com/embed/bo-4_r94ljY?ecver=2' type="video/mp4" />
// </video>
