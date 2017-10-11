import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';


class LoginForm extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.container}> 
        <TextInput 
          placeholder="username"
          style={styles.input} />
        <TextInput 
          placeholder="password"
          style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  input: {
    height: 40,
    backgroundColor: 'grey',
    marginTop: 10,
    paddingHorizontal: 10,
    color: 'black'
  }
})


export default LoginForm;