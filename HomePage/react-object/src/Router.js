import React, { Component } from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";

import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Products from "./components/layout/Products";
import Product from "./components/layout/Product";
import Contact from "./components/layout/Contact";
import NotFound from "./components/error/Notfound";


export default class Router extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Header/>
        <Routes>
       <Route path="/login" element={<Login/>} />
       <Route path="/logout" element={<Logout/>}/>
       <Route path="/home"    element={<Home/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/product" element={<Product/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/notfound" element={<NotFound/>}/>
        </Routes>
       <Footer/>
        </BrowserRouter>
      </>
    );
  }
}
