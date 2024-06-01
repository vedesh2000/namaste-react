import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          userInfo: {
            name: "dummy name",
            location: "Default",
            avatar_url: "http://dummy-photo.com",
          }
        };
    }

  async componentDidMount(){

    const data = await fetch("https://api.github.com/users/vedesh2000");
    const json = await data.json();
    this.setState({
      userInfo: json
    })

    this.timer = setInterval(() => {
      console.log("Namaste React Class Component log");
    }, 1000);
    }

    componentWillUnmount(){
      clearInterval(this.timer);
    }
  render() {
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h2>Contact: @asdf</h2>
      </div>
    );
  }
}

export default UserClass;
