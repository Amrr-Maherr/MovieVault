"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const movies = [
  {
    title: "The Dark Knight",
    image: "/Assets/wallpaperflare.com_wallpaper (2).jpg",
  },
  {
    title: "Inception",
    image: "/Assets/wallpaperflare.com_wallpaper (3).jpg",
  },
  {
    title: "Interstellar",
    image: "/Assets/wallpaperflare.com_wallpaper (4).jpg",
  },
  {
    title: "Captain America",
    image: "/Assets/cap.jpg",
  },
  {
    title: "John Wick",
    image: "/Assets/jhon.jpg",
  },
  {
    title: "Loki",
    image: "/Assets/loky.jpg",
  },
  {
    title: "Avengers: Endgame",
    image: "/Assets/endgame.jpg",
  },
  {
    title: "Spider-Man: No Way Home",
    image: "/Assets/spiderMan.jpg",
  },
  {
    title: "The Matrix",
    image: "/Assets/matrix.jpg",
  },
  {
    title: "Joker",
    image: "/Assets/joker.jpg",
  },
  {
    title: "Fight Club",
    image: "/Assets/Fight Club.jpg",
  },
  {
    title: "The Godfather",
    image: "/Assets/The Godfather.jpg",
  },
  {
    title: "Shutter Island",
    image: "/Assets/Shutter Island.jpg",
  },
  {
    title: "Gladiator",
    image: "/Assets/Gladiator.jpg",
  },
  {
    title: "The Wolf of Wall Street",
    image: "/Assets/The Wolf of Wall Street.jpg",
  },
];

const buttonColor = "bg-gray-700 hover:bg-gray-600";
const buttonText = "text-gray-100";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-blue-900 to-gray-900 text-white">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-screen"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-screen">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                style={{ objectFit: "cover" }}
                className="brightness-50"
                priority={index < 2}
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                {movie.title}
              </h1>
              <button
                className={`mt-6 px-6 py-3 rounded-md shadow-lg transition-all duration-200 ${buttonColor} ${buttonText} font-semibold text-lg`}
              >
                Watch Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
