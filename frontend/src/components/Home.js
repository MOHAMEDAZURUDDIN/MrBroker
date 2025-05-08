import React from "react";
import MetaData from "../sections/MetaData";
import HeroBanner from "./banner/HeroBanner";
import MidleBanner from "./banner/MidleBanner";
import Villas from "./banner/Villas";
import Rental from "./properties/Rental";
import About from "../sections/About";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import PropertiesFlex from "./banner/PropertiesCard";

const Home = () => {
  // const darkMode = useSelector((state) => state.darkmode);
  return (
    <div className="flex flex-col gap-6 relative"
    >
      <MetaData title={"Find your Dream Home"} />
      <div className="mt-16">
        <HeroBanner />
        <MidleBanner/>
        <PropertiesFlex/>
        <Villas/>
        <Rental/>
        <About/>
        <Services/>
        <Contact/>
      </div>
    </div>
  );
};
export default Home;
