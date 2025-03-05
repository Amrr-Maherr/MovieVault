"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../Redux/ActionCreator";

export default function Movies() {
  const dispatch = useDispatch();
  const MoviesData = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  return (
      <>
      
      </>
  );
}
