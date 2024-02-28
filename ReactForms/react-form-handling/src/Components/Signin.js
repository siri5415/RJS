import React, { Component } from 'react'

export default class Signin extends Component {
  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <br />
        <br />
        <label>Email: </label>
        <input type="email"/>
        <br />
        <br />
        <label>Password: </label>
        <input type="password"/>
        <br/>
        <br/>
        <br/>
        <button>Login</button>
        <button>Cancel</button>
        </div>
    );
  }
}
