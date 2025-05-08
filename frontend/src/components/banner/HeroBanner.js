import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

const HeroBanner = () => {

    const settings = {
      Infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div
        className={`w-auto bg-gray-400 px-4 mt-2`}
      >
        <Slider {...settings}>
          <Link to="/shop">
            <div>
              <img src="/images/banner/bnr1.png" alt="Banner 1" />
            </div>
          </Link>
          <Link to="/shop">
            <div>
              <img src="/images/banner/bnr2.png" alt="Banner 2" />
            </div>
          </Link>
          <Link to="/shop">
            <div>
              <img src="/images/banner/bnr3.png" alt="Banner 3" />
            </div>
          </Link>
          <Link to="/shop">
            <div>
              <img src="/images/banner/bnr4.jpg" alt="Banner 3" />
            </div>
          </Link>
        </Slider>
      </div>
    );
};

export default HeroBanner;
