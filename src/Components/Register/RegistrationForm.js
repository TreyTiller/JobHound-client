import React from "react";
import "./RegistrationForm.css";
import { Button, Input, Required } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import Logo from "../../../src/Images/Job Hound Logo 100px.png";
import { Link } from "react-router-dom";

class Registration extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

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
      <div>
        <form className="RegistrationForm" onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="nick_name">
            <label htmlFor="RegistrationForm__nick_name">Nickname</label>
            <Input
              name="nick_name"
              type="text"
              required
              id="RegistrationForm__nick_name"
              placeholder="Nickname"
            ></Input>
          </div>
          <div className="user_name">
            <label htmlFor="RegistrationForm__user_name">
              User name <Required />
            </label>
            <Input
              name="user_name"
              type="text"
              required
              id="RegistrationForm__user_name"
              placeholder="User Name"
            ></Input>
          </div>
          <div className="password">
            <label htmlFor="RegistrationForm__password">
              Password <Required />
            </label>
            <Input
              name="password"
              type="password"
              required
              id="RegistrationForm__password"
              placeholder="Password"
            ></Input>
          </div>
          <Button type="submit" className="register">
            Register
          </Button>
        </form>
        <div className="already-account">
          <Link to="/login" className="login_link">
            Already have an account?<button className="login">Log in</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Registration;
