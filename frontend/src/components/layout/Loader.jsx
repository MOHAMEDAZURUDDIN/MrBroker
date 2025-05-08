import GetBackgroundColor from "./GetBackgroundColor";

export default function Loader() {
  return (
    <div
      className={`${GetBackgroundColor} font-montserrat text-pale-blue flex items-center justify-center h-screen`}
    >
      <div className="animate-bounce rounded-full border-spacing-10 border-t-8 border-yellow-500 h-32 w-32"></div>
    </div>
  );
}
