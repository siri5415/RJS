import React, { Component } from 'react';
import{Route,BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import Filter from './components/Filter';
import Products from './components/Products';
import Product from './components/Product';
import Todos from './components/Todos';

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
             <Route path='/' component={Home} exact/>
             <Route path='/home' component={Home} />
             <Route path='/filter' component={Filter} />
             <Route path='/products' component={Products} />
             <Route path='/products/:name' component={Product} /> 
             <Route path='/todos' component={Todos} /> 
        </BrowserRouter>
    )
  }
}
