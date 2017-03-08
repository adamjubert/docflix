import { connect } from 'react-redux';
import { fetchSerie } from '../../../actions/serie_actions';
import { createReview } from '../../../actions/review_actions';
import { fetchLikes } from '../../../actions/like_actions';
import SerieShow from './serie_show';

const mapStateToProps = (state, ownProps) => {
  let serie = state.serie;
  let removeSerieShow = ownProps.removeSerieShow.bind(this);

  return {
    serie,
    removeSerieShow
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchLikes: () => dispatch(fetchLikes()),
    fetchSerie: (id) => dispatch(fetchSerie(id)),
    createReview: (review) => dispatch(createReview(review))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SerieShow);
