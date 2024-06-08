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
            <div className="bg-orange-100 dark:bg-slate-900 text-black dark:text-white">
                <h1 className="text-2xl font-bold">About Me</h1>
                <h2 className="text-xl py-1">This is a project to show menus list from Swiggy from Eluru City</h2>
                <User/>
            </div>
        )
    }
}


export default About;