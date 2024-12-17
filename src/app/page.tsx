
// Components

import Hero from './components/hero';
import Shoes from "./components/Shoes";
import Featured from "./components/featured";
import Gear from "./components/GearUp";
import Flight from "./components/Flight";
import Essential from "./components/Essential";
import Footer from "./components/footer"

import  Category  from "./components/Category";



export default function Home () {
  return (
    <div className="absolute top-10 left-10 border-[2px] border-red-800 font-medium">
      {/* Components */}
      
      <Hero />

      <Shoes/>

      <Featured/>

      <Gear/>

      <Flight/>

      <Essential />

      <Category />

      <Footer />
    </div>
  )
}
