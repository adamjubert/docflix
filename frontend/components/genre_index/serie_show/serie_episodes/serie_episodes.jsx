import React from 'react';

class SerieEpisodes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const serie = this.props.serie;
    return(
      <div className='serie-expand-main'>
        <div className='serie-episodes-container'>
          <h2>{serie.name}</h2>
          <ul className='serie-episodes-list'>
            {serie.episodes.map((episode) => (
              <li className='serie-episodes-list-item'
                key={"episode-" + episode.id}>
                <ul className='episode-contents'>
                  <li><img src='#' width="100%" height="100%"></img></li>
                  <li>
                    <ul className='episode-name-runtime'>
                      <li>{ episode.name }</li>
                      <li>{ episode.runtime }m</li>
                    </ul>
                  </li>
                  <li>{ episode.description }</li>
                </ul>
            </li>
          ))}
          </ul>

        </div>
      </div>
    );
  }
}

export default SerieEpisodes;
