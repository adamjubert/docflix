import React from 'react';
import VideoModalEpisode from '../video_modal_episode.jsx';
import Carousel from 'nuka-carousel';





class SerieEpisodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true, clickedSerie: null, clickedGenre: null, count: 5 };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(){
   const count = this.state.count;
   const width = $(window).width();

   if (width >= 1900 && count !== 7){
     this.setState({ count: 7 });
   }else if(width < 1900 && width >= 1520 && count !== 6){
     this.setState({ count: 6 });
   }else if(width < 1520 && width >= 1200 && count !== 5){
     this.setState({ count: 5 });
   }else if(width < 1200 && width >= 720 && count !== 4){
     this.setState({ count: 4 });
   }else if(width < 720 && width > 480 && count !== 3){
     this.setState({ count: 3 });
   }else if(width <= 480 && count !== 2){
     this.setState({ count: 2 });
   }
 }


  render() {
    const serie = this.props.serie;
    return(
      <div className='serie-episodes-main'>
        <div className='serie-container'>
          <div className='serie-title-container'>
            <h2 className='serie-title'>{serie.name}</h2>
          </div>

          <ul className='serie-episodes-list'>

            <Carousel
              slidesToShow={this.state.count}
              slidesToScroll={1}
              dragging={false}
              swiping={false}
              wrapAround = {false}
              initialSlideWidth={500}
              initialSlideHeight={300}
              height={'100%'}
              width={'100%'}
              cellSpacing={200}
              decorators={[{
                       component: React.createClass({
                         render() {
                           return (

                             <button
                               className="slider-button ep-button-l"
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
                               className="slider-button ep-button-r"
                               onClick={this.props.nextSlide}>
                               <i className="fa fa-angle-right" aria-hidden="true" />
                             </button>
                           );
                         },
                       }),
                       position: 'CenterRight'
                     }]}>

            {serie.episodes.map((episode) => (
              <div className='serie-episodes-list-item'
                key={"episode-" + episode.id}>
                <ul className='episode-contents'>
                  <VideoModalEpisode videoSource={ episode.video_url } thumbnail={ episode.thumbnail_url }/>

                  <li>
                    <ul className='episode-name-runtime'>
                      <li>{ episode.name }</li>
                      <li>{ episode.runtime }m</li>
                    </ul>
                  </li>
                  <li className='episode-description'>{ episode.description }</li>
                </ul>
            </div>
          ))}
</Carousel>
          </ul>

        </div>
      </div>
    );
  }
}

export default SerieEpisodes;
