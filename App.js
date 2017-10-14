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
      user: {},
      tasks: [],
      locations: [],
      finishedCheck: false
    }
    this.logInUser = this.logInUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
    this.backToLogIn = this.backToLogIn.bind(this);
    this.finishedAsyncCheck = this.finishedAsyncCheck.bind(this);
  }

  logInUser(user) {
    AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
    this.setState({
      isLoggedIn: true,
      user: user
    })
  }
  logOutUser() {
		AsyncStorage.setItem('isLoggedIn', JSON.stringify(false));
    this.setState({
      isLoggedIn: false,
      user: {}
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
  
  finishedAsyncCheck() {
    this.setState({
      finishedCheck: true
    })
  }

  componentDidMount() {
    AsyncStorage.getItem('isLoggedIn')
    .then((value) => {
      JSON.parse(value);
      this.setState({isLoggedIn: value});
    })
    .catch((err) => {
      console.log(err);
    })
    .then((res) => {
      this.finishedAsyncCheck();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {

    if (this.state.isLoggedIn === true) {
      return (
        <Home 
          logOutUser={ this.logOutUser }/>
      )
    } else {
      if (this.state.signingUp === true) {
        return (
          <Signup 
            backToLogIn={ this.backToLogIn }
            logInUser={ this.logInUser }
            />
        )
      } else {
        return (
          <Login 
            logInUser={ this.logInUser }
            goToSignUp={ this.goToSignUp }
            />
        )
      }
    }
  }
}
