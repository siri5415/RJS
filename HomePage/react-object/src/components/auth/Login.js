import React, { Component } from 'react';
import '../../styles/Login.css';

const inputstyles = {
    border:'none',
    borderBottom:'1px solid gray',
    padding:'5px',
    height:'24px',
    width:'300px',
    background:'beige',
    margin:'10px'
}

export default class Login extends Component {
  //need to state to handle the data in the components
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  //login handler which can take the input process
  onlogin = () => {
    //arrow functions, javascript ES6 syntax

    const { username, password } = this.state; //destructring the object, ES6 concept
    alert("username: " + username + "password:" + password);

    //call the validation function, before submiting the data to the API
  };

  onReset = () => {
    this.setState({
      username: "siri123@gmail.com",
      password: "",
    });
  };

  onChange = (e, field) => {
    //run the validator
    this.setState({
      [field]: e.target.value,
    });
  };


  //separate function for validators
  validations() {

    //TODO : Write validators



    // if(field === 'username' && e.target.value.length < 3){
    //     alert('Please provide a valid for username');
    //     return;
    // }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div
        style={{
          margin: "10px",
          padding: "30px 20px",
          border: " 1px solid black",
        }}
      >
        <h2>Login Form</h2>
        <br />
        <br />
        <label className="input-label">Email:</label>
        <input
          className="input-field"
          style={inputstyles}
          type="email"
          value={username}
          onChange={(e) => this.onChange(e, "username")} required
        />
        <br />
        <br />
        <label className="input-label">Password:</label>
        <input
          className="input-field"
          style={inputstyles}
          type="password"
          value={password}
          onChange={(e) => this.onChange(e, "password")}
        />
        <br />
        <br />
        <br />
        <button onClick={this.onlogin}>Login</button>
        <button onClick={this.onReset}>Cancel</button>
      </div>
    );
  }
}
