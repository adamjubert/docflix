import React from 'react';
import SerieShowContainer from '../serie_show/serie_show_container';
import { Link, Router } from 'react-router';
import { Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import Carousel from 'nuka-carousel';


class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true, clickedSerie: null, clickedGenre: null, count: 5 };
    this.handleResize = this.handleResize.bind(this);

  }



  componentDidMount() {
    this.props.fetchGenres().then(() => this.setState({fetching: false}));
    this.props.fetchSeries().then(() => this.setState({fetching: false}));
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  seriesExpand(serie, genre) {
    return () => {
      this.setState({
        clickedSerie: serie,
        clickedGenre: genre
      });
    };
  }


  handleResize(){
   const count = this.state.count;
   const width = $(window).width();

   if (width >= 1800 && count !== 6){
     this.setState({ count: 6 });
   } else if(width < 1800 && width >= 1420 && count !== 5){
     this.setState({ count: 5 });
   } else if(width < 1420 && width >= 1140 && count !== 4){
     this.setState({ count: 4 });
   } else if(width < 1140 && width >= 820 && count !== 3){
     this.setState({ count: 3 });
   } else if(width < 820 && width > 480 && count !== 2){
     this.setState({ count: 2 });
   } else if(width <= 480 && count !== 1){
     this.setState({ count: 1 });
   }
 }

 leftDecorator() {
   return {
    component: React.createClass({
      render() {
        return (
          <button
            className="slider-button"
            onClick={ this.props.currentSlide < this.props.slidesToScroll && this.props.currentSlide !== 0  ?
              () => this.props.goToSlide(0) :
              this.props.previousSlide  }>
            <i className="fa fa-angle-left" aria-hidden="true" />
          </button>
        );
      }
    }),
    position: 'CenterLeft'
  };
 }

 rightDecorator() {
   return {
    component: React.createClass({
        render() {
          return (
            <button
              className="slider-button"
              onClick={this.props.currentSlide > this.props.slideCount - this.props.slidesToScroll ?
                () => this.props.goToSlide(this.props.slideCount) :
                this.props.nextSlide  }>
              <i className="fa fa-angle-right" aria-hidden="true" />
            </button>
          );
        },
      }),
      position: 'CenterRight'
    };
 }

 carousel(genre) {
   return <Carousel
     slidesToShow={this.state.count}
     slidesToScroll={this.state.count}
     dragging={false}
     swiping={false}
     wrapAround = {true}
     initialSlideWidth={500}
     initialSlideHeight={300}
     height={'100%'}
     width={'100%'}
     speed={500}
     cellSpacing={4}
     decorators={[ this.leftDecorator() , this.rightDecorator() ]}>

      { genre.series.map((serie) => (
       <div className='series-list-item'
         key={"serie-" + serie.id}
         onClick={this.seriesExpand(serie, genre)}>
         <img src={serie.thumbnail_url} width="100%" height="100%" ></img>
       </div>
      )) }
    </Carousel>;
 }

  seriesList(genre) {
    if ( genre.series instanceof Array === false ) { return null; }
    return(
      <div >
        <ul className='slider-list-main'>
          { this.carousel(genre) }
        </ul>
      </div>
    );
  }


  goToGenre(id) {
      const path = `browse/genre/${id}`;
      return(
        () => this.props.router.push(path)
      );
    }

  removeSerieShow() {
    this.setState({
      clickedSerie: null,
      clickedGenre: null
    });
  }

  genresList() {
    let genres = this.props.genres;
    return(
      <div className='genre-list-container'>
        <ul className='genre-list'>
          {genres.map((genre) => (
            <div key={"genre-" + genre.id} className='genre-list-item' >
              <div className='genre-title'>
                <a className='genre-title-item'>{genre.name}</a>
              </div>

              { this.seriesList(genre) }

              { this.state.clickedGenre && genre.id === this.state.clickedGenre.id ?
                <SerieShowContainer serieId={this.state.clickedSerie.id}
                  removeSerieShow={this.removeSerieShow.bind(this)} /> :
                '' }
            </div>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    if (this.state.fetching) {
      return null;
    }
    return(
      <div className='genre-index-main' >
        <div className='genre-index-container'>
          {this.genresList()}
        </div>
      </div>
    );
  }

}

export default withRouter(GenreIndex);
