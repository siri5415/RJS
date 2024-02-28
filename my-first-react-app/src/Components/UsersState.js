import { Component } from "react";
import Users1 from "./Users1";

class UsersState extends Component{

    constructor() {
        super();

        this.state = {
            Count:0,
            school:"Edureka",
            Course:"React",
            listOfusers:[
                {name:'Sirisha', course:'React'},
                {name:'Navaroja',course:'NodeJs'},
                {name:'Lakshmi', course:'Html'},
                { name:'Mahi',  course:'Css'},
            ],
            isUservisiable: true
        }
        console.log("I am in Constructor");
    }

     static getDerivedStateFromProps(props,state) {
       console.log("I am in getDerivedStateFromProps");


//It is the method where we bind the data coming from props to the states of the component 
    return{
        Count:props.Count
    }
}

shouldComponentUpdate(){
    console.log("I am in getDerivedFromProps");
    return true;
}

getSnapshotBeforeUpdate(props,state){
    console.log("I am in getSnapshotBeforeUpdate");
    return null;
}

componentDidUpdate() {
        console.log("I am in getSnapshotBeforeUpdate");
}
    componentDidMount() {
        console.log("I am in componentDidMount");

        //You can check if user is logged
        //You can make API calls to fetch the data

        setTimeout(()=>{
            this.setState({
                isUservisiable: false
            })
        },3000)
    }

    onIncreaseCount = (e,param) => {
            console.log("You clicked on Increase count");
            this.setState(
                {
                    Count: this.state.Count + 1
                }
            )
    }
 
    onDecreaseCount = () => {
        console.log("You clicked on Decrease count");
        this.setState(
                {
                    Count: this.state.Count - 1
                }
        )
        }

    render(){
        console.log("I am in Render");
        // const {listOfusers,Count} = this.state;
        const myownParam = "SIREESHA"
        return (
            <>
              <h3>{this.props.children}</h3>
              <h4>Users Count coming from parent  is :{this.props.Count}</h4>
              <h4>Users Count value from Component state  is :{this.state.Count}</h4>
              <h4>Type of Users is :{this.props.Subtitle}</h4>
              {
                this.state.isUservisiable
                ?
                this.state.listOfusers.map((element,index) => {
                    return <Users1 key = {index} name={element.name} course={element.course} userid={index+1}/>
                })
                :
                null
              }
              <button onClick={ (e) => this.onIncreaseCount(e,myownParam) }>Increase Count</button>
              <button onClick={this.onDecreaseCount}>Decrease Count</button>
            </>
        );
    }
}
export default UsersState;