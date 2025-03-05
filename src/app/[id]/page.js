"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://www.freetestapi.com/api/v1/movies/${id}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch movie");
        }
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <p className="text-red-500 text-2xl">Error: {error}</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <p className="text-gray-500 text-2xl">Movie not found</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen">
        <div className="container mx-auto py-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Movie Poster */}
            <div className="md:order-1">
              {movie.poster && (
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full rounded-md shadow-md"
                />
              )}
            </div>

            {/* Movie Details */}
            <div className="md:order-2">
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
              <p className="text-gray-400 text-lg mb-6">{movie.plot}</p>

              {/* Additional Details */}
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Details</h2>
                <ul className="list-none">
                  <li className="mb-1">
                    <span className="text-gray-500">Year:</span>{" "}
                    <span className="text-white">{movie.year}</span>
                  </li>
                  <li className="mb-1">
                    <span className="text-gray-500">Genre:</span>{" "}
                    <span className="text-white">{movie.genre.join(", ")}</span>{" "}
                    {/* Join genres with comma */}
                  </li>
                  <li className="mb-1">
                    <span className="text-gray-500">Rating:</span>{" "}
                    <span className="text-white">{movie.rating}</span>
                  </li>
                  <li className="mb-1">
                    <span className="text-gray-500">Director:</span>{" "}
                    <span className="text-white">{movie.director}</span>
                  </li>
                  <li className="mb-1">
                    <span className="text-gray-500">Actors:</span>{" "}
                    <span className="text-white">
                      {movie.actors.join(", ")}
                    </span>{" "}
                    {/* Join actors with comma */}
                  </li>
                  <li className="mb-1">
                    <span className="text-gray-500">Runtime:</span>{" "}
                    <span className="text-white">{movie.runtime} minutes</span>
                  </li>
                  <li className="mb-1">
                    <span className="text-gray-500">Country:</span>{" "}
                    <span className="text-white">{movie.country}</span>
                  </li>
                </ul>
              </div>

              {/* Watch Trailer Button */}
              <div>
                <a
                  href={movie.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Trailer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetail;
