import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
    state = {

    }
  }

  render() {
    return (
      <View style={styles.container}> 
        <Text>Hello this works</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default Main;