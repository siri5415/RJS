import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

 class Home extends Component {

    onNavigate = (path) => {
      this.props.history.push(path);
    }

    render() {
     return (
      <center>
        This is the Home page
        <br/>

        <button onClick={() => this.onNavigate('/filter?product=iPhone&model=13')}>Go to Filter Page</button>
        <button onClick={() => this.onNavigate('/products')}>Go to Products Page</button>

        <br/>
      </center>
    );
  }
}
export default withRouter(Home);