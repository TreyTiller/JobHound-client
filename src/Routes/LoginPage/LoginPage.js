import React, { Component } from "react";
import LoginForm from "../../Components/Login/Login-Form/Login-Form";
import { Section } from "../../Components/Utils/Utils";
import "./LoginPage.css";
import Logo from "../../../src/Images/Job Hound Logo 260px.png";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/dashboard";
    history.push(destination);
  };

  render() {
    return (
      <Section className="LoginPage">
        <div className="logo-header">
          <img src={Logo} alt="job hound logo" className="login-logo" />
        </div>
        {/* <h2>Log into Job Hound</h2> */}
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    );
  }
}
