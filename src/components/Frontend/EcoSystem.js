import React, { Component } from 'react';
import {
StyleSheet,
View,
Text,
Dimensions,
ScrollView,
Button, Image,
TouchableOpacity,
TouchableHighlight 
} from 'react-native';
import Swiper from 'react-native-swiper';

import Navbar from '../Frontend/Navbar.js';
import Objects from './Objects';
import Tasks from './Tasks';
import profile from './Profile';


export default class EcoSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      locations: [
        {
          name: 'home',
          tasks: ['Go home', 'eat'],
          data: ['circle', 'circle', 'circle', 'circle', 'circle']
        },
        {
          name: 'work',
          tasks: ['Do', 'Nothing', 'until', 'you', 'go', 'home'],
          data: ['square', 'square']
        }
      ],
      currentLocation: 'Home',
      currentTasks: ['a', 'b'],
      currentData: [],
      completionPoints: 0
    }
    this.viewChange = this.viewChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentTasks: this.state.locations[0].tasks
    })
  }

  viewChange(index) {
    if (index > this.state.locations.length - 1) {
      index = 0;
    } else {
      this.setState({
        currentTasks: this.state.locations[index].tasks,
        currentData: this.state.locations[index].data
      })  
    }
  }

  render() {
    const { height, width } = Dimensions.get('window');
    let { navigate } = this.props.navigation;

    let taskView = this.state.currentTasks ? this.state.currentTasks.map((ele, i) => {
      return <Tasks task={ele} key={i}/>
    }) : this.state.locations[0].tasks;


    let ecoView = this.state.locations ? this.state.locations.map((ele, i) => {
      if (this.state.locations.name === 'Home') {let img = '../assets/home.png'}
      if (this.state.locations.name === 'Work') {let img = '../assets/work.png'}
      return 
        <View style={{flex: 1, width: width, position: 'absolute'}}>
          <Image style={{flex: 1, width: width, position: 'absolute'}} 
            source={require(`../assets/work.png`)}>
            <Objects data={this.state.locations[i]}/>
          </Image>
        </View>
      }) : null;


    return (
      <View style={{flex: 1}}>


        <View style={{flex: 7, backgroundColor: 'red', opacity: 0.7}}>
          <Swiper 
            horizontal={true}
            onIndexChanged={(index) => {this.viewChange(index)}}
          >
          <View style={{height: height, width: width, position: 'absolute'}}>
            <Image style={{height: height, width: width, position: 'absolute'}} 
              source={require('../assets/home.png')}>
              <Objects data={this.state.locations[0]}/>
            </Image>
          </View>

          <View style={{height: height, width: width, position: 'absolute'}}>
            <Image style={{height: height, width: width, position: 'absolute'}} 
              source={require('../assets/work.png')}>
              <Objects data={this.state.locations[1]}/>
            </Image>
          </View>

          </Swiper>
        </View>

        <View style={{flex: 3, backgroundColor: 'blue', opacity: 0.5, justifyContent: 'center'}}>
          <ScrollView horizontal={true}>
            {taskView}
            <TouchableOpacity onPress={() => {navigate('Profile')}}>
              <Image source={require('../assets/plus.png')} style={{height: 150, width: 150}} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

