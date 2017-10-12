import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Image, Dimensions } from "react-native";
import { StackNavigator, NavigationActions } from 'react-navigation';
import Map from './Map'
import Location from './AddLocation';


export default class AddAvatar extends React.Component {
  static navigationOptions = {
    title: 'Choose your ecobuddy!'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {images.map((pic, key) => {
          return (
            <Image
              source={images[key]}
              style={styles.ecobuds}
              onPress={() => navigate('Location')}
            />
          )
        })}
      </View>
    );
  }
}

// const SimpleMap = StackNavigator({
//   Map: { screen: MapScreen },
//   Avatar: { screen: Avatar },
//   Location: { screen: Location },
// });

// const backAction = StackNavigator.back({key: 'Map'})
const images = [
  require("../assets/egg.png"),
  require("../assets/egg2.png"),
  require("../assets/egg4.png"),
  require("../assets/egg5.png"),
  require("../assets/egg6.png")
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
