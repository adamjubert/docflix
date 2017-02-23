import React from 'react';
import Slider from 'react-slick';


class GenreShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true, clickedSerie: null};
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.id).then(() => this.setState({fetching: false}));
  }

  showSerie(serie) {
    return () => {
      this.setState({
        clickedSerie: serie,
      });
    };
  }


  render() {
    if (this.state.fetching) {
      return null;
    }

    let settings = {
     dots: true,
     arrows: true,
     infinite: false,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 2,
   };

   let series = this.props.genre.series;

   const items = series.map((serie, idx) => {
     debugger
     return (
       <div>
          <img src={serie.thumbnail_url} ></img>
       </div>
     );
   });
   return (
     <Slider {...settings}>
       {items}
     </Slider>
   );
  }
}

export default GenreShow;
