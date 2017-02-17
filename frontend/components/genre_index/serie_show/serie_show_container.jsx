import { connect } from 'react-redux';
import { fetchSerie } from '../../../actions/serie_actions';
import SerieShow from './serie_show';

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

export default connect(mapStateToProps, mapDispatchToProps)(SerieShow);
