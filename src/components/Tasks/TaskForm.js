import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Picker } from 'react-native';
import TaskDatePicker from './DatePicker.js';
import CategoryPicker from './CategoryPicker.js';

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
        <TaskDatePicker placeholder="Start" onSelect={(startTime) => this.props.handleStartChange(startTime)} />
        <TaskDatePicker placeholder="End" onSelect={(endTime) => this.props.handleEndChange(endTime)} />
        <TextInput
          onChangeText={(location) => this.props.handleLocationChange(location)}
          placeholder="Attach a Location"
          style={styles.input} 
        />
        <CategoryPicker style={styles.picker} onSelect={() => this.props.handleCategoryChange()}/>
        <Picker
          style={styles.picker} 
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
    flex: 1
  },
  input: {
    height: 30,
    marginTop: 10,
    paddingHorizontal: 10,
    color: '#8A7D80',
    borderColor: '#8A7D80', 
    borderWidth: 1
  },
  picker: {
    height: 40
  }
});

export default TaskForm;
