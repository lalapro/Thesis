import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Picker, Button } from 'react-native';
import axios from 'axios';

class LocationPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      newLocation: '',
      location: '',
      created: '',
    }
    this.newLocation = this.newLocation.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }
  //axios.get for existing categories
  componentWillMount() {
    //give axios user id and get Location names
    axios.get('http://10.16.1.218:3000/categories', {params: {username: 'krb'}})
      .then((response) => {
        let arr = response.data;
        let categories = arr.map((row) => {
          return row.Title;
        })
        categories.unshift('none')
        this.setState({categories})
      })
      .catch((err) => {console.error(err)})
  }

  changeLocation(location) {
    this.setState({location});
    this.props.onSelect(location);
  }

  newLocation() {
    let location = this.state.location;
    axios.post('http://10.16.1.218:3000/categories', {location, username: 'krb'})
      .then((response) => {
        console.log(`save location ${response}`)
      })
      .catch((err) => {
        console.error(err)
      })
    
  }

  render() {
    return(
      <View>
        <Picker
          selectedValue={this.state.location}
          onValueChange={this.changeLocation}
        >
          {this.state.categories ? 
            this.state.categories.map((location, i) => {
              return (
                <Picker.Item key={i} label={location} value={location} />
              )
            }) : ''
          }
        </Picker>
        <TextInput
          onChangeText={this.changeLocation}
          placeholder="Create a new location"
        />
        <Button
          onPress={this.newLocation}
          title="Save Location"
        />
      </View>
    )
  }
}

export default LocationPicker;