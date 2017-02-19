import React from 'react';


class FeaturedVid extends React.Component {

  render() {
    return (
      <div className='featured-vid'>
        <video width="100%" height="100%" autoPlay loop muted >
          <source src='http://s3.amazonaws.com/docflix-dev/episodes/videos/000/000/141/original/video.mp4?1487540566'
                  type="video/mp4" />
        </video>
      </div>
    );
  }

}

export default FeaturedVid;
