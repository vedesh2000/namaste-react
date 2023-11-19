import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btname, setBtname] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
