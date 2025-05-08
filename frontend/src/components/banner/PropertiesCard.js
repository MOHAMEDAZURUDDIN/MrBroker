import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import swd2 from "../../assets/sl2.jpg";
import swd3 from "../../assets/sl3.jpg";
import swd4 from "../../assets/sl4.jpg";
import swd5 from "../../assets/sl5.jpg";
import swd6 from "../../assets/sl6.jpg";
import swd7 from "../../assets/sl7.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";

export default function PropertiesFlex() {
  const darkMode = useSelector((state) => state.darkmode);
  return (
    <div
      id="app"
      className={`h-full flex justify-center items-center relative px-4 overflow-hidden ${
        darkMode ? "bg-gray-300" : "bg-slate-950"
      }`}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-2/4  mt-4  mb-3 rounded pt-12 pb-12"
      >
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
          <img
            src={swd2}
            alt="property1"
            className="block w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
          <img
            src={swd3}
            alt="property2"
            className="block w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
          <img
            src={swd4}
            alt="property3"
            className="block w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
          <img
            src={swd5}
            alt="property4"
            className="block w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
          <img
            src={swd6}
            alt="property5"
            className="block w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]">
          <img
            src={swd7}
            alt="property6"
            className="block w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
