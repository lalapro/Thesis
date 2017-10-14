import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Login from './src/components/Login/Login.js';
import Signup from './src/components/Login/Signup.js';
import TaskBuilder from './src/components/Tasks/TaskBuilder.js';
import Map from './src/components/Frontend/Map.js';
import Home from './src/components/Home/Home.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      signingUp: false,
      createdAccount: false,
      user: {}
    }
    this.LogInUser = this.LogInUser.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
    this.backToLogIn = this.backToLogIn.bind(this);
  }

  LogInUser(user) {
    AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
    this.setState({
      isLoggedIn: true,
      user: user
    });
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
  componentDidMount() {
    AsyncStorage.getItem('isLoggedIn')
      .then((value) => {
        JSON.parse(value);
        this.setState({isLoggedIn: value});
      })
      .done();
  }

  render() {
    if (this.state.createdAccount) {
      return (
        <TaskBuilder />
      )
    } else if (this.state.isLoggedIn) {
      return (
        <Map />
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
