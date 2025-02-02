// Components

import Hero from "./components/Hero";
import Shoes from "./components/Shoes";
import Featured from "./components/Featured";
import GearUp from "./components/GearUp";
import Flight from "./components/Flight";
import Category from "./components/Catergories";
import Essential from "./components/Essentials";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`font-medium ${inter.className}`}>
      <Hero />

      <Shoes />

      <Featured />

      <GearUp />

      <Flight />

      <Essential />

      <Category />

      <Footer />
    </div>
  );
}
