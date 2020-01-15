import React, { Component } from "react";
import TokenService from "../../../services/token-service";
import AuthApiService from "../../../services/auth-api-service";
import { Button, Input } from "../../Utils/Utils";
import { Link } from "react-router-dom";
import "./Login-Form.css";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as dogData from "../../../Images/job-hound-loader.json";
import * as doneData from "../../../Images/job-hound-loader.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: dogData.default
};

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: undefined,
      done: undefined
    };
  }

  static defaultProps = {
    onLoginSuccess: () => {}
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null, loading: true  });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })

      .then(res => {
        user_name.value = "";
        password.value = "";
        this.setState({ done: true, loading: false });
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error, loading: false, done: false  });
      });
  };
  render() {
    const { error } = this.state;
    if (this.state.loading || this.state.done) {
      return (
        <div className="loading">
          <FadeIn>
            <div class="d-flex justify-content-center align-items-center">
              <h4 className="load-label">Tracking Down Opportunity</h4>
              {!this.state.done ? (
                <Lottie options={defaultOptions} height={300} width={281} />
              ) : (
                <Lottie options={defaultOptions} height={120} width={120} />
              )}
            </div>
          </FadeIn>
        </div>
      );
    }
    return (
      // <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
      //   <div role="alert">
      //     {this.state.error && <p className="red">{this.state.error}</p>}
      //   </div>
      //   <div className="user_name">
      //     <label htmlFor="LoginForm__user_name" className="login_label">
      //       User name
      //     </label>
      //     <Input
      //       required
      //       name="user_name"
      //       id="LoginForm__user_name"
      //       placeholder="User Name"
      //     ></Input>
      //   </div>
      //   <div className="password">
      //     <label htmlFor="LoginForm__password" className="login_label">
      //       Password
      //     </label>
      //     <Input
      //       required
      //       name="password"
      //       type="password"
      //       id="LoginForm__password"
      //       placeholder="Password"
      //     ></Input>
      //   </div>
      //   <div className="buttons">
      //     <Button type="submit">Login</Button>

      //     <Link to="/register">
      //       <Button>Register</Button>
      //     </Link>
      //     <Link to="/">
      //       <Button>Tutorial</Button>
      //     </Link>
      //   </div>
      // </form>
      <div className="container">
        <h2 class="login-title">Log into Job Hound</h2>
        <form className="login_form" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">
            {this.state.error && <p className="red">{this.state.error}</p>}
          </div>
          <div className="group">
            <input type="text" name="user_name" id="LoginForm__user_name" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Username</label>
          </div>

          <div className="group">
            <input type="password" name="password" id="LoginForm__password" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Password</label>
          </div>
        <div className="but-container">
        <div className="buttons">
          <div className="button" id="button-4">
            <div id="underline" />
            <Link to="/register">
              <button className="butt">Register</button>
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
            <button type="submit" className="butt">Login</button>
          </div>
        </div>
        </div>
        </form>
      </div>
    );
  }
}
