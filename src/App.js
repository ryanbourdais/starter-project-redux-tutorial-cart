import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
// import {
//   DECREASE,
//   INCREASE,
//   RESET,
//   CHANGE_NAME,
//   GET_TOTAL,
//   GET_AMOUNT,
// } from "./actions";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
