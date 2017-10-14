import React, { Component } from 'react';
import{ StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import axios from 'axios';

import SignupForm from './SignupForm';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
  }

  handleSubmit() {
    let username = this.state.username;
    let password = this.state.password;
    let email = this.state.email;
    axios.post('http://10.16.1.131:3000/signup', {
      username: username,
      password: password,
      email: email
    })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    })
    .then((res) => {
      this.props.logInUser(username, password);
    })
  }

  handleUserInput(event) {
    this.setState({ username: event })
  }
  handlePasswordInput(event) {
    this.setState({ password: event})
  }
  handleEmailInput(event) {
    this.setState({ email: event})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo} 
            source={require("../assets/toastlogo.png")} 
          />
          <Text>Do you want to start building good Habits?</Text>
        </View>

        <View style={styles.formContainer}>
          <SignupForm
            handleSubmit={this.handleSubmit}
            handleUserInput={this.handleUserInput}
            handlePasswordInput={this.handlePasswordInput}
            handleEmailInput={this.handleEmailInput}
            />
        </View>

        <TouchableOpacity
          onPress={this.handleSubmit}
          style={styles.buttonContainer}
          >
          <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    // flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  formContainer: {
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    paddingHorizontal: 10
  }
});
