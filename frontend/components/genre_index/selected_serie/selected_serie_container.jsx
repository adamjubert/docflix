import { connect } from 'react-redux';
import { fetchSerie } from '../../../actions/serie_actions';
import SelectedSerie from './selected_serie';

const mapStateToProps = ({ serie }) => {
  return {
    serie
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchSerie: (id) => dispatch(fetchSerie(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedSerie);
