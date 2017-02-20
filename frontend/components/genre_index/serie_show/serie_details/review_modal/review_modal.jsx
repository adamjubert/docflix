import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ReviewsPreviewContainer from '../reviews_preview/reviews_preview_container';

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
    background                 : '',
    border                     : '',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    padding                    : '0 20px'
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
    const reviews = this.props.serie.reviews;
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

         <div className='review-modal-container'>
           <i className="fa fa-times close-review-modal"
             aria-hidden="true"
             onClick={ this.closeModal }></i>
           <div className='review-modal-top'>
             <section>
               <h2>{this.props.reviewCount} Member Reviews for {this.props.serie.name}</h2>
               <button>Write a Review</button>
             </section>
           </div>
           <div className='review-modal-bottom'>
             <ReviewsPreviewContainer reviews={reviews} styling={'review-index-comment'}/> />
           </div>
         </div>

        </Modal>
      </div>
    );
  }
}


export default ReviewModal;
