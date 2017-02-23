import React from 'react';
import Slider from 'react-slick';
import SerieShowContainer from '../genre_index/serie_show/serie_show_container';



class GenreShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true, clickedSerie: null, count: 5 };
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.id).then(() => this.setState({fetching: false}));
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  showSerie(serie) {
    return () => {
      this.setState({
        clickedSerie: serie,
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


 seriesList(row) {

   return(
       <ul>
         { row.map((serie) => (

             <div className='series-list-item'
                 key={"serie-" + serie.id}
                 onClick={this.showSerie(serie)}>
                 <img src={serie.thumbnail_url} width="100%" height="100%" ></img>
             </div>
         )) }
       </ul>
   );
 }

 rowsList(rowsOfSeries) {
   return(
     <div className='row-list-container'>
       <ul className='row-list'>
         {rowsOfSeries.map((row, idx) => (
           <div key={"row-" + idx} className='row-list-item' >

              { this.seriesList(row) }

             { this.state.clickedGenre ?
               <SerieShowContainer serieId={this.state.clickedSerie.id} /> : '' }
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

    let series = this.props.genre.series;
    let numOfRows = Math.floor(series.length / this.state.count) + 1;  // # of series / # of series per row

    let i,j,chunk = numOfRows;
    let splitSeries = [];
    for (i = 0, j = series.length; i < j; i += chunk) {
        splitSeries.push(series.slice(i, i + chunk));
    }
    return(
      <div className='genre-show-main' >
        <div className='genre-show-container'>
          {this.rowsList(splitSeries)}
        </div>
      </div>
    );

  }
}
export default GenreShow;
