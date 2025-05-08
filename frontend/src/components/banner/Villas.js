import React from "react";
import { Link } from "react-router-dom";
import villas1 from "../../assets/vl1.jpg";
import villas2 from "../../assets/vl2.jpg";
import villas3 from "../../assets/vl3.jpg";
import { useSelector } from "react-redux";

const Villas = () => {
  const darkMode = useSelector((state) => state.darkmode);
  return (
    <div
      className={`py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10 px-4 ${
        darkMode ? "bg-gray-300" : "bg-slate-950"
      }`}
    >
      <div className="w-full md:w-2/3 lg:w-1/2 h-full hover:scale-90 duration-300">
        <div className="w-full pb-10">
          <h1
            className={`text-3xl font-bold font-montserrat text-center ${
              darkMode ? "text-slate-800" : "text-white-400"
            } `}
          >
            <span className="text-coral-red">Prime</span> Villas
          </h1>
        </div>
        <Link to="/shop">
          <img className="rounded" src={villas1} alt="sale 1" />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10 ">
        <div className="h-1/2 w-full hover:scale-90 duration-300">
          <Link to="/shop">
            <img className="rounded" src={villas2} alt="sale 2" />
          </Link>
        </div>
        <div className="h-1/2 w-full hover:scale-90 duration-300">
          <Link to="/shop">
            <img className="rounded" src={villas3} alt="sale 3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Villas;
