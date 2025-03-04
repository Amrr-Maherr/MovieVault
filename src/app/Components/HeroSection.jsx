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
    title: "Interstellar",
    image: "/Assets/wallpaperflare.com_wallpaper (3).jpg",
  },
  {
    title: " Interstellar",
    image: "/Assets/wallpaperflare.com_wallpaper (4).jpg",
  },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-blue-900 to-gray-900 text-white">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-screen"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-screen">
              <Image
                src={movie.image}
                alt={movie.title}
                layout="fill"
                objectFit="cover"
                className="brightness-50"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 drop-shadow-lg">
                {movie.title}
              </h1>
              <button className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg rounded-lg shadow-lg transition">
                Watch Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
