import { createSlice } from "@reduxjs/toolkit";

const initialItem = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  initialState: initialItem,
  name: "cart",
  reducers: {
    addItemToCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const isExsitItem = state.items.find((itm) => itm.id === newItem.id);
      if (!isExsitItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        isExsitItem.quantity++;
        isExsitItem.totalPrice = isExsitItem.totalPrice + newItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((itm) => itm.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
