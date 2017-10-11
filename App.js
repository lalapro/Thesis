import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/Login.js'
import Main from './src/components/Main.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.LogInUser = this.LogInUser.bind(this);
  }
  

  LogInUser() {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Main />
      )
    } else {
      return (
        <Login LogInUser={this.LogInUser}/>
      )
    }
  }
}