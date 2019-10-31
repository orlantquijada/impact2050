import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class PickDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.dateChange = this.dateChange.bind(this);
  }

  dateChange(date) {
    this.setState(
      {
        date: date
      },
      () => {
        console.log(this.state.date);
      }
    );
  }

  render() {
    return <DatePicker selected={this.state.date} onChange={this.dateChange} />;
  }
}

export default PickDate;
