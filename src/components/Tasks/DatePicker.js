import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

class TaskDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2017-10-11"}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="Date and Duration"
        format="YYYY-MM-DD"
        minDate="2017-08-01"
        maxDate="2018-08-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys. 
        }}
        onDateChange={(date) => {this.props.onSelect(date)}}
      />
    )
  }
}

 
export default TaskDatePicker;
