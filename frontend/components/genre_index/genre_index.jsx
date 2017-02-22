import React from 'react';
import SerieShowContainer from './serie_show/serie_show_container';
import { Link, Router } from 'react-router';
import { Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import MyList from './my_list';


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

                <img src={serie.thumbnail_url} width="100%" height="100%"></img>
            </li>

          )) }
        </ul>
      </div>
    );
  }

  goToGenre(id) {
      const path = `browse/genre/${id}`;
      return(
        () => this.props.router.push(path)
      );
    }

  genresList() {
    let genres = this.props.genres;

    return(
      <div className='genre-list-container'>
        <ul className='genre-list'>
          <MyList likes={this.props.likes} />
          {this.props.genres.map((genre) => (
            <div key={"genre-" + genre.id} className='genre-list-item' >
              <div className='genre-title'>
                <h3
                    className='genre-title-item'
                    onClick={this.goToGenre(genre.id)}
                    >{genre.name}</h3>
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
      <div className='genre-index-main' >
        <div className='genre-index-container'>
          {this.genresList()}
        </div>
      </div>
    );
  }

}

export default withRouter(GenreIndex);

// <GenreList genres={ this.props.genres }/>
