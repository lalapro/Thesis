import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { List } from 'react-native-elements';
import TaskItem from './TaskItem.js';

class TaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTasks: [],
      modalVisible: false
    };
  }
  
  componentWillReceiveProps() {
    //receives an array of tasks
    console.log(this.props.allTasks)
    let allTasks = this.props.allTasks;
    //receives a location id
    let marker_Id = this.props.marker_Id;
    //filter array by location id
    let filteredTasks = allTasks.filter((task) => {
      return task.marker_Id === marker_Id;
    })
      //save array of filterd tasks to state
    this.setState({filteredTasks})
  }

  render() {
    return(
      <View style={{marginTop:20}}>
        <TouchableHighlight onPress={this.props.handleTasks}><Text>X</Text></TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}

        >

          <List>
            {this.state.filteredTasks.map((task, i) => {
              return (<TaskItem key={i} task={task} />)
            })}
          </List>
        </Modal>
      </View>
    )
  }
}

export default TaskModal;