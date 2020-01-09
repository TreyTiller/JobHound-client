import React, { Component } from "react";
import { Section } from "../../Components/Utils/Utils";
import RegistrationForm from "../../Components/Register/RegistrationForm";
import Logo from "../../../src/Images/Job Hound Logo 260px.png";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <Section className="RegistrationPage">
        <div className="logo-header">
          <img src={Logo} alt="job hound logo" className="login-logo" />
        </div>
        <h2>Create an account to get started!</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    );
  }
}
