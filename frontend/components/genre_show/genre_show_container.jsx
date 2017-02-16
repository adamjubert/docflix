import { connect } from 'react-redux';
import { fetchGenre } from '../../actions/genre_actions';
import GenreShow from './genre_show';

const mapStateToProps = ({ genre }) => {
  return {
    genres
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGenre: id => dispatch(fetchGenre(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreShow);
