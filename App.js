import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { SignedOut, SignedIn } from "./src/components/router.js"
import { isSignedIn } from './src/components/auth.js'

import Login from './src/components/Login/Login.js';
import Signup from './src/components/Login/Signup.js';
import TaskBuilder from './src/components/Tasks/TaskBuilder.js';
import Map from './src/components/Frontend/Map.js';
import Home from './src/components/Home/Home.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
    this.logInUser = this.logInUser.bind(this);
  }

  logInUser(username, password) {
    axios.get('http://10.16.1.131:3000/login', {
      params: {
        username: username,
        password: password
      }
    })
      .then((res) => {
        console.log('loginUser data', res.data);
        AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
        this.setState({
          isLoggedIn: true,
          user: user
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true}))
      .catch(err => console.log(err));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    
    if (!checkedSignIn) {
      return null;
    }

    return <SignedIn />
  }
}
