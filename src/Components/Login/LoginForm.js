import React from "react";
import Logo from "../../../src/Job Hound Logo 100px.png";
import "./LoginForm.css";

class Login extends React.Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="job hound logo" />
        <form className="login-form">
          <input placeholder="username" />
          <input placeholder="password" />
          <button>Login</button>
          <button>Register</button>
          <button>Back to Tutorial</button>
        </form>
      </div>
    );
  }
}

export default Login;
