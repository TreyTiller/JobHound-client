import React from "react";
import Logo from "../../../src/Job Hound Logo 100px.png";
import "./LoginForm.css";
import {Link} from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="logo-header">
        <img src={Logo} alt="job hound logo"/>
        </div>
        <form className="login-form">
          <input placeholder="username" />
          <input placeholder="password" />
          <Link to="/dashboard"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
          <Link to="/"><button>Back to Tutorial</button></Link>
        </form>
      </div>
    );
  }
}

export default Login;
