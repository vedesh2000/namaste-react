import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const totalValue = cartItems.reduce((acc, curr) => {
    const price = curr?.card?.info?.price
      ? curr.card.info.price
      : curr.card.info.defaultPrice;
    return acc + price;
  }, 0); // Initial value for the accumulator is 0

  return (
    <div className="text-center p-2 bg-orange-100 dark:bg-slate-900 dark:text-white">
      <div className="flex justify-between mx-10">
        <h1 className="text-2xl font-bold">Cart (total value: {totalValue / 100})</h1>
        <button
          className="p-2 m-2 bg-red-500 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 text-left bg-gray-50 shadow-lg p-4 mx-auto my-3 rounded-lg dark:bg-gray-600 dark:text-white">
        {cartItems.length === 0 && <h1>Cart is empty! Please Add items to the cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
