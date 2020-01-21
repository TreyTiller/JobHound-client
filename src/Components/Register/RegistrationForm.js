import React from "react";
import "./RegistrationForm.css";
import AuthApiService from "../../services/auth-api-service";
import { Link } from "react-router-dom";

class Registration extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { nick_name, user_name, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      nickname: nick_name.value
    })
      .then(user => {
        nick_name.value = "";
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="container">
        <h2 className="login-title">Create an account to get started!</h2>
        <form className="login_form" onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="group">
            <input
              type="text"
              name="nick_name"
              id="RegistrationForm__nick_name"
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Enter a Nickname</label>
          </div>

          <div className="group">
            <input
              type="text"
              name="user_name"
              id="RegistrationForm__user_name"
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Create a Username</label>
          </div>

          <div className="group">
            <input
              type="password"
              name="password"
              id="RegistrationForm__password"
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Create a Password</label>
          </div>
          <div className="but-container">
            <div className="buttons">
              <div className="button" id="button-4">
                <div id="underline" />
                <Link to="/login">
                  <button className="butt">Login</button>
                </Link>
              </div>

              <div className="button" id="button-4">
                <div id="underline" />
                <Link to="/">
                  <button className="butt">Tutorial</button>
                </Link>
              </div>

              <div className="button" id="button-4">
                <div id="underline" />
                <button type="submit" className="butt">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
