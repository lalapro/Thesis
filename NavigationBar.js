import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import FirstScreen from './FirstScreen';
// import SecondScreen from './SecondScreen';
import Mapp from './Mapp';
import Profile from './Profile';

const NavigationBar = DrawerNavigator(
	{ 
		' ': {
			path: '/',
			screen: FirstScreen,
			// navigationOptions: {	
			// 	drawerIcon: ({tintColor}) => {
			// 		<Image source={require('./Images/toast.png')} style={{width: 70, height: 70, marginLeft: 40}}
			// 		/>
			// 	}
			// }
		},
		Profile: {
			path: '/profile',
			screen: Profile
		},
		Map: {
			path: '/map',
			screen: Mapp
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
