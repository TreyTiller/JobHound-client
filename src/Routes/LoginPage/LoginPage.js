import React, { Component } from 'react';
import LoginForm from '../../Components/Login/Login-Form/Login-Form';
import { Section } from '../../Components/Utils/Utils';
import HeaderLocked from '../../Components/Header/Header-Locked';
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <HeaderLocked />
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
