import { useEffect, useState } from "react";

const User = (props) => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchUserInfo = async () => {
            const data = await fetch("https://api.github.com/users/vedesh2000");
            const json = await data.json();
            setUserInfo(json);
        };
        fetchUserInfo();

        const timer = setInterval(() => {
            console.log("Namaste React");
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    const { name, location, avatar_url } = userInfo;
    return (
        <div className="user-card">
            <img src={avatar_url} alt="User Avatar" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h2>Contact: @asdf</h2>
            <h2>Component: @functional</h2>

        </div>
    );
};

export default User;
