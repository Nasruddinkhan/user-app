import { createSlice } from "@reduxjs/toolkit";

const initialItem = {
  items: [],
  totalQuantity: 0,
  change: false,
};

const cartSlice = createSlice({
  initialState: initialItem,
  name: "cart",
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const isExsitItem = state.items.find((itm) => itm.id === newItem.id);
      state.change = true;
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
      state.change = true;

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
