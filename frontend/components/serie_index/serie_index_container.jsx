import { connect } from 'react-redux';
import { fetchSeries, fetchSerie } from '../../actions/serie_actions';
import SerieIndex from './serie_index';

const mapStateToProps = state => {

  return {
    series: Object.keys(state.series).map(id => state.series[id])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSeries: () => dispatch(fetchSeries()),
    fetchSerie: id => dispatch(fetchSerie(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SerieIndex);
