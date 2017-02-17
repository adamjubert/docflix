import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className='footer-main'>
        <div className='footer-container'>
          <h4>Questions? Call <a href='tel:3215019040' className='footer-link'>321-501-9040</a></h4>
          <ul>
            <li><a href="http://adamjubert.com" className='footer-link'>Website</a></li>
            <li><a href="https://github.com/adamjubert" className='footer-link'>Github</a></li>
            <li><a href="https://linkedin.com/in/adam-jubert-1b110989" className='footer-link'>LinkedIn</a></li>
          </ul>
        </div>
      </footer>
    );
  }

}

export default Footer;
