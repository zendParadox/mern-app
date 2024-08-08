import { configureStore } from "@reduxjs /toolkit";

const initialState = {
  dataBlog: [],
  name: "Rafli Ramadhani",
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = configureStore(reducer);

export default store;
