import { connect } from 'react-redux';
import { fetchGenres, fetchGenre } from '../../actions/genre_actions';
import { fetchSerie } from '../../actions/serie_actions';
import GenreIndex from './genre_index';

const mapStateToProps = state => {
  return {
    genres: Object.keys(state.genres).map(id => state.genres[id])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
    fetchSerie: id => dispatch(fetchSerie(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex);
