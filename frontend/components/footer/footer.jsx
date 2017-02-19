import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className='footer-main'>
        <div className='footer-container'>
          <h4>Questions? Email <a href='mailto:jubert.adam@gmail.com' className='footer-link'>Jubert.Adam@gmail.com</a></h4>
          <ul>
            <li><a target="_blank" href="http://adamjubert.com" className='footer-link'>Website</a></li>
            <li><a target="_blank" href="https://github.com/adamjubert" className='footer-link'>Github</a></li>
            <li><a target="_blank" href="https://linkedin.com/in/adam-jubert-1b110989" className='footer-link'>LinkedIn</a></li>
          </ul>
        </div>
      </footer>
    );
  }

}

export default Footer;
