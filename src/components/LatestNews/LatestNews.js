import React from "react";
import img1 from "../../Assets/img/latestNews/Rectangle 22.png";
import img2 from "../../Assets/img/latestNews/Rectangle 22 (1).png";


import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AnotherSlider from "./AnotherSlider";
import { Icon } from "@iconify/react";

const LatestNews = () => {
  const slidesData = [
    {
      id: 1,
      date: "21 Dec, 2023",
      title: "Lorem ipsum dolor sit amet consectetur. Fringilla",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla Lorem ipsum dolor sit amet consectetur. FringillaLorem ipsum dolor sit amet consectetur. ",
      img: `${img1}`,
    },
    {
      id: 2,
      date: "21 Dec, 2023",
      title: "Lorem ipsum dolor sit amet consectetur. Fringilla",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla Lorem ipsum dolor sit amet consectetur. FringillaLorem ipsum dolor sit amet consectetur. ",
      img: `${img2}`,
    },
    {
      id: 3,
      date: "21 Dec, 2023",
      title: "Lorem ipsum dolor sit amet consectetur. Fringilla",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla Lorem ipsum dolor sit amet consectetur. FringillaLorem ipsum dolor sit amet consectetur. ",
      img: `${img1}`,
    },
    {
      id: 4,
      date: "21 Dec, 2023",
      title: "Lorem ipsum dolor sit amet consectetur. Fringilla",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fringilla Lorem ipsum dolor sit amet consectetur. FringillaLorem ipsum dolor sit amet consectetur. ",
      img: `${img2}`,
    },
  ];
  return (
    <div>
      <div className="text-center my-10 ">
        <h1 className="text-[#00235A] lg:text-[42px] font3 sm:text-[30px] font-semibold">
          Our Latest News
        </h1>
        <p className="text-[#00235a82] lg:text-[20px] font3 mx-10 sm:text-[16px]">
          Our Products Lorem ipsum dolor sit amet consectetur
        </p>

        <div className=" lg:gap-x-5 mb-10 mt-10 ">
          {/* {/  Carousel  /} */}
          <div className="w-[85%] flex justify-center items-center mt-5 mx-auto mb-10  ">
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
                  slidesPerView: 2,
                },
              }}
              id="main"
              navigation={false}
              spaceBetween={0}
              slidesPerView={2}
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
                  <div className=" flex ">
                    <div className="  rounded-xl swipper-text w-1/2">
                      <img src={slide.img} alt="" className="" />
                    </div>

                    <div className="text-start w-1/2 justify-center items-center ml-5 mx-5">
                      <div className="flex mb-1 lg:mt-2">
                        <Icon
                          icon="ic:outline-watch-later"
                          className="text-[#FF5E14] mr-1 "
                        />
                        <h5 className="text-[#FF5E14]  text-[12px]  ">
                          {slide.date}
                        </h5>
                      </div>

                      <h1 className="text-[#00235A] text-[16px] mb-2">
                        {slide.title}
                      </h1>
                      <h1 className="text-[#00235ac5] text-[10px] mb-2">
                        {slide.description}
                      </h1>

                      <button className="text-[10px] bg-[#FF5E14] px-3 py-1 rounded text-white mt-1">
                        See More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* // AnotherSlider  */}

      <AnotherSlider></AnotherSlider>
    </div>
  );
};

export default LatestNews;
