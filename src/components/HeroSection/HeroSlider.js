import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import image
import hero1 from "../../Assets/img/Rectangle 91.png";


// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const HeroSlider = () => {
  return (
    <div className=" w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <img className=" w-full " src={hero1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full " src={hero1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full " src={hero1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
