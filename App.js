import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/Login/Login.js';
import Main from './src/components/Main.js';
import Signup from './src/components/Login/Signup.js';
import TaskBuilder from './src/components/Tasks/TaskBuilder';
import Map from './Map.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      signingUp: false,
      createdAccount: false
    }
    this.LogInUser = this.LogInUser.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
    this.backToLogIn = this.backToLogIn.bind(this);
    // this.createAccount = this.createAccount.bind(this);
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
    if (this.state.createdAccount) {
      return (
        <TaskBuilder />
      )
    } else if (this.state.isLoggedIn) {
      return (
        <Main />
      )
    }  else {
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
            LogInUser={ () => {this.setState({createdAccount: true})}} 
            backToLogIn={ this.backToLogIn }/>
        )
      }
    }
  }
}
