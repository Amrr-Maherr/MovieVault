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
    textColor: "text-zinc-300",
  },
  {
    title: "Inception",
    image: "/Assets/wallpaperflare.com_wallpaper (3).jpg",
    textColor: "text-indigo-200",
  },
  {
    title: "Interstellar",
    image: "/Assets/wallpaperflare.com_wallpaper (4).jpg",
    textColor: "text-amber-100",
  },
  {
    title: "Captain America",
    image: "/Assets/cap.jpg",
    textColor: "text-red-400",
  },
  {
    title: "John Wick",
    image: "/Assets/jhon.jpg",
    textColor: "text-stone-400",
  },
  {
    title: "Loki",
    image: "/Assets/loky.jpg",
    textColor: "text-green-300",
  },
];

const buttonColor = "bg-gray-700 hover:bg-gray-600"; // لون الزر المحايد
const buttonText = "text-gray-100"; // لون نص الزر

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
              <h1
                className={`text-5xl md:text-6xl font-bold ${movie.textColor} drop-shadow-lg`}
              >
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
