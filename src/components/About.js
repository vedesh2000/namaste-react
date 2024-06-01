import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste react web series</h2>
                {/* <User name={"Vedesh (function)"}/> */}
                <User name={"Vedesh (class)"} location={"HYD (class)"}/>
            </div>
        )
    }
}


export default About;