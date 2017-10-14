import React, { Component } from 'react';
import { Text, Image, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

// import FirstScreen from './FirstScreen';
// import SecondScreen from './SecondScreen';
import Map from './Map.js';
import Profile from './Profile';
import Login from '../Login/Login.js'
import Home from '../Home/Home';
import EcoSystem from './EcoSystem';
import TaskBuilder from '../Tasks/TaskBuilder';


const NavigationBar = DrawerNavigator(
	{ 
		// ' ': {
		// 	path: '/',
		// 	screen: Main,
		// 	// navigationOptions: {	
		// 	// 	drawerIcon: ({tintColor}) => {
		// 	// 		<Image source={require('./Images/toast.png')} style={{width: 70, height: 70, marginLeft: 40}}
		// 	// 		/>
		// 	// 	}
		// 	// }
		// },
		Home: {
			path: '/',
			screen: EcoSystem
		},
		Profile: {
			path: '/profile',
			screen: Profile
		},
		Map: {
			path: '/map',
			screen: Map
		},
		Logout: {
			screen: Login
		},
		TaskBuilder: {
			screen: TaskBuilder
		}

	},
	{
		initialRouteName: 'Profile',
		initialRouteName: 'Home', 
		drawerPosition: 'left',
		drawerWidth: 100,
		alignItems: 'center',
		contentOptions: {
			activeTintColor: 'rgba(0, 0, 0, 0.3)'
		}
	}
)

export default NavigationBar;
