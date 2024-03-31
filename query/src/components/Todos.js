import React, { Component } from 'react';
import axios from 'axios';

export default class Todos extends Component {

    constructor() {
     super();

     this.state = {
        listOfTodos: [],
        listOfComments:[]
     };
    }

    componentDidMount(){
       //Make an API calls and get the data

       axios.get(`https://jsonplaceholder.typicode.com/todos`).then(resp =>{
          this.setState({
            listOfTodos: resp.data
          });
       }).catch(err => {
       });

        // axios.get(`http://localhost:6700/comments`).then((resp) => {
        //     this.setState({
        //       listOfComments: resp.data
        //           });
        //         }).catch((err) => {
        //         });

        fetch(
            `http://localhost:6700/comments`,
            {
               method: 'GET'
            }
        )
        .then(res => res.json())
        .then(res =>{
              this.setState({
                listOfComments: res
                    });
        })
        .catch(err =>{

        })
    }

  render() {
    const { listOfTodos,listOfComments } = this.state;
    return (
      <center>
        {
        listOfTodos.map((item, index) => {
          return (
            <ul>
              <li>{item.title}</li>
            </ul>
          );
        })
        }
        <br />
        <div>************ Comments ************</div>
        {
        listOfComments.map((item, index) => {
          return (
            <ul>
              <li>{item.name}</li>
            </ul>
          );
        })}
      </center>
    );
  }
}
