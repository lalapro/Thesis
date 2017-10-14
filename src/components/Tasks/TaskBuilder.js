import React, { Component } from 'react';
import{ StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';
import TaskForm from './TaskForm.js';
import axios from 'axios';

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
      frequency: '',
      saved: null
    }
    this.handleTaskTitleChange = this.handleTaskTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  handleTaskTitleChange(title) {
    this.setState({title})
  }

  handleDescriptionChange(description) {
    this.setState({description})
  }

  handleStartChange(startTime) {
    this.setState({startTime})
  }

  handleEndChange(endTime) {
    this.setState({endTime})
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
  
  handleCheck(day) {
    
  }

  saveTask() {
    let body = this.state;
    axios.post('http://10.16.1.131:3000/newTask', {body})
      .then((response) => this.setState({saved: 'Task Saved'}))
      .catch((err) => console.error(err))
  }

  render() {
    return(
      <View style={styles.container}>
        <View>
          <TaskForm 
            handleTaskTitleChange={this.handleTaskTitleChange}
            handleDescriptionChange={this.handleDescriptionChange} 
            handleStartChange={this.handleStartChange}
            handleEndChange={this.handleEndChange}
            handleLocationChange={this.handleLocationChange}
            handleCategoryChange={this.handleCategoryChange}
            handleFrequencyChange={this.handleFrequencyChange}
          />
          <Button
            onPress={this.saveTask}
            title="Save Task"
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
  }
});

export default TaskBuilder;
