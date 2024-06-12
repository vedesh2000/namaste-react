import logo from "./../../assets/logo.png";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  // We are subscribing to the store using selector and which part of store is needed
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-between bg-pink-100 dark:bg-gray-800">
      <div>
        <img className="w-40 bg-inherit" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center p-4 m-4">
          <li className="px-4 dark:text-white ">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 dark:text-white ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 dark:text-white ">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4 dark:text-white ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 dark:text-white ">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 dark:text-white font-bold">
            <Link to="/cart"> Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:text-white rounded"
            onClick={toggleTheme}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
          <li className="px-4 dark:text-white ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
