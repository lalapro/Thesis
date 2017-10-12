import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Image, Dimensions } from "react-native";
import { Components, MapView } from 'expo';

// const MapView = Components.MapView;


const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class screens extends Component {
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
    this.setState({
      markers: [{
        coordinate: {
          latitude: 40.750673,
          longitude: -73.976465,
        },
        title: "Work",
        description: "Hack Reactor",
        image: require("./assets/egg.png"),
      },
      {
        coordinate: {
          latitude: 40.7129109,
          longitude: -73.9671834,
        },
        title: "Home",
        description: "Mah House",
        image: require("./assets/egg2.png"),
      },
      {
        coordinate: {
          latitude: 40.7295174,
          longitude: -73.9975552,
        },
        title: "School",

        description: "NYU",
        image: require("./assets/egg3.png"),
      }],
      markerID: ["Work", "Home", "School"]
    }, () => {
      setTimeout(() => this.map.fitToSuppliedMarkers(this.state.markerID, true), 350)
    })
  }

  test(marker) {
    this.map.animateToRegion(
      {
        ...marker.coordinate,
        latitudeDelta: 0.00984,
        longitudeDelta: 0.00834,
      })
  }

  render() {
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
            <View style={styles.card} key={index} onTouchEnd={() => this.test(marker)}>
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
            <Image source={require("./assets/plus.png")} style={styles.cardImage}/>
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
  }
});
