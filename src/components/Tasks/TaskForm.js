import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Picker } from 'react-native';
import TaskDatePicker from './DatePicker.js';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: 'Does not repeat.'
    }
    this.changeFrequency = this.changeFrequency.bind(this);
  }

  changeFrequency(itemValue) {
    this.setState({frequency: itemValue})
    this.props.handleFrequencyChange(itemValue)
  }
  render() {
    return(
      <View style={styles.container}>
        <TextInput 
          onChangeText={(title) => this.props.handleTaskTitleChange(title)}
          placeholder="Name of Task"
          style={styles.input} 
        />
        <TextInput
          onChangeText={(description) => this.props.handleDescriptionChange(description)}
          placeholder="Description"
          style={styles.input} 
        />
        <TaskDatePicker placeholder="Start" onSelect={() => this.props.handleStartChange()} />
        <TaskDatePicker placeholder="End" onSelect={() => this.props.handleEndChange()} />
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
        <Picker
          selectedValue={this.state.frequency}
          onValueChange={(itemValue) => this.changeFrequency(itemValue)}
        >
          <Picker.Item label="Does not repeat" value="no-repeat" />
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Yearly" value="yearly" />
        </Picker>
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
