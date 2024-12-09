
import Header from "./components/Header";
import Hero from './components/hero';
import Footer from "./components/footer"
import Shoes from "./components/Shoes";
import Featured from "./components/featured";
import Gear from "./components/GearUp";

export default function Home () {
  return (
    <div className="absolute top-10 left-10 font-medium">
      {/* Header Component */}
      <Header />

      {/* Hero Component */}
      <Hero/>

      {/* Shoes Component */}
      <Shoes />

      {/* Featured Component */}
      <Featured />

      {/* GearUp Component */}
      <Gear />

      {/* Footer Component */}
      <Footer />

    </div>
  )
}
