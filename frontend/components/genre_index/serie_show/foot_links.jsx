import React from 'react';

class FootLinks extends React.Component {

  footers() {

  }
  render() {
    const activeTab = 'selected';
    return (
      <div className='foot-links'>
        <ul>
          <li onClick={this.props.onTabChosen.bind(this, 0)}
              className={ activeTab }
              >Overview</li>
          <li onClick={this.props.onTabChosen.bind(this, 1)}
              className={ activeTab }
              >Episodes</li>
          <li onClick={this.props.onTabChosen.bind(this, 2)}
              className={ activeTab }
              >Details</li>
        </ul>
      </div>

    );
 }
}

export default FootLinks;
