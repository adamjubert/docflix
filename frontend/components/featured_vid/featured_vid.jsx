import React from 'react';
import FeaturedVidModal from './featured_vid_modal';


class FeaturedVid extends React.Component {



  render() {
    return (
      <div className='featured-vid'>

                <FeaturedVidModal videoSource='http://s3.amazonaws.com/docflix-dev/episodes/videos/000/000/195/original/video.mp4?1487771531' />

      </div>
    );
  }

}

export default FeaturedVid;

// openModal() {
//   return(
//     () => <VideoModalBasic videoSource='http://s3.amazonaws.com/docflix-dev/episodes/videos/000/000/141/original/video.mp4?1487540566'>
//   }
// }
//         <VideoModalBasic videoSource='http://s3.amazonaws.com/docflix-dev/episodes/videos/000/000/141/original/video.mp4?1487540566' />
