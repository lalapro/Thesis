import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Picker } from 'react-native';

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
