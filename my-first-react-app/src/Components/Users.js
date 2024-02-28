//Class based Components:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { Component } from "react";

class Users extends Component {
       render() {
            console.log(this.props);
        // debugger
           return(
            <>
            <h3>{ this.props.children }</h3>
            <h3>Users Count is :{ this.props.Count }</h3>
            <h4>Type of Users is :{ this.props.Subtitle }</h4>

            </>
           )
       }
}

export default Users;