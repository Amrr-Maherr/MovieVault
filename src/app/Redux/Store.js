"use client";
import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

export const store = configureStore({
  reducer: {
    movies: Reducer,
  },
});
