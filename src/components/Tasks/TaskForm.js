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
      <View>
        <TextInput 
          onChangeText={this.props.handleTaskTitle}
          placeholder="Name of Task"
        />
        <TextInput
          onChangeText={this.props.handleDescriptionChange}
          placeholder="Description"
        />
        <TaskDatePicker onSelect={this.handleDateChange} />
        <TextInput
          onChangeText={this.props.handleDurationChange}
          placeholder="Duration"
        />
        <TextInput
          onChangeText={this.props.handleLocationChange}
          placeholder="Attach a Location"
        />
        <TextInput
          onChangeText={this.props.handleCategoryChange}
          placeholder="Attach a Category"
        />
        <TextInput
          onChangeText={this.props.handleFrequencyChange}
          placeholder="Does not repeat"
        />
      </View>
    )
  }
}

export default TaskForm;
