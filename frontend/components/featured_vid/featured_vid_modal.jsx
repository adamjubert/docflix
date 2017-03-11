import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
    background                 : '#000',
    border                     : 'none',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    padding                    : ''

  }
};

class FeaturedVidModal extends React.Component {
  componentWillMount() {
    Modal.setAppElement('body');
  }

  constructor(props) {
    super(props);
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
      <div className='featured-vid' >
        <video width="100%" height="100%" autoPlay loop muted  >
          <source src={this.props.videoSource}
                  type="video/mp4" />
        </video>
        <div className='featured-vid-text'>
          <h1>Another World</h1>
          <h2>A Docflix Featured Documentary</h2>
          <button onClick={ this.openModal }><i className="fa fa-play" aria-hidden="true"></i> Play Now</button>
        </div>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <i
            className="fa fa-arrow-circle-left fa-modal-back"
            aria-hidden="true"
            onClick={this.closeModal}></i>
            <video width="100%" height="100%" controls autoPlay  >
              <source src={this.props.videoSource} type="video/mp4" />
            </video>

        </Modal>
      </div>
    );
  }
}

export default FeaturedVidModal;
