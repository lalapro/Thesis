import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Login from './src/components/Login/Login.js';
import NavigationBar from './NavigationBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationBar />
      </View>
    );
  }
}