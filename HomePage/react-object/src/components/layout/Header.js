// import React, { Component } from 'react';
// import {useHistroy} from 'react-router-dom';


// class Header extends Component {
//  onNavigation = (path) =>{
//             // logic to navigate
//   const history = useHistroy();
//   history.push(path);
//   };

//   render() {
//     return (
//       <div>
//         <h1> Welcome to E-commerce website</h1>
//         <nav>
//          <button onClick={() => this.onNavigation('/home')}>Home</button>
//          <button onClick={() =>this.onNavigation('/contact')}>Contact</button>
//         <button onClick={() =>this.onNavigation('/products')}>products</button>
//          </nav>
//       </div>
//     );
//   }
// }
// export default Header;


import React, { Component } from "react";
import { useHistory } from "react-router-dom";

class Header extends Component {
  onNavigation = (path) => {
    const history = useHistory();
    history.push(path);
  };

  render() {
    return (
      <div>
        <h1>Welcome to the e-commerce website</h1>
        <nav>
          <button onClick={() => this.onNavigation("/home")}>Home</button>
          <button onClick={() => this.onNavigation("/contact")}>Contact</button>
          <button onClick={() => this.onNavigation("/products")}>
            Products
          </button>
        </nav>
      </div>
    );
  }
}

export default Header;
