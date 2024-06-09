import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "./../utils/useOnlineStatus";
import useRestaurantList from "./../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const listofRestaurants = useRestaurantList();
  const [showTopRated, setShowTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(listofRestaurants);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false) {
    return (
      <h1>
        Oops... Seems like you are not connected to the network! Please connect
        and retry.
      </h1>
    );
  }
  useEffect(() => {
    handleSearch();
  }, [searchText, showTopRated, listofRestaurants]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const handleSearch = () => {
    let filtered = listofRestaurants;

    if (showTopRated) {
      filtered = filtered.filter((res) => res.info.avgRating > 4);
    }

    if (searchText) {
      filtered = filtered.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setFilteredRestaurants(filtered);
  };

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-orange-100 dark:bg-slate-900">
      <div>
        <div className="py-4 bg-red-200 dark:bg-gray-600 dark:text-white">
          <label className="font-bold pl-4 pr-0 font-cursive">
            Search Restaurant
          </label>
          <input
            className="border-black mx-6 px-6 bg-gray-10 rounded-lg h-[40px] dark:bg-gray-800 font-cursive"
            type="text"
            value={searchText}
            placeholder="Enter Restaurant Name"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <label className="font-cursive">
            <input
              className="border-black mx-6 px-6 "
              type="radio"
              checked={!showTopRated}
              onChange={() => setShowTopRated(false)}
            />
            All Restaurants
          </label>
          <label className="font-cursive">
            <input
              className="border-black mx-6 px-6"
              type="radio"
              checked={showTopRated}
              onChange={() => setShowTopRated(true)}
            />
            Top Rated Restaurants
          </label>
          <label className="font-bold pl-4 pr-0 font-cursive">User Name:</label>
          <input
            className="m-3 border border-black p-1 font-cursive rounded-xl dark:text-white dark:bg-gray-800"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap dark:text-white">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {
              //Shows restaurants with rating more than 4 as Promoted, because promoted tag is not there in our data
              restaurant.info.avgRating > 4 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
