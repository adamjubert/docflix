import React from 'react';
import { Link } from 'react-router';
import FeaturedVid from '../featured_vid/featured_vid';
import SerieIndexContainer from '../serie_index/serie_index_container';

class Browse extends React.Component {

  render() {
    return (
      <div className='browse-main'>
        <FeaturedVid />
        <SerieIndexContainer />
      </div>
    );
  }

}

export default Browse;
