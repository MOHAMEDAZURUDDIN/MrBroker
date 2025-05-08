import { useSelector } from "react-redux";

const shadowColors = [
  "cyan-400",
  "rose-400",
  "red-600",
  "lime-600",
  "amber-900",
  "yellow-500",
  "pink-500",
  "sky-400",
  "lime-500",
  "gray-400",
  "orange-500",
  "blue-500",
];

const GetShadowColor = () => {
  const darkMode = useSelector((state) => state.darkmode);

  const getRandomShadowColor = () => {
    const randomIndex = Math.floor(Math.random() * shadowColors.length)
    return darkMode ? "shadow-blue-500": `shadow-${shadowColors[randomIndex]}`
  }
   return getRandomShadowColor()
};

export default GetShadowColor;
