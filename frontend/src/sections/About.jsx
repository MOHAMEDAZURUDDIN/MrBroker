import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../components/utils/Button";
import { useSelector } from "react-redux";

const About = () => {
  const darkMode = useSelector((state) => state.darkmode);
  const controlsText = useAnimation();
  const controlsMap = useAnimation();
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (textInView) {
      controlsText.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    } else {
      controlsText.start({ opacity: 0, x: -50, transition: { duration: 0.8 } });
    }
  }, [textInView, controlsText]);

  useEffect(() => {
    if (mapInView) {
      controlsMap.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    } else {
      controlsMap.start({
        opacity: 0,
        x: -50,
        transition: { duration: 0.8 },
      });
    }
  }, [mapInView, controlsMap]);
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row items-center lg:justify-between px-4 md:px-8 lg:px-24  ${
          darkMode ? "bg-gray-300" : "bg-slate-950"
        } `}
      >
        <motion.div
          ref={textRef}
          className="flex-1 max-w-lg lg:max-w-none w-full text-center lg:text-left lg:pr-8 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsText}
        >
          <div className="flex flex-col items-center lg:items-start justify-center mt-4">
            <h1 className="text-4xl sm:text-3xl font-bold text-gradient">
              WHO WE ARE
            </h1>
            <h2
              className={`text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold  filter drop-shadow-lg mt-4 ${
                darkMode ? "text-slate-800" : "text-white-400"
              } `}
            >
              Your Dream <span className="text-coral-red">Home</span> Awaits
            </h2>
            <p
              className={`text-base md:text-lg lg:text-xl my-4 ${
                darkMode ? "text-slate-900" : "text-gray-400"
              } `}
            >
              Welcome to [Mr. Brokers], where we believe your dream home is more
              than just a place—it's a lifestyle. Whether you’re seeking a
              serene villa, a chic urban apartment, or a sprawling estate, we’ve
              got you covered.
            </p>
            <p
              className={`text-base md:text-lg lg:text-xl my-4 ${
                darkMode ? "text-slate-900" : "text-gray-400"
              } `}
            >
              Our expert team is committed to turning your vision into reality.
              With a curated selection of properties and personalized service,
              we ensure you find a space that reflects your taste and meets your
              needs.
            </p>
            <p
              className={`text-base md:text-lg lg:text-xl my-4 ${
                darkMode ? "text-slate-900" : "text-gray-400"
              } `}
            >
              Let us guide you on this journey to discovering a place where
              comfort, luxury, and functionality come together.
            </p>
            <div className="mt-6 mb-4">
              <Button label="Explore Now!" />
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={mapRef}
          className="flex-1 max-w-xl lg:max-w-lg w-full flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsMap}
        >
          <div className="w-full h-80">
            <iframe
              className="w-full h-full rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5228815463254!2d77.58339657485976!3d13.100644390759394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1980a9bdf5a1%3A0x2a82f7ae5c68b749!2sYelahanka%2C%20Bengaluru%2C%20Karnataka%20560064%2C%20India!5e0!3m2!1sen!2sin!4v1692389422756!5m2!1sen!2sin"
              allowFullScreen=""
              aria-hidden={false}
              tabIndex="0"
              title="Map of Yelahanka, Bengalore ,India"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
