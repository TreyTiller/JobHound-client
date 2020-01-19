import React, { Component } from "react";
import Tutorial from "../../Components/Tutorial/Tutorial";
import { Section } from "../../Components/Utils/Utils";

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
