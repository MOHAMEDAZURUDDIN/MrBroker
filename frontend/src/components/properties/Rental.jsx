
import { useSelector } from "react-redux";
import GetBackgroundColor from "../layout/GetBackgroundColor";

import { newProperties } from "../../constants";
import RentalCard from "./RentalCard";
const Rental = () => {

  const darkMode = useSelector((state) => state.darkmode);



  return (
    <div className={`w-full pb-10 ${GetBackgroundColor()}`}>
      <div className="w-full pb-6">
        <h1
          className={`text-3xl font-bold font-montserrat text-center ${
            darkMode ? "text-slate-800" : "text-white-400"
          }`}
        >
          <span className="text-coral-red">Exclusive</span> Rentals
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 text-center ">
        {newProperties && newProperties.map((property,index)=> (
          <RentalCard key={index} property={property}/>
        ))}
      </div>
    </div>
  );
};

export default Rental;
