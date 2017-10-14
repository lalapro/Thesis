import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Navbar from '../Frontend/Navbar.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

