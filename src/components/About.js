import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext.js";

class About extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return (
            <div className="bg-orange-100 dark:bg-slate-900 text-black dark:text-white">
                <h1 className="text-2xl font-bold">
                    About 
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="font-bold"> {loggedInUser} </h1>}
                    </UserContext.Consumer>
                </h1>
                <h2 className="text-xl py-1">This is a project to show menus list from Swiggy from Eluru City</h2>
                <h2 className="text-lg py-1">This project will showcase my React Skills</h2>
                <User/>
            </div>
        )
    }
}


export default About;