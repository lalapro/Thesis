import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Navbar from '../Frontend/Navbar.js';

class Home extends Component {
  constructor(props) {
    super(props);
    state = {

    }
  }

  render() {
    return (

      <View style={{flex: 1}}>
        <Navbar
          screenProps={this.props}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default Home;
