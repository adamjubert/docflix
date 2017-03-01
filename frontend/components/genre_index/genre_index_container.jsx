import { connect } from 'react-redux';
import { fetchGenres, fetchGenre } from '../../actions/genre_actions';
import { fetchSerie, fetchSeries } from '../../actions/serie_actions';
import GenreIndex from './genre_index';

const mapStateToProps = state => {
  let myList = { id: 0, name: 'My List', series: state.series };
  let genres = [myList].concat(Object.keys(state.genres).map(id => state.genres[id]));
  return {
    genres
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    fetchSerie: id => dispatch(fetchSerie(id)),
    fetchSeries: () => dispatch(fetchSeries())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex);
