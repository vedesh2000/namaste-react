import food from "./../../assets/food.jpg";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, action }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  // Create a map of item IDs directly
  const cartItemsMap = new Map();
  cartItems.forEach((item) => {
    const id = item?.card?.info?.id;
    if (id) {
      cartItemsMap.set(id, true); // or you can store additional information if needed
    }
  });
  //   console.log(cartItemsMap);

  const handleButtonClick = (item) => {
    // whatever we are passing that will be action.payload
    if (!cartItemsMap.has(item?.card?.info?.id)) dispatch(addItem(item));
    else dispatch(removeItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 border-gray-200 flex justify-between"
          >
            <div className="w-9/12">
              <div>
                <div className="font-semibold py-2">{item.card.info.name}</div>
                <div>
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </div>
              </div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button
                  className={`p-2 m-1 rounded-lg text-white hover:border hover:border-white 
            ${
              cartItemsMap.has(item?.card?.info?.id)
                ? "bg-red-500 hover:bg-red-700"
                : "bg-black hover:bg-green-500"
            }`}
                  onClick={() => handleButtonClick(item)}
                >
                  {cartItemsMap.has(item?.card?.info?.id) ? (
                    <>Remove</>
                  ) : (
                    <>Add</>
                  )}
                </button>
              </div>

              <img
                className="rounded-lg"
                src={CDN_URL + item?.card?.info?.imageId}
                onError={(e) => (e.currentTarget.src = food)}
                alt={item?.card?.info?.name || "Food Image"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
