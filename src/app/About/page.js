"use client";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
        <motion.h1
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Movie Vault
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-gray-400 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Movie Vault is a web platform that allows you to explore the latest
          movies, discover cast details, ratings, and more. We integrate a
          dedicated API to bring you real-time updates directly from trusted
          sources.
        </motion.p>
        <motion.div
          className="mt-6 flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="https://example.com"
            className="px-6 py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-500 transition"
          >
            Explore Movies
          </a>
          <Link
            href="/contact"
            className="px-6 py-2 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
