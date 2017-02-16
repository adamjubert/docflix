import React from 'react';

class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };
  }

  componentDidMount() {
    this.props.fetchGenre(id).then(() => this.setState({fetching: false}));
  }


  render() {
    if (this.state.fetching) {
      return null;
    }
    return(
      <div className='genre-index-main'>
        <h1>hey</h1>
      </div>
    );
  }

}

export default GenreIndex;
