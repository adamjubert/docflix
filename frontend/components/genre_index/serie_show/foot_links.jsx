import React from 'react';

class FootLinks extends React.Component {

  render() {
    return (
      <div className='tab-header'>
        <ul>
          <li onClick={this.props.onTabChosen.bind(this, 0)}
              className={tab-active}
              >Overview</li>
          <li onClick={this.props.onTabChosen.bind(this, 1)}
              className={tab-active}
              >Episodes</li>
          <li onClick={this.props.onTabChosen.bind(this, 2)}
              className={tab-active}
              >Details</li>
        </ul>
      </div>

    );
 }
}

export default FootLinks;
