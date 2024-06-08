import { useEffect, useState } from "react";

const User = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchUserInfo = async () => {
            const data = await fetch("https://api.github.com/users/vedesh2000");
            const json = await data.json();
            setUserInfo(json);
        };
        fetchUserInfo();
    }, []);

    const { url, company, name, location, avatar_url } = userInfo;
    console.log(url);
    return (
        <div className="user-card">
            <img className="w-[250px] h-[250px] rounded-3xl py-3" src={avatar_url} alt="User Avatar" />
            <h2 className="py-2">
                <span className="font-bold">Name:</span> {" " + name}
            </h2>
            <h2 className="py-2">
                <span className="font-bold">Company:</span> {" " + company}
            </h2>
            <span className="font-bold py-2">Github URL:</span>
                <a href={url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                { " " + url}
            </a>
            <h3 className="py-2"> <span className="font-bold">Location:</span> {" " + location}</h3>
            <h2 className="py-2"><span className="font-bold">Contact:</span> vedeshkompella@gmail.com</h2>
        </div>
    );
};

export default User;
