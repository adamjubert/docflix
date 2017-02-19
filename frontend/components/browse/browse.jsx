import React from 'react';
import { Link } from 'react-router';
import FeaturedVid from '../featured_vid/featured_vid';
import GenreIndexContainer from '../genre_index/genre_index_container';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='browse-main'>
        <FeaturedVid />
        <GenreIndexContainer />
        { this.props.children }
      </div>
    );
  }

}

export default Browse;
