"use client";
import { GET_ALL_DATA } from "./Actions";

const Reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default Reducer;
