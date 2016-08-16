import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  static propTypes = {
    loginRequest: PropTypes.func.isRequired
  }

  handlePasswordChange(ev) {
    this.setState({ password: ev.target.value });
  }

  handleUsernameChange(ev) {
    this.setState({ email: ev.target.value });
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.loginRequest(this.state.email, this.state.password);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      this.props.router.push('/home');
    }
  }

  render() {
    return (
      <div className="login">
        <form className="form-login" onSubmit={this.handleFormSubmit}>
          <input type="text"
            onChange={this.handleUsernameChange}
            placeholder="Email"
            required
            autoFocus
          />
          <input type="password"
            onChange={this.handlePasswordChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        <div>
          <span>{this.props.errorMessage}</span>
          <Link to="/landing">Landing</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
