// NB: possible point of failure because serie is passed down through props

import React from 'react';
import SerieShowContainer from './serie_show_container';
import SerieOverview from './serie_overview/serie_overview';
import SerieEpisodes from './serie_episodes/serie_episodes';
import SerieDetails from './serie_details/serie_details';
import FootLinks from './foot_links';

class SerieShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedPane: 0};

  }

  componentDidMount() {
    this.props.fetchSerie(this.props.serieId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.serieId !== this.props.serieId) {
      this.props.fetchSerie(newProps.serieId);
      this.setState({selectedPane: 0});
    }
  }

  selectPane(num) {
    const panes = [
      <SerieOverview serie={this.props.serie}/>,
      <SerieEpisodes serie={this.props.serie}/>,
      <SerieDetails serie={this.props.serie}/>
    ];
    return(panes[num]);
  }

  selectTab(num) {
    this.setState({selectedPane: num});

  }



  render() {
    if (!this.props.serie.id) return null;
    const serie = this.props.serie;
    return(
      <div className='serie-expand'>
        <div className='serie-expand-content'>
          { this.selectPane(this.state.selectedPane) }
          <FootLinks selectedPane={this.state.selectedPane}
                     onTabChosen={this.selectTab.bind(this)} />
        </div>
      </div>
    );
  }
}

export default SerieShow;


////////
// <SerieOverview serie={this.props.serie}/>
// <SerieEpisodes serie={this.props.serie}/>
// <SerieDetails serie={this.props.serie}/>



///////////
// <div className='serie-overview-left'>
//   <section className='serie-overview-left-container'>
//     <h2>{serie.name}</h2>
//     <ul className='serie-overview-list'>
//       <li>{serie.avg_review} Stars</li>
//       <li>{serie.year}</li>
//       <li className='mpaa-rating'>TV-{serie.mpaa_rating}</li>
//     </ul>
//     <p>{this.props.serie.description}</p>
//   </section>
// </div>
// <div className='serie-overview-right'>
//   <section className='serie-overview-right-container'>
//     <div className='serie-overview-video'></div>
//   </section>
// </div>
