import React from 'react';

class GenreShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true, clickedSerie: null};
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.id).then(() => this.setState({fetching: false}));
  }

  showSerie(serie) {
    return () => {

      this.setState({
        clickedSerie: serie,
      });
    };
  }


  render() {
    if (this.state.fetching) {
      return null;
    }
    const numOfRows = Math.floor(this.props.genre / 5);
    let series = this.props.genre.series;
    return (
      <div className='genre-show-main'>
        <ul>
          { series.map((serie) =>
            <li onClick={this.showSerie(serie)}
                key={"genre-serie-" + serie.id}>
                <img src={serie.thumbnail_url} width="100%" height="100%"></img>
            </li>
          )}
          </ul>
      </div>
    );
  }
}

export default GenreShow
