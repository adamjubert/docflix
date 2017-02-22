import React from 'react';
import StarRating from '../../../star_rating';
import GenreIndex from '../../genre_index';

class SerieOverviewLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  avgStars() {
    const reviews = this.props.serie.reviews;
    const sum = reviews.reduce(function(prevVal, review) {
      return prevVal + parseInt(review.stars);
    }, 0);
    return(
      sum === 0 ? 0 : Math.round(((sum / reviews.length) * 10 ) / 10 )
    );
  }

  addButton() {

    return(
      <div className='my-list'
        onClick={() => this.props.createLike({
           user_id: this.props.currentUser.id,
           serie_id: this.props.serie.id
         })}>
        <i className="fa fa-plus-circle my-list-btn"
           aria-hidden="true"
           ></i><p>MY LIST</p>
      </div>
    );
  }

  deleteButton() {
    let likeToDelete;
    let likes = this.props.likes;
    for (var i = 0; i < likes.length; i++) {
      if (likes[i].serie_id === this.props.serie.id && likes[i].user_id === this.props.currentUser.id) {
        likeToDelete = likes[i].id;
      }
    }

    return(
      <div className='my-list'
            onClick={() => this.props.deleteLike(likeToDelete)}>
        <i className="fa fa-check-circle my-list-btn"
           aria-hidden="true"
           ></i><p>MY LIST</p>
      </div>
    );
  }

  userLikesSerie() {
    // iterate through likes, check serie id against current series id
    // this.props.likes.forEach((like) => ( like.serie_id === this.props.serie.id ? {return true} : console.log('no')))
    const likes = this.props.likes;
    for (var i = 0; i < likes.length; i++) {
      if (likes[i].serie_id === this.props.serie.id) {
        return true;
      }
    }
    return false;
  }

  render() {
    const serie = this.props.serie;
    return(
      <div className='serie-overview-left'>
        <section className='serie-overview-left-container'>
          <h2 className='serie-title'>{serie.name}</h2>
          <ul className='serie-overview-list'>
            <li><StarRating rating={ this.avgStars() }/></li>
            <li>{serie.year}</li>
            <li className='mpaa-rating'>TV-{serie.mpaa_rating}</li>
          </ul>
          <p>{this.props.serie.description}</p>
          { this.userLikesSerie() ? this.deleteButton() : this.addButton() }
        </section>
      </div>
    );
  }
}

export default SerieOverviewLeft;
