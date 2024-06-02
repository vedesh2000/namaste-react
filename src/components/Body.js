import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import useOnlineStatus from './../utils/useOnlineStatus'
import useRestaurantList from './../utils/useRestaurantList'

const Body = () => {
  const listofRestaurants = useRestaurantList();
  const [showTopRated, setShowTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(listofRestaurants);
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return (
      <h1>
        Oops... Seems like you are not connected to the network! Please connect and retry.
      </h1>
    )
  }
  useEffect(() => {
    handleSearch();
  }, [searchText, showTopRated, listofRestaurants]);

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
    <div className="body">
      <div className="filter">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="filter-options">
        <label>
          <input
            type="radio"
            checked={!showTopRated}
            onChange={() => setShowTopRated(false)}
          />
          All Restaurants
        </label>
        <label>
          <input
            type="radio"
            checked={showTopRated}
            onChange={() => setShowTopRated(true)}
          />
          Top Rated Restaurants
        </label>
      </div>
    </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
