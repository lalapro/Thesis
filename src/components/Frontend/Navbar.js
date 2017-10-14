import React, { Component } from 'react';
import { Text, Image, Button, AsyncStorage } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

// import FirstScreen from './FirstScreen';
// import SecondScreen from './SecondScreen';
import Map from './Map.js';
import Profile from './Profile';
import Main from '../Home/Home.js';
import Login from '../Login/Login.js'

class Logout extends React.Component {
	constructor(props) {
		super(props);
		console.log(props.screenProps.logOutUser)
	}
	static navigationOptions = {
    drawerLabel: 'Logout'
  };

  render() {
    return (
      <Button
				onPress={this.props.screenProps.logOutUser}
				title="LogOuttttt"
			/>
    );
  }
}

const NavigationBar = DrawerNavigator(
	{
		Profile: {
			screen: Profile
		},
		Map: {
			screen: Map
		},
		Logout: {
			screen: Logout
		}
	},
	{
		initialRouteName: 'Profile',
		drawerPosition: 'left',
		drawerWidth: 100,
		alignItems: 'center',
		contentOptions: {
			activeTintColor: 'rgba(0, 0, 0, 0.3)'
		}
	}

)

export default NavigationBar;
