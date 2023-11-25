import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btname, setBtname] = useState("Login");

  useEffect(()=>{
    console.log("useEffect called");
  })

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btname === "Login" ? setBtname("Logout") : setBtname("Login");
            }}
          >
            {btname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
