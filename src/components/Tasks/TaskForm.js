import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import TaskDatePicker from './DatePicker.js';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput 
          onChangeText={(title) => this.props.handleTaskTitle(title)}
          placeholder="Name of Task"
          style={styles.input} 
        />
        <TextInput
          onChangeText={(description) => this.props.handleDescriptionChange(description)}
          placeholder="Description"
          style={styles.input} 
        />
        <TaskDatePicker onSelect={() => this.handleDateChange()} />
        <TextInput
          onChangeText={() => this.props.handleDurationChange()}
          placeholder="Duration"
          style={styles.input} 
        />
        <TextInput
          onChangeText={() => this.props.handleLocationChange()}
          placeholder="Attach a Location"
          style={styles.input} 
        />
        <TextInput
          onChangeText={() => this.props.handleCategoryChange()}
          placeholder="Attach a Category"
          style={styles.input} 
        />
        <TextInput
          onChangeText={() => this.props.handleFrequencyChange()}
          placeholder="Does not repeat"
          style={styles.input} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  input: {
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    color: '#8A7D80',
    borderColor: '#8A7D80', 
    borderWidth: 1
  }
});

export default TaskForm;
