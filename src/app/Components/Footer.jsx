"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 py-10"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-white text-2xl font-bold mb-6">
          Movie Vault
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-500">
          <div>
            <h3 className="text-white font-semibold mb-2">Explore</h3>
            <Link href="/movies" className="block hover:text-white">
              Movies
            </Link>
            <Link href="/tv-shows" className="block hover:text-white">
              TV Shows
            </Link>
            <Link href="/new" className="block hover:text-white">
              New & Popular
            </Link>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <Link href="/about" className="block hover:text-white">
              About Us
            </Link>
            <Link href="/careers" className="block hover:text-white">
              Careers
            </Link>
            <Link href="/press" className="block hover:text-white">
              Press
            </Link>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Support</h3>
            <Link href="/faq" className="block hover:text-white">
              FAQ
            </Link>
            <Link href="/contact" className="block hover:text-white">
              Contact
            </Link>
            <Link href="/help" className="block hover:text-white">
              Help Center
            </Link>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <Link href="/terms" className="block hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="block hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookie" className="block hover:text-white">
              Cookie Preferences
            </Link>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          <Link href="#" className="hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="#" className="hover:text-white">
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Movie Vault. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
