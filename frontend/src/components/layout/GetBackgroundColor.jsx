import { useSelector } from "react-redux";

const GetBackgroundColor = () => {
  const darkMode = useSelector((state) => state.darkmode);
  return darkMode ? "bg-gray-300" : "bg-slate-950";
};

export default GetBackgroundColor;
