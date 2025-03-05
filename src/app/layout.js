"use client";
import { Oswald } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"], weight: ["200", "400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
