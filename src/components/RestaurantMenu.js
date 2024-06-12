import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  // By default 1st will be open
  const [showIndex, setShowIndex] = useState(0);

  // Shimmer ui
  if (resInfo === null) {
    return <Shimmer />;
  }
  // Destruct the data
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      // console.log(c.card?.["card"]["@type"]);
      return (
        c.card?.["card"]["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  return (
    <div className="p-4 bg-orange-100 dark:bg-slate-900 dark:text-white">
      <h1 className="font-bold text-3xl text-center my-4 ">
        Welcome to {name}!
      </h1>
      <p className="font-bold text-2xl text-center my-4 ">
        Our cuisines {cuisines}!
      </p>
      <p className="font-bold text-xl text-center my-4 ">
        Our Offer {costForTwoMessage}!
      </p>
      {/* {/* Categories Accordion UI */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.info?.id}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex = {() => setShowIndex(index)}
          collapseAll = {() => setShowIndex(null)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
