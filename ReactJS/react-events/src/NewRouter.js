 import React, { Component } from 'react'
import{BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
 import Login from "./Components/Auth/Login";
import Logout from "./Components/Auth/Logout";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Layout/Home";
import Products from "./Components/Layout/Products";
import Product from "./Components/Layout/Product";
import Contact from "./Components/Layout/Contact";
import Notfound from "./Components/Error/Notfound";


export default class NewRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/header">Header</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>

            <li>
              <Link to="/dummy-path">Take me to Mars</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/not-found">NotFound</Link>
            </li>
            <li>
              <Link to="/Footer">Footer</Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />{" "}
            </Route>
            <Route path="/header">
              <Header />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/not-found">
              <Notfound />
            </Route>
            <Route path="/footer">
              <Footer />
            </Route>
            <Route path="*">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
 }




