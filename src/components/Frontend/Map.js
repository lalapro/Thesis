import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Image, Dimensions, Button } from "react-native";
import { Components, MapView } from 'expo';
import { StackNavigator } from 'react-navigation';
import Location from './AddLocation.js'


const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  state = {
    markers: [],
    region: {
      latitude: 37.757815,
      longitude: -122.50764,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
    markerID: []
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    const { params } = this.props.navigation.state
    console.log(params)
    if (this.state.markers.length > 0) {
      setTimeout(() => this.map.fitToSuppliedMarkers(this.state.markerID, true), 350)
    }
    // })
  }

  zoom(marker) {
    this.map.animateToRegion(
      {
        ...marker.coordinate,
        latitudeDelta: 0.00984,
        longitudeDelta: 0.00834,
      })
  }

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate} title={marker.title} description={marker.description} identifier={marker.title}>
                <Image source={marker.image} style={styles.marker}/>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index} onTouchEnd={() => this.zoom(marker)}>
              <Image source={marker.image} style={styles.cardImage}/>
              <View style={styles.textContent}>
                <Text style={styles.cardtitle}>
                  {marker.title}
                </Text>
                <Text style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
          <View style={styles.card}>
            <Image source={require("../assets/plus.png")} style={styles.cardImage} onTouchEnd={() => navigate('Avatar')}/>
            <View style={styles.textContent}>
              <Text style={styles.cardtitle}>
                Add a location
              </Text>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
}

class Avatar extends React.Component {
  static navigationOptions = {
    title: 'Choose your ecobuddy!'
  };

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.ecoContainer}>
        {images.map((pic, key) => {
          console.log(pic)
          return (
            <Image
              source={pic}
              style={styles.ecoBuds}
              onTouchEnd={() => navigate('Location', {avatar: pic})}
            />
          )
        })}
      </View>
    );
  }
}

const images = [
  require("../assets/egg.png"),
  require("../assets/egg2.png"),
  require("../assets/egg4.png"),
  require("../assets/egg5.png"),
  require("../assets/egg6.png")
]


const SimpleMap = StackNavigator({
  Map: { screen: MapScreen },
  Avatar: { screen: Avatar },
  Location: { screen: Location },
});


export default class Map extends Component {
  render() {
    return <SimpleMap />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    zIndex: 20
  },
  cardImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  marker: {
    width: 30,
    height: 30
  },
  ecoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ecoBuds: {
    width: 100,
    height: 100
  }
});
