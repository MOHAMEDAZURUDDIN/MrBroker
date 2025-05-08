import { useSelector } from "react-redux";
import GetBackgroundColor from "../components/layout/GetBackgroundColor";
import { services, additionalInfo } from "../constants";

const Services = () => {
  const darkMode = useSelector((state) => state.darkmode);
  return (
    < >
      <section  className={`py-12 sm:py-16  ${GetBackgroundColor()}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full pb-6">
            <h1
              className={`text-3xl font-bold font-montserrat text-center ${
                darkMode ? "text-slate-800" : "text-white-400"
              } `}
            >
              <span className="text-coral-red">Our</span> Services
            </h1>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white-400 p-4 sm:p-6 rounded-lg shadow-lg shadow-blue-500 flex flex-col items-center text-center"
              >
                <div className="text-coral-red text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Insights Section */}
      <section className={`py-12 sm:py-16 ${GetBackgroundColor()}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full pb-6">
            <h1
              className={`text-3xl font-bold font-montserrat text-center ${
                darkMode ? "text-slate-800" : "text-white-400"
              } `}
            >
              <span className="text-coral-red">Additional</span> Insights
            </h1>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white-400 p-4 sm:p-6 rounded-lg shadow-xl shadow-slate-600 flex flex-col items-center text-center hover:rotate-6 scale-105 duration-300 hover:shadow-blue-500"
              >
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  {info.title}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
