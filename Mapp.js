import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';

export default class Map extends Component {
  state = {
    location: null,
    errorMessage: null,
    longitude: 0,
    latitude: 0,
    coords: {},
    markers: []
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    // console.log(location.)
    this.setState({
      location: location,
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
      coords: {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude
      }
    });
  };

  hello = () => {
    console.log('hello')
  }

  render() {
    if (this.state.longitude !== 0) {
      console.log(this.state.coords)
      return (
        <View style={styles.container}>
          <MapView
            style={{flex: 1, alignSelf: 'stretch'}}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0043,
              longitudeDelta: 0.0034
            }}>
            <MapView.Marker
              title='Current Location'
              coordinate={this.state.coords}
            />
          </MapView>
        </View>
      )
    } else {
      return null
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});