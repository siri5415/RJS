import React, { Component } from 'react'

export default class Users1 extends Component {


  componentWillUnmount(){
    debugger
  }
  
  render() {
    return (
      <div>
        <h4>User Detalis for Roll No. {this.props.userid}</h4>
        <h6>name : {this.props.name},course : {this.props.course}</h6>
      </div>
    )
  }
}
