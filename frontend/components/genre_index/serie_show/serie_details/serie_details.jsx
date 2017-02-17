import React from 'react';

class SerieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const serie = this.props.serie;
    return(
      <div className='serie-expand-main'>
        <div className='serie-reviews-container'>
          <h2>{serie.name}</h2>
          <div className='serie-reviews-preview'>
            
          </div>
          <div className='serie-reviews-create'>

          </div>
        </div>
      </div>
    );
  }
}

export default SerieDetails;
