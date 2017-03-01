import React from 'react';
import SerieShowContainer from './serie_show_container';
import SerieOverview from './serie_overview/serie_overview';
import SerieEpisodes from './serie_episodes/serie_episodes';
import SerieDetailsContainer from './serie_details/serie_details_container';
import FootLinks from './foot_links';

class SerieShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedPane: 0, fetching: true };


  }

  componentDidMount() {
    this.props.fetchSerie(this.props.serieId).then(() => (this.setState({fetching: false})));
    this.props.fetchLikes().then(() => (this.setState({fetching: false})));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.serieId !== this.props.serieId) {
      this.props.fetchSerie(newProps.serieId).then(() => (this.setState({fetching: false})));
      this.setState({selectedPane: 0, fetching: true});
    }
  }

  selectPane(num) {
    const panes = [
      <SerieOverview serie={this.props.serie}/>,
      <SerieEpisodes serie={this.props.serie}/>,
      <SerieDetailsContainer serie={this.props.serie}/>
    ];
    return(panes[num]);
  }

  selectTab(num) {
    this.setState({selectedPane: num});

  }



  render() {
    if (this.state.fetching) return(
      <div className='serie-expand'>
        <div className='serie-expand-content'>
          <div className='serie-expand-loading'>loading...</div>
            <FootLinks episodeCount='0'
                       selectedPane={this.state.selectedPane}
                       onTabChosen={this.selectTab.bind(this)} />
        </div>
      </div>
    );

    const serie = this.props.serie;

    return(
      <div className='serie-expand'>
        <div className='serie-expand-content'>
          { this.selectPane(this.state.selectedPane) }
          <FootLinks episodeCount={serie.episodes.length}
                     selectedPane={this.state.selectedPane}
                     onTabChosen={this.selectTab.bind(this)} />
        </div>
      </div>
    );
  }
}

export default SerieShow;
