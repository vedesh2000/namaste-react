import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const {resId} = useParams();
  
  const resInfo = useRestaurantMenu(resId);

  // Shimmer ui
  if (resInfo === null) {
    return <Shimmer />;
  }
  // Destruct the data
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  var { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  if(itemCards === undefined){
  var { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0];
  }

  return (
    <div className="p-4 bg-orange-100 dark:bg-slate-900 dark:text-white">
      <h1 className="font-bold text-3xl text-center mb-4 ">
        Welcome to {name}!
      </h1>
      <h2 className="font-bold text-2xl text-center mb-4">
        Our Cuisines: {cuisines.join(", ")}
      </h2>
      <h3 className="font-bold text-xl text-center mb-4">
        Our Special Offer: {costForTwoMessage}
      </h3>
      <div className="overflow-x-auto dark:text-white">
        <table className="min-w-full bg-white border border-gray-200 dark:bg-slate-950">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b bg-gray-100 text-left font-semibold text-gray-700">
                Item Name
              </th>
              <th className="py-2 px-4 border-b bg-gray-100 text-left font-semibold text-gray-700">
                Price (in Rupees)
              </th>
            </tr>
          </thead>
          <tbody>
            {itemCards.map((item) => (
              <tr key={item.card.info.id}>
                <td className="py-2 px-4 border-b">
                  {item.card.info.name}
                </td>
                <td className="py-2 px-4 border-b">
                  {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );  
};

export default RestaurantMenu;
