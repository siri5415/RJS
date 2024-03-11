import React, { Component } from 'react'
import '../../Styles/Login.css';

const inputstyles = {
    border:'none',
    borderBottom:'3px solid gray',
    padding:'5px',
    height:'24px',
    width:'300px',
    background:'beige',
    margin:'10px'
};

export default class Login extends Component {
 
      //need a state to handle the data in the components

      constructor(){
        super()
        this.state = {
            username:"",
            password:""
        };
      }

    //login handler which can take the input and process
     onLogin = () => {
       //arrow functions, is js Es6 syntax

       const { username, password } = this.state; // destructring the object, Es6 concept
       alert("username: " + username + "password: " + password);

       //call the validation function, before submitted the data to the API
     }


    onReset = () => {
        this.setState({
          username: "",
          password: "",
        });
    }

    onChange = (e,field) =>{
        //run the validators
       this.setState({
        [field]: e.target.value
       })
    }


    //separate function for validators
    validations(){


        //TODO write validations

      // if(field === 'username' && e.target.value.length < 3){
      //     alert('password provide a  valid for username');
      //     return;
      // }
    }
  render() {                                                                    
    const {username,password} = this.state;
    
    return (
      <div style={{margin: '10px',padding:'30px 20px',border:'1px solid black'}}>
        <h2>Login Form</h2>
        <br />
        <br />
        <label className='input-label'>Email:</label>
        <input className="input-field" style={inputstyles} type="email" value={username} onChange={(e) =>this.onChange(e,'username')}/>
        <br />
        <br />
        <label className='input-label'>Password:</label>
        <input className="input-field" style={inputstyles} type="password" value={password} onChange={(e) =>this.onChange(e,'password')}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button onClick={this.onLogin}>Login</button>
        <button onClick={this.onReset}>Cancel</button>
      </div>
    );
  }
}
