import React, { Component } from 'react';
import{ StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  this.handleSubmit = this.hand

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo} 
            source={require("../../images/toastlogo.png")} 
          />
          <Text>Build Habitats by keeping Good Habits</Text>
        </View>
          
        <View style={styles.formContainer}>
          <LoginForm />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text> 
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
