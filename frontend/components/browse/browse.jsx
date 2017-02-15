import React from 'react';
import { Link } from 'react-router';
import FeaturedVid from '../featured_vid/featured_vid';

class Browse extends React.Component {

  render() {
    return (
      <div className='browse-main'>
        <FeaturedVid />
      </div>
    );
  }

}

export default Browse;
