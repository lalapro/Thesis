import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			locationName: '',
			location: ''
		}
	}


  
 	render() {
 		console.log(this.state.title)
    return (
      <View style={{flex: 1, backgroundColor: 'yellow', alignItems: 'center'}}>
      	<View style={styles.photo} >
      		<Image style={{flex: 9}} source={require('../assets/toastlogo.png')}/>
	      	<Text style={{flex: 1, textAlign: 'center'}} onPress={() => {}}>
	      		Add Photo
	      	</Text>
	      </View>


	      <View style={styles.location}>
	      	<TextInput style={styles.input} placeholder="Make a title" placeholderTextColor="rgba(255, 255, 255, 0.7)"
	      	onChangeText={(title) => {this.setState({title: title})}} />
	      	<TextInput style={styles.input} placeholder="Add Location Name" placeholderTextColor="rgba(255, 255, 255, 0.7)"
	      	onChange={(locationName) => {this.setState({locationName})}} />
	      	<TextInput style={styles.input} placeholder="Add Location Address" placeholderTextColor="rgba(255, 255, 255, 0.7)"
	      	onChange={(locationAddress) => {this.setState({locationAddress})}} />
	      </View>


      	<View style={styles.map} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	photo: {
		backgroundColor: 'green',
		flex: 1,
		height: '80%',
		width: '60%'
	},
	location: {
		flex: 1,
		backgroundColor: 'blue',
		width: '100%',
		alignItems: 'center'
	},
	map: {
		flex: 1,
		backgroundColor: 'red',
		width: '100%'
	},
	input: {
		height: 30,
		width: 220,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		marginTop: 5,
		paddingHorizontal: 10
	}
})
