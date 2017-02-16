import React from 'react';
import SelectedSerieContainer from './selected_serie/selected_serie_container';

class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true, clickedSerie: null, clickedGenre: null };
  }

  componentDidMount() {
    this.props.fetchGenres().then(() => this.setState({fetching: false}));
  }

  showSerie(serie, genre) {
    return () => {
      this.setState({
        clickedSerie: serie,
        clickedGenre: genre
      });
    };
  }

  seriesList(genre) {
    return(
      <div className='series-list-container'>
        <ul className='series-list'>
          { genre.series.map((serie) => (
            <li className='series-list-item'
                key={"serie-" + serie.id}
                onClick={this.showSerie(serie, genre)}>
                {serie.name}
            </li>

          )) }
        </ul>
      </div>
    );
  }

  genresList() {
    return(
      <div className='genre-list-container'>
        <ul className='genre-list'>
          {this.props.genres.map((genre) => (
            <div className='genre-list-item'>
              <h3 key={"genre-" + genre.id}
                  className='genre-title'>{genre.name}</h3>
                { this.seriesList(genre) }
                { genre === this.state.clickedGenre ?
                            <SelectedSerieContainer serieId={this.state.clickedSerie.id} /> :
                              '' }
            </div>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    if (this.state.fetching) {
      return null;
    }
    return(
      <div className='genre-index-main'>
        <div className='genre-index-container'>
          {this.genresList()}
        </div>
      </div>
    );
  }

}

export default GenreIndex;

// <GenreList genres={ this.props.genres }/>
