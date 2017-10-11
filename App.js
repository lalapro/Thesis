import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login.js'
import Home from './src/components/Home/Home.js'
import Signup from './src/components/Login/Signup.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      signingUp: false
    }
    this.LogInUser = this.LogInUser.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
    this.backToLogIn = this.backToLogIn.bind(this);
  }

  LogInUser() {
    this.setState({
      isLoggedIn: true
    })
  }
  goToSignUp() {
    this.setState({
      signingUp: true
    })
  }
  backToLogIn() {
    this.setState({
      signingUp: false
    })
  }
  render() {
    if (this.state.isLoggedIn) {
      return (
        <Home />
      )
    } else {
      if (!this.state.signingUp) {
        return (
          <Login
            LogInUser={ this.LogInUser }
            goToSignUp={ this.goToSignUp }
            />
        )
      } else {
        return (
          <Signup
            LogInUser={ this.LogInUser }
            backToLogIn={ this.backToLogIn }/>
        )
      }
    }
  }
}
