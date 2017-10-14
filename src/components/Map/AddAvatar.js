import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Image, Dimensions, TouchableOpacity } from "react-native";
import { StackNavigator, NavigationActions } from 'react-navigation';


export default class AddAvatar extends React.Component {
  static navigationOptions = {
    title: 'Choose your ecobuddy!'
  };


  render() {
    const { navigate } = this.props.navigation;
    console.log('avaatar', this.props.navigation)
    return (
      <View style={styles.container}>
        {images.map((pic, key) => {
          return (
            <TouchableOpacity onPress={() => navigate('Title', {avatar: pic[0]})}>
              <Image
                source={pic[1]}
                style={styles.ecobuds}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    );
  }
}

const images = [
  [0, require("../assets/egg.png")],
  [1, require("../assets/egg2.png")],
  [2, require("../assets/egg4.png")],
  [3, require("../assets/egg5.png")]
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ecobuds: {
    width: 100,
    height: 100
  }
})
