import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Image, Dimensions } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StackNavigator, NavigationActions } from 'react-navigation';


export default class AddLocation extends React.Component {
  static navigationOptions = {
    title: 'Add a location!',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <GooglePlacesAutocomplete
        placeholder='Enter Location'
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        styles={styles.search}
        currentLocation={true}
        query={{
          key: "AIzaSyBR1txfFIJaA2u4K37nDV3jlXPMuYVzFK4",
          language: 'en', // language of the results
          types: 'address' // default: 'geocode'
        }}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
         console.log(details.geometry.location);
         this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({routeName: 'Map'})
            ]
          }))
        }}
      />
    );
  }
}

// const backAction = StackNavigator.back({key: 'Map'})

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth:0
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: '#5d5d5d',
    fontSize: 16
  },
  predefinedPlacesDescription: {
    color: '#1faadb'
  },
  container: {
    color: 'red'
  }
})
