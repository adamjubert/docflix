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
    top                        : '16%',
    left                       : '16%',
    right                      : '16%',
    bottom                     : '16%',
    background                 : '#222',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    padding                    : '20px'

  }
};

class ReviewModal extends React.Component {
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
      <div>
        <p onClick={this.openModal}
           className='review-modal-link white'>
           See all reviews ({this.props.reviewCount})
        </p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

           <div className='temp-modal-title'>
             <h1 className='white'>Reviews will go here</h1>
           </div>

        </Modal>
      </div>
    );
  }
}


export default ReviewModal;
