import React, { Component, version } from 'react'
import queryString from 'query-string'

export default class Filter extends Component {

  constructor(){
    super();
    this.state = {
      product: ' ',
      version:' '
    }
  }

  componentDidMount(){
   const qs = queryString.parse(this.props.location.search);
   console.log(qs);

   this.setState({
    product: qs.product,
    version: qs.model
   });

   //set in the state of the component

   //you can make an API calls to fetch the detalis about iPhone13
  }

  render() {
    const {product,version} = this.state
    return (
      <center>
        This is the Filter component
         <br/>
        Detalis for the Product: {product},{version}
      </center>
    )
  }
}
