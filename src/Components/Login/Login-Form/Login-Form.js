import React, { Component } from "react";
import TokenService from "../../../services/token-service";
import AuthApiService from "../../../services/auth-api-service";
import { Button, Input } from "../../Utils/Utils";
import { Link } from "react-router-dom";
import "./Login-Form.css";
//import FadeIn from "react-fade-in";
//import Lottie from "react-lottie";
//import * as doneData from "../../../../src/doneloading.json";
//import * as cupData from "../../../../src/cupLoader.json";

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: cupData.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice"
//   }
// };

// const defaultOptions2 = {
//   loop: false,
//   autoplay: true,
//   animationData: doneData.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice"
//   }
// };

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
    this.setState({ error: null });
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
        this.setState({ error: res.error });
      });
  };
  render() {
    // const { error } = this.state;
    // if (this.state.loading || this.state.done) {
    //   return (
    //     <div className="loading">
    //       <FadeIn>
    //         <div class="d-flex justify-content-center align-items-center">
    //           <h1>Fetching Coffee</h1>
    //           {!this.state.done ? (
    //             <Lottie options={defaultOptions} height={120} width={120} />
    //           ) : (
    //             <Lottie options={defaultOptions2} height={120} width={120} />
    //           )}
    //         </div>
    //       </FadeIn>
    //     </div>
    //   );
    // }
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{this.state.error && <p className="red">{this.state.error}</p>}</div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name" className="login_label">
            User name
          </label>
          <Input
            required
            name="user_name"
            id="LoginForm__user_name"
            placeholder="User Name"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password" className="login_label">
            Password
          </label>
          <Input
            required
            name="password"
            type="password"
            id="LoginForm__password"
            placeholder="Password"
          ></Input>
        </div>
        <div className="buttons">
          <Button type="submit">Login</Button>

          <Link to="/register">
            <Button>Register</Button>
          </Link>
          <Link to="/">
            <Button>Tutorial</Button>
          </Link>
        </div>
      </form>
    );
  }
}
