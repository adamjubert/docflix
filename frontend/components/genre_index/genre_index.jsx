import React from 'react';
import SerieShowContainer from './serie_show/serie_show_container';
import { Link } from 'react-router';


class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true, clickedSerie: null, clickedGenre: null };
  }

  componentDidMount() {
    this.props.fetchGenres().then(() => this.setState({fetching: false}));
  }

  // NB: if slowdown, this is the issue. Ask Meagan for help
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
              <div className='genre-title'>
                <Link to="#"
                      key={"genre-" + genre.id}
                      className='genre-title-item'>{genre.name}</Link>
              </div>
              { this.seriesList(genre) }
              { genre === this.state.clickedGenre ?
                          <SerieShowContainer serieId={this.state.clickedSerie.id} /> :
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
          {this.genresList(this.props.genres)}
        </div>
      </div>
    );
  }

}

export default GenreIndex;

// <GenreList genres={ this.props.genres }/>
