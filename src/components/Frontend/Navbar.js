import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

// import FirstScreen from './FirstScreen';
// import SecondScreen from './SecondScreen';
import Map from './Map.js';
import Profile from './Profile';
import Main from '../Home/Home.js';

const NavigationBar = DrawerNavigator(
	{
		Profile: {
			path: '/profile',
			screen: Profile
		},
		Map: {
			path: '/map',
			screen: Map
		},
		// Logout: {
		// 	path: '/logout',
		// 	screen: Logout
		// }

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