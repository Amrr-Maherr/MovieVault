"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../Redux/ActionCreator";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion
import Loader from "../Components/Loader";

export default function Movies() {
  const dispatch = useDispatch();
  const MoviesData = useSelector((state) => state.movies);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(FetchData());
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [dispatch]);

  const filteredMovies = MoviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader key="loader" /> // Add key to the Loader component
      ) : (
        <div className="bg-black py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center mb-8">
              Top Picks
            </h1>

            {/* Search Input */}
            <div className="relative mb-4">
              <input
                type="text"
                className="w-full p-2 pl-10 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Search for a movie..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                  <Link href={`/${movie.id}`} key={movie.id} passHref>
                    <motion.div
                      className="relative rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }} // Add a slight scale on hover
                      transition={{ duration: 0.2 }} // Add a smooth transition
                    >
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <h2 className="text-lg font-semibold mb-1">
                          {movie.title}
                        </h2>
                        <div className="flex items-center text-sm mb-1">
                          <span className="text-yellow-400 mr-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.529 1.257 5.27c.271 1.136-.964 2.03-1.96 1.425L12 18.354l-4.335 2.254c-.996.605-2.231-.29-1.96-1.425l1.257-5.27-4.117-3.529c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span>{movie.rating} / 10</span>
                        </div>
                        <p className="text-gray-300 text-sm line-clamp-2">
                          {movie.plot}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))
              ) : (
                <div className="text-center text-gray-500 col-span-full">
                  No movies found matching your search.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
