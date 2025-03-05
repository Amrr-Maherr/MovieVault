"use client";
import axios from "axios";
import { GET_ALL_DATA } from "./Actions";

export const FetchData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://www.freetestapi.com/api/v1/movies"
      );
      dispatch({
        type: GET_ALL_DATA,
        payload: response.data,
      });
      console.log(response.data); 
    } catch (error) {
      if (error.response) {
          console.log(error.response.data);
        console.log(error.message);
      }
    }
  };
};
