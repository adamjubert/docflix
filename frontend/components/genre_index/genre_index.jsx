import React from 'react';
import SerieShowContainer from './serie_show/serie_show_container';
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

  // NB: if slowdown, this could be the issue
  showSerie(serie, genre) {
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

   if (width > 1600 && count !== 5){
     this.setState({ count: 5 });
   }else if(width < 1420 && width > 1040 && count !== 4){
     this.setState({ count: 4 });
   }else if(width < 1140 && width > 720 && count !== 3){
     this.setState({ count: 3 });
   }else if(width < 820 && width > 480 && count !== 2){
     this.setState({ count: 2 });
   }else if(width <= 480 && count !== 1){
     this.setState({ count: 1 });
   }
 }



  seriesList(genre) {
    return(
      <div >
        <ul>
          <Carousel
            slidesToShow={this.state.count}
            slidesToScroll={'auto'}
            dragging={false}
            swiping={false}
            wrapAround = {true}
            initialSlideWidth={500}
            initialSlideHeight={300}
            height={'100%'}
            width={'95%'}
            cellSpacing={10}
            decorators={[{
                     component: React.createClass({
                       render() {
                         return (

                           <button
                             className="slider-button"
                             onClick={this.props.previousSlide}>
                             <i className="fa fa-angle-left" aria-hidden="true" />
                           </button>
                         );
                       }
                     }),
                     position: 'CenterLeft'
                   },{
                     component: React.createClass({
                       render() {
                         return (
                           <button
                             className="slider-button"
                             onClick={this.props.previousSlide}>
                             <i className="fa fa-angle-right" aria-hidden="true" />
                           </button>
                         );
                       },
                     }),
                     position: 'CenterRight'
                   }]}>
          { genre.series.map((serie) => (

              <div className='series-list-item'
                  key={"serie-" + serie.id}
                  onClick={this.showSerie(serie, genre)}>
                  <img src={serie.thumbnail_url} width="100%" height="100%" ></img>
              </div>

          )) }
        </Carousel>
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

  genresList() {
    let genres = this.props.genres;
    return(
      <div className='genre-list-container'>
        <ul className='genre-list'>
          {this.props.genres.map((genre) => (
            <div key={"genre-" + genre.id} className='genre-list-item' >
              <div className='genre-title'>
                <a
                    className='genre-title-item'
                    onClick={this.goToGenre(genre.id)}
                    >{genre.name}</a>
              </div>

                { this.seriesList(genre) }

              { this.state.clickedGenre && genre.id === this.state.clickedGenre.id ?
                          <SerieShowContainer serieId={this.state.clickedSerie.id} /> :
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

// <GenreList genres={ this.props.genres }/>
