import React from "react";
import "./RegistrationForm.css";
import Logo from "../../../src/Job Hound Logo 100px.png";
import {Link} from 'react-router-dom';

class Registration extends React.Component {
  render() {
    return (
      <div>
        <div className="logo-header">
        <img src={Logo} alt="job hound logo" />
        </div>
        <form className="registration-form">
          <input placeholder="Name" />
          <input placeholder="Username" />
          <input placeholder="Password" />
          <Link to="/login"><button className="submit">Create Account</button></Link>
          <Link to="/login"><button>Back to Log In</button></Link>
        </form>
      </div>
    );
  }
}

export default Registration;
