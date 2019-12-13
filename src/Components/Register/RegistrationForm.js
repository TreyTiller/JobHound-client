import React from "react";
import "./RegistrationForm.css";
import Logo from "../../../src/Job Hound Logo 100px.png";

class Registration extends React.Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="job hound logo" />
        <form className="registration-form">
          <input placeholder="Name" />
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button className="submit">Create Account</button>
          <button>Back to Log In</button>
        </form>
      </div>
    );
  }
}

export default Registration;
