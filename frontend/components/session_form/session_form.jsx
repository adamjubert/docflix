import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>Sign up now.</Link>;
    } else {
      return <Link to='/login'>Sign in to Docflix.</Link>;
    }
  }

  navText() {
    if (this.props.formType === 'login') {
      return 'New to Docflix?';
    } else {
      return 'Already have an account?';
    }
  }

  formText() {
    if (this.props.formType === 'login') {
      return 'Sign In';
    } else {
      return 'Sign Up';
    }
  }

  submitButtonText() {
    if (this.props.formType === 'login') {
      return 'Sign In';
    } else {
      return 'Register';
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((erorr, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  _fName() {
    if (this.props.formType === 'signup') {
      return(
          <label>First Name:
            <input type='text'
                   value={this.state.fname}
                   onChange={this.update('fname')}
                   className='login-input'/>
          </label>
      );
    }
  }
  _lName() {
    if (this.props.formType === 'signup') {
      return(
          <label>Last Name:
            <input type='text'
                   value={this.state.lname}
                   onChange={this.update('lname')}
                   className='login-input'/>
          </label>
      );
    }
  }

  render() {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <div className='login-form'>
          <h3 className="login-header-text">{this.formText()}</h3>
            <label>Email:
              <input type='text'
                     value={this.state.email}
                     onChange={this.update('email')}
                     className='login-input'/>
            </label>
            <br/>
            <label>Password:
              <input type='password'
                     value={this.state.password}
                     onChange={this.update('password')}
                     className='login-input'/>
                 </label><br/>
            { this._fName() }
            { this._lName() }
            <br/>

            <input type='submit' value={this.submitButtonText()}></input>
          </div>
          Login with guest account
          {this.navText()} {this.navLink()}
        </form>
      </div>
    );
  }
}


export default withRouter(SessionForm);
