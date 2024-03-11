import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Layout/Home';
import Products from './Components/Layout/Products';
import Product from './Components/Layout/Product';
import Contact from './Components/Layout/Contact';
import Notfound from './Components/Error/Notfound';

export default class Router extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
         <Header />  
            <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} /> 
          <Route path="/login" component={Login} />
           <Route path="/logout" component={Logout} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product" component={Product} />
          <Route path="/contact" component={Contact} />
          <Route path="/not-found" component={Notfound} />
           <Footer /> 
        </BrowserRouter>
      </>
    );
  }
}



// import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import Home from './Components/Layout/Home';
// import About from './Components/Layout/About';
// import Contact from './Components/Contact';
// import NotFound from './Components/NotFound';


// export default class NewRouter extends Component {
//   render(){
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route  path="/home" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//           <Route path = "/not-found"component={NotFound} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// }
