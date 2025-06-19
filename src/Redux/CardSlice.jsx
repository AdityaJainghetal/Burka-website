import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: [],
  },
  reducers: {
    // addtoCart: (state, actions) => {
    //   let Data = state.cart.filter((key) => key.id == actions.payload.id);
    //   if (Data.length >= 1) {
    //     message.error("Product Already Added!!");
    //   } else {
    //     state.cart.push(actions.payload);
    //   }
    // },

    addtoCart: (state, actions) => {
  const existingProduct = state.cart.find((item) => item.id === actions.payload.id);
  if (existingProduct) {
    // Agar product already hai to uski quantity badhao
    existingProduct.quantity += 1;
    message.success("Product quantity increased!");
  } else {
    // Agar product nahi hai to nayi entry karo with quantity = 1
    state.cart.push({ ...actions.payload, quantity: 1 });
    message.success("Product added to cart!");
  }
},



    qntyIncrease: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == actions.payload.id) {
          state.cart[i].qnty++;
        }
      }
    },
    qntyDecrease: (state, actions) => {
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == actions.payload.id) {
          if (state.cart[i].qnty <= 1) {
            message.error("Quantity not less than 1");
          } else {
            state.cart[i].qnty--;
          }
        }
      }
    },
    itemRemove: (state, actions) => {
      state.cart = state.cart.filter((key) => key.id != actions.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addtoCart, qntyIncrease, qntyDecrease, itemRemove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;