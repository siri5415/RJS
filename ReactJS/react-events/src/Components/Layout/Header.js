import React, { Component } from 'react';
import {withRouter}  from 'react-router-dom';

class Header extends Component {

  onNavigation = (path)=>{
        //logic to navigate
        this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <h1>Welocme to my E-commerce website</h1>
        <nav>
          <button onClick={() => this.onNavigation('/home')}>Home</button>
          <button onClick={() => this.onNavigation('/products')}>Products</button>
          <button onClick={() => this.onNavigation('/contact')}>Contact</button>
        </nav>
      </div>
    )
  }
}

export default withRouter(Header);