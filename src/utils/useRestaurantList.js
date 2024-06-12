import { RESTAURANT_API } from './constants'
import { useState, useEffect } from 'react';
const useRestaurantList = () => {
    const [listofRestaurants, setlistofRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        setlistofRestaurant(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };
      return listofRestaurants;
}

export default useRestaurantList;