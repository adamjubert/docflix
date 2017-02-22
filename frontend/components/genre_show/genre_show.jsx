import React from 'react';

class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.id);
  }


  render() {

    return(
      <div className='genre-index-main'>
        <h1>hey</h1>
      </div>
    );
  }

}

export default GenreIndex;
