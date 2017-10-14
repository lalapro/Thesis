import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    }
    this.editTask = this.editTask.bind(this);
  }

  editTask() {
    //send props to fill out a taskbuilder page
  }
  //title, description, completion, start, end, frequency, days, category id -color code?, markerid
  render() {
    return(
      <ListItem>
        title={this.props.Title}
        subtitle={
          !this.state.expanded ? (
            <View style={styles.subtitleView}>
              <Text style={styles.collapsed}>{this.props.Description}</Text>
              <Text onPress={() => this.setState({expanded: !this.state.expanded})}>&#x21E9;</Text>
            </View>
          ) : (
            <View style={styles.subtitleView}>
              <Text style={styles.expanded}>{this.props.task.Description}</Text>
              <Text style={styles.expanded}>{this.props.task.Completion}</Text>
              <Text style={styles.expanded}>{this.props.task.Start}</Text>
              <Text style={styles.expanded}>{this.props.task.End}</Text>
              <Text style={styles.expanded}>{this.props.task.Frequency}</Text>
              <Text onPress={() => this.setState({expanded: !this.state.expanded})}>&#x21E7;</Text>
            </View>
          )
        }
        <TouchableHighlight onPress={this.editTask}><Text>&#x2699;</Text></TouchableHighlight>
      </ListItem>
    )
  }
}

export default TaskItem;
