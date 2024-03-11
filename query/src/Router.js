import React, { Component } from 'react';
import{Route,BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import Filter from './components/Filter';
import Products from './components/Products';
import Product from './components/Product';

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
             <Route path='/' Component={Home} exact/>
             <Route path='/home' Component={Home} exact/>
             <Route path='/filter' Component={Filter} exact/>
             <Route path='/products' Component={Products} exact/>
             <Route path='/product' Component={Product} exact/>
        </BrowserRouter>
    )
  }
}
