import React from 'react';
import StarRatingEdit from '../star_rating_edit';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props;
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
    debugger
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action({
      stars: parseInt(this.state.stars),
      comment: this.state.comment,
      user_id: this.props.user_id,
      series_id: this.props.series_id
     });
  }

  render () {
    const text = "Create Review";
    return (
      <div>
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Stars
            <input
              type="text"
              value={this.state.stars}
              onChange={this.update('stars')} />
          </label>
          <label>
            <StarRatingEdit onClick={this.update('stars')} />
          </label>
          <label>
            <textarea
              value={this.state.comment}
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
