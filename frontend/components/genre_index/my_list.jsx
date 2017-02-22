import React from 'react';

class MyList extends React.Component {

  render() {
    return(

      <div className='genre-list-item' >
        <div className='genre-title'>
          <h3 className='genre-title-item'>My List</h3>
        </div>
        { this.props.likes }
      </div>

    );
  }
}

export default MyList;
