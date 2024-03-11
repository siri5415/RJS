import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Products extends Component {

    goToDetails = (product) =>{
         this.props.history.push('/products/${product}');
    }
    render() {
    return (
        <center>
        <ul>
          <li onClick={() => this.goToDetails('iphone')}>iphone</li>
          <li onClick={() => this.goToDetails('ipad')}>ipad</li>
          <li onClick={() => this.goToDetails('iMac')}>iMac</li>
          <li onclick={() => this.goToDetails('iWatch')}>iWatch</li>
        </ul>
        </center>
    );
  }
}
export default withRouter(Products)