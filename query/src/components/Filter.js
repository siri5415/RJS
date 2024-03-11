import React, { Component } from 'react'
import queryString from 'query-string'


export default class Filter extends Component {

    constructor(){
        super();
        this.State ={
        product:'',
        version:''
    }
}

componentDidMount(){
    const qs = queryString.parse(this.props.location.search);
    console.log(qs);

   this.setState({
    product:qs.product,
    version:qs.model
   });


    //set it in the state of the component

    //you can make an API call to fetch the detalis about iphone 13

}


  render() {
    const {product,version} = this.state
    return (
      <center>
        This is the Filter component
<br/>
        Detalis for the product: {product},{version}
      </center>
    )
  }
}
