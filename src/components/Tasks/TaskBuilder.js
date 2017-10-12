import React, { Component } from 'react';
import{ StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import TaskForm from './TaskForm.js';

class TaskBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      startTime: null,
      endTime: null,
      location: '',
      category: '',
      frequency: ''
    }
  }

  render() {
    return(
      <View>
        <TaskForm />
      </View>
    )
  }
}

export default TaskBuilder;
