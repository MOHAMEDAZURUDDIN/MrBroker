import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faParking, faWifi } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GetShadowColor from "../layout/GetShadowColor";

const RentalCard = ({ property }) => {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.darkmode);

  const shadowStyle = GetShadowColor();

  const { id, src, bedroom, parking, wifi, actualPrice, discountPrice } =
    property;

  const handleClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div
      key={id}
      className={`hover:scale-105 duration-500 py-4 rounded-lg shadow-xl ${shadowStyle} ${
        darkMode ? "bg-slate-900" : "bg-slate-800"
      } `}
    >
      <img
        src={src}
        alt="properties"
        className="w-full h-48 object-cover mx-auto"
      />
      <div className="p-4 flex flex-col justify-between ">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-md font-semibold text-gray-500">
            <span className="mr-2">
              <FontAwesomeIcon icon={faBed} className="text-gray-300 mr-1" />
              {bedroom} BHK
            </span>
            <span className="mr-2">
              <FontAwesomeIcon
                icon={faParking}
                className="text-gray-300 mr-1"
              />
              {parking ? "Parking" : "No Parking"}
            </span>
            <span className="mr-2">
              <FontAwesomeIcon icon={faWifi} className="text-gray-300 mr-1" />
              {wifi ? "Wifi" : "No Wifi"}
            </span>
          </div>
          <span className="flex items-center">
            <del className="mr-2 text-red-500">{actualPrice}</del>
            <span className="font-bold">{discountPrice}</span>
          </span>
        </div>
        <div className="flex items-center justify-center mt-2">
          <button
            onClick={() => handleClick(property.id)}
            className="bg-teal-800 text-white px-4 py-2 rounded-md hover:scale-105 duration-300 hover:rotate-6 hover:bg-blue-900"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
