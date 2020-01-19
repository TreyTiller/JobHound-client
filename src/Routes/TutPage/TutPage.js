import React, { Component } from "react";
import LoginForm from "../../Components/Login/Login-Form/Login-Form";
import Tutorial from '../../Components/Tutorial/Tutorial'
import { Section } from "../../Components/Utils/Utils";
import Logo from "../../../src/Images/Job Hound Logo 260px.png";

export default class TutPage extends Component {
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
      <Section className="TutPage">
        <Tutorial onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    );
  }
}
