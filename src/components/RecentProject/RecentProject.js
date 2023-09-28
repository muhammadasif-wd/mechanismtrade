import React from "react";
import img1 from "../../Assets/img/recentProject/Rectangle 26.png";
import img2 from "../../Assets/img/recentProject/Rectangle 27.png";
import img3 from "../../Assets/img/recentProject/Rectangle 28.png";
import img4 from "../../Assets/img/recentProject/Rectangle 29.png";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const RecentProject = () => {
  const slidesData = [
    {
      id: 1,
      img: `${img1}`,
    },
    {
      id: 2,
      img: `${img2}`,
    },
    {
      id: 3,
      img: `${img3}`,
    },
    {
      id: 4,
      img: `${img4}`,
    },

    {
      id: 5,
      img: `${img1}`,
    },
    {
      id: 6,
      img: `${img2}`,
    },
  ];
  return (
    <div className="text-center my-10">
      <h1 className="text-[#00235A] lg:text-[42px] font3 font-semibold sm:text-[30px]">
        Our Recent Projects
      </h1>
      <p className="text-[#00235a82] text-[14px] font3  mx-10 sm:text-[16px]">
        Our Recent Projects Lorem ipsum dolor sit amet consectetur. Fringilla ac
        massa{" "}
      </p>

      <div className=" lg:gap-x-5 mb-10 ">
        {/* {/  Carousel  /} */}
        <div className="w-[85%] flex justify-center items-center mt-5 mx-auto mb-10 ">
          <Swiper
            breakpoints={{
              // when window width is >= 320px
              320: {
                width: 320,
                slidesPerView: 1,
              },

              // when window width is >= 640px
              640: {
                width: 620,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                width: 1024,
                slidesPerView: 3,
              },
            }}
            id="main"
            navigation={false}
            spaceBetween={0}
            slidesPerView={3}
            slidesPerGroup={1}
            loopFillGroupWithBlank={true}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "20px",
            }}
          >
            {slidesData.map((slide) => (
              <SwiperSlide>
                <div className="w-[410px] h-[293px] ">
                  <div className=" mt-5 mr-10 rounded-xl swipper-text">
                    <img src={slide.img} alt="" className="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
