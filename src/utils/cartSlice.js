import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here.
            // Redux Toolkit uses Immer Behind the scenes
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // Remove specific item from cart
            // console.log(current(state.items[0]));
            state.items = state.items.filter((item) => item?.card?.info?.id !== action.payload?.card?.info?.id);
        },        
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer;