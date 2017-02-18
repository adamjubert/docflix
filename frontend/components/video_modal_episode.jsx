import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

//
// //
// //
// const appElement = document.getElementById('root');

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.9)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '0px',
    right                      : '0px',
    bottom                     : '40px',
    background                 : '#222',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    padding                    : '20px'

  }
};

class VideoModalEpisode extends React.Component {
  componentWillMount() {
    Modal.setAppElement('body');
  }

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <li>
        <img src={ this.props.thumbnail_url } width="100%" height="100%" onClick={ this.openModal }></img>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <i className="fa fa-arrow-circle-left white video-close"
             aria-hidden="true"
             onClick={this.closeModal}></i>
           <div className='temp-modal-title'>
             <h1 className='white'>Video will go here</h1>
             <img src={this.props.videoSource} height="100" width="100"></img>
           </div>

        </Modal>
      </li>
    );
  }
}


export default VideoModalEpisode;
