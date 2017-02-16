import { connect } from 'react-redux';
import { fetchSeries, fetchSerie } from '../../actions/serie_actions';
import SerieIndex from './serie_index';

const mapStateToProps = state => {
  return {
    series: fetchSeries()
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SerieIndex);
