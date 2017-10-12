import React, { Component } from 'react';
import{ StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import TaskForm from './TaskForm.js';

class TaskBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: '',
      startTime: null,
      endTime: null,
      location: '',
      category: '',
      frequency: ''
    }
    this.handleTaskTitleChange = this.handleTaskTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  handleTaskTitleChange(title) {
    this.setState({title})
  }

  handleDescriptionChange(description) {
    this.setState({description})
  }

  handleDateChange(date) {
    this.setState({date})
  }
  
  handleDurationChange(startTime, endTime) {
    this.setState({startTime, endTime})
  }

  handleLocationChange(location) {
    this.setState({location})
  }
  
  handleCategoryChange(category) {
    this.setState({category})
  }

  handleFrequencyChange(frequency) {
    this.setState({frequency})
  }
  
  saveTask() {
    let body = this.state;

  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TaskForm 
            handleTaskTitleChange={this.handleTaskTitleChange}
            handleDescriptionChange={this.handleDescriptionChange} 
            handleDateChange={this.handleDateChange}
            handleDurationChange={this.handleDurationChange}
            handleLocationChange={this.handleLocationChange}
            handleCategoryChange={this.handleCategoryChange}
            handleFrequencyChange={this.handleFrequencyChange}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    // flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  formContainer: {
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    paddingHorizontal: 10
  }
});

export default TaskBuilder;
