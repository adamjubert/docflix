import React from 'react';

class SerieIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedSerie: null };
  }

  componentDidMount() {
    this.props.fetchSeries();
  }

  showSerie(serie) {
    return () => {
      this.setState({clickedSerie: this.clickedSerie(serie)});
    };
  }

  clickedSerie(serie) {
    return(
      <div className='serie-expand-main'>
        <div className='serie-overview-left'>
          <section className='serie-overview-left-container'>
            <h2>{serie.name}</h2>
            <ul>
              <li>{serie.avg_review}</li>
              <li>{serie.year}</li>
              <li>{serie.mpaa_rating}</li>
            </ul>
            <p>{serie.description}</p>
          </section>
        </div>
        <div className='serie-overview-right'>
          <section>
            <div className='video'></div>
          </section>
        </div>
      </div>
    );
  }

  seriesList() {
    return(
      <div className='serie-specific-genre'>
        <ul className='serie-specific-genre-list'>
          {this.props.series.map(serie => (
            <li key={serie.id}
                onClick={this.showSerie(serie)}
                className='serie-specific-genre-list-item'>{serie.name}</li>
          ))}
        </ul>
      { this.state.clickedSerie }
    </div>
    );
  }

  render() {
    return(
      <div className='serie-index-main'>
        <div className='serie-genre-main'>
          <h3>Nature</h3>
          {this.seriesList()}
        </div>
      </div>
    );
  }

}

export default SerieIndex;
