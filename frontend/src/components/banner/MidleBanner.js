import { IoWifiOutline } from "react-icons/io5";
import { MdOutlinePark } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { FaSquareParking } from "react-icons/fa6";

const MidleBanner = () => {
  return (
    <div className="px-2">
      <div className="w-full bg-gray-300 border-b-[1px] py-8 px-4 font-montserrat font-semibold text-stone-900 mt-8 rounded">
        <div className="max-w-container mx-auto flex flex-wrap justify-between items-center md:space-y-0 space-y-4 md:space-x-4">
          <div className="flex items-center justify-center gap-2 bg-slate-700 shadow-slate-800 shadow-xl py-2 px-4 space-x-2 rounded w-full sm:w-auto">
            <p className="text-sm text-white">FIND YOUR DREAM HOME</p>
          </div>
          <div className="flex items-center justify-center gap-2 shadow-xl shadow-slate-800 py-2 px-4 space-x-2 rounded w-full sm:w-auto hover:-rotate-12 scale-105 duration-300 sm:hover:bg-red-700 md:hover:bg-red-800 lg:hover:bg-red-900 xl:hover:bg-red-950 hover:text-white">
            <span className="text-center text-red-500 hover:bg-black hover:rounded">
              <FaSquareParking size={30} />
            </span>
            <p className="text-sm">Parking</p>
          </div>
          <div className="flex items-center justify-center gap-2 shadow-slate-800 shadow-xl py-2 px-4 space-x-2 rounded w-full sm:w-auto hover:-rotate-12 scale-105 duration-300 sm:hover:bg-blue-700 md:hover:bg-blue-800 lg:hover:bg-blue-900 xl:hover:bg-blue-950 hover:text-white">
            <span className="text-center text-slate-600 hover:bg-white-400 hover:rounded">
              <TbAirConditioning size={30} />
            </span>
            <p className="text-sm">A/c</p>
          </div>
          <div className="flex items-center justify-center gap-2 shadow-xl shadow-slate-800 py-2 px-4 space-x-2 rounded w-full sm:w-auto hover:rotate-12 scale-105 duration-300 sm:hover:bg-green-700 md:hover:bg-green-800 lg:hover:bg-green-900 xl:hover:bg-green-950 hover:text-white">
            <span className="text-center text-green-600 hover:bg-lime-400 hover:rounded">
              <MdOutlinePark size={30} />
            </span>
            <p className="text-sm">Park</p>
          </div>
          <div className="flex items-center justify-center gap-2 shadow-slate-800 shadow-xl py-2 px-4 space-x-2 rounded w-full sm:w-auto hover:rotate-12 scale-105 duration-300 sm:hover:bg-yellow-600 md:hover:bg-yellow-700 lg:hover:bg-yellow-800 xl:hover:bg-yellow-900 hover:text-white">
            <span className="text-center text-gray-600 hover:bg-slate-900 hover:rounded">
              <IoWifiOutline size={30} />
            </span>
            <p className="text-sm">Wi-Fi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidleBanner;
