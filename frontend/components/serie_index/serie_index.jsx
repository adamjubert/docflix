import React from 'react';

class SerieIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    this.props.fetchSeries();
  }



  render() {
    if (this.props.series.length > 0) {
      return(
        <div>
          {this.props.series.map(serie => (<li key={serie.id}>serie.name</li>))}
        </div>
      );
    } else {
      return(
        <div>hellooo</div>
      );
    }


  }

}

export default SerieIndex;
