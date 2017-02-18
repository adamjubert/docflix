import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchReview(this.props.params.reviewId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.review);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render () {
    const text = this.props.formType === 'new' ? "Create Review" : "Update Review";
    return (
      <div>
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              onChange={this.update('comment')} />
          </label>
          <input type="submit" value={text} />
        </form>
      </div>
    );
  }
}

export default ReviewForm;

//
// <label>Title
//   <input
//     type="text"
//     value={this.state.title}
//     onChange={this.update('title')} />
// </label>
// <label>
//   <textarea
//     value={this.state.body}
//     onChange={this.update('body')} />
// </label>
