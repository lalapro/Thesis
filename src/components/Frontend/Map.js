import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated, Image, Dimensions, Button, TouchableOpacity } from "react-native";
import { Components, MapView, Permissions, Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
import Location from './AddLocation.js';
import GetCurrentLocation from './GetCurrentLocation';


const { width, height } = Dimensions.get("window");

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  state = {
    markers: [{
        coordinate: {
          latitude: 40.750673,
          longitude: -73.976465,
        },
        title: "Work",
        description: "Hack Reactor",
        image: require("../assets/egg.png"),
      },
      {
        coordinate: {
          latitude: 40.7129109,
          longitude: -73.9671834,
        },
        title: "Home",
        description: "Mah House",
        image: require("../assets/egg2.png"),
      },
      {
        coordinate: {
          latitude: 40.7295174,
          longitude: -73.9975552,
        },
        title: "School",

        description: "NYU",
        image: require("../assets/egg3.png")
    }],
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
    currentLocation: {},
    markerID: [],
    render: false,
    iconLoaded: false
  };

  retrieveTasks() {
    axios.get('http://10.16.1.131:3000/tasks', {
      params: {
        //userID: userId
      }
    }) 
    .then((res) => {
      let tasks = res.data;
      this.setState({
        tasks: tasks
      })
    })
  }

  componentWillReceiveProps() {
    this.retrieveTasks();
  }

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      GetCurrentLocation().then(location => {
        this.setState({
          region: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.04864195044303443,
            longitudeDelta: 0.040142817690068,
          }
        }, () => this.updateCurrentLocation())
      })
      .then(res => this.setState({render: true}))
    }
  }

  updateCurrentLocation() {
    GetCurrentLocation().then(location => {
      this.setState({
        currentLocation: {
          coordinate: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
          title: "Current Location",
          description: "Me"
        }
      })
    })
    .then(res => {
      this.map.animateToRegion(
        {
          ...this.state.currentLocation.coordinate,
          latitudeDelta: 0.00984,
          longitudeDelta: 0.00834,
        }
      )
    })
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
    const { params } = this.props.navigation.state;

    return this.state.render ? (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
          // onLayout={() => { this.mark.showCallout() }}
        >
          <MapView.Marker
            key={this.state.iconLoaded ? 'markerLoaded' : 'marker'}
            coordinate={this.state.currentLocation.coordinate}
            title={this.state.currentLocation.title}
            description={this.state.currentLocation.description}
            >
            <Image style={{width: 20, height: 20}} source={require('../assets/egg6.png')} onLoadEnd={() => {if (!this.state.iconLoaded) this.setState({iconLoaded: true});}}/>
          </MapView.Marker>
          {this.state.markers.map((marker, index) => {
            return (
              <MapView.Marker
                key={index}
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
                identifier={marker.title}
                onPress={(e) => {
                  this.props.retrieveTasks(e);
                }}
                >
                <Image source={marker.image} style={styles.marker} />
              </MapView.Marker>
            );
          })}


        </MapView>
        <Animated.ScrollView
          vertical
          scrollEventThrottle={1}
          snapToInterval={CARD_WIDTH}
          style={styles.scrollView}
        >
          {this.state.markers.map((marker, index) => (
            <TouchableOpacity key={index} onPress={() => this.zoom(marker)} style={styles.cardContainer}>
              <Text style={styles.cardtitle}>
                {marker.title}
              </Text>
              <Image source={marker.image} style={styles.cardImage}/>

            </TouchableOpacity>
          ))}
          {/* <View style={styles.card}>
            <Image source={require("../assets/plus.png")} style={styles.cardImage} onTouchEnd={() => navigate('Avatar')}/>
            <View style={styles.textContent}>
              <Text style={styles.cardtitle}>
                Add a location
              </Text>
            </View>
          </View> */}
        </Animated.ScrollView>
        <TouchableOpacity style={styles.recenter} onPress={() => this.updateCurrentLocation()}>
          <Image source={require("../assets/egg6.png")} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      </View>
    ) : (
      <View>
        <Text>
          Can't load map.
        </Text>
      </View>
    )
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
  constructor(props) {
    super(props);
    this.state={
      tasks: []
    };
  }

  render() {
    return 
      <SimpleMap
        
        retrieveTasks={this.props.retrieveTasks}
      />;
  }
}

const CARD_HEIGHT = height / 5;
const CARD_WIDTH = CARD_HEIGHT - 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    position: "absolute",
    top: 30,
    bottom: 30,
    left: width - 60,
    width: 100,
    height: height / 2
  },
  cardContainer: {
    height: 60,
    width: 90,
  },
  cardImage: {
    width: 30,
    height: 30
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
    maxWidth: 60,
    maxHeight: 60
  },
  recenter: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    right: 50
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
