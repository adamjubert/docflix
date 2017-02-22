import { connect } from 'react-redux';
import { fetchGenre } from '../../actions/genre_actions';
import GenreShow from './genre_show';

const mapStateToProps = (state, ownProps) => {
  return {
    genre: state.genres,
    id: ownProps.params.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGenre: id => dispatch(fetchGenre(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreShow);
