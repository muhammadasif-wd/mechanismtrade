import React from "react";
import img1 from "../../Assets/img/products/p4 (1).png";
import img2 from "../../Assets/img/products/p4 (2).png";
import img3 from "../../Assets/img/products/p4 (3).png";
import { Icon } from "@iconify/react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Products.css";

const ProductSlider2 = () => {
  const slidesData = [
    {
      id: 1,
      title: "Air Compressor",
      img: `${img1}`,
    },
    {
      id: 2,
      title: "Air Blower",
      img: `${img2}`,
    },
    {
      id: 3,
      title: "Water Treatment Plant",
      img: `${img3}`,
    },
    {
      id: 4,
      title: "Air Compressor",
      img: `${img1}`,
    },

    {
      id: 5,
      title: "Air Blower",
      img: `${img2}`,
    },
    {
      id: 6,
      title: "Water Treatment Plant",
      img: `${img3}`,
    },
  ];
  return (
    <div className="">
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
              reverseDirection: true,
            }}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "20px",
            }}
          >
            {slidesData.map((slide) => (
              <SwiperSlide>
                <div className="w-[410px] h-[365px]  ">
                  <div className=" mt-5 mr-10 rounded-xl swipper-text ">
                    <img
                      src={slide.img}
                      alt=""
                      className="w-[410px] h-[293px]"
                    />
                  </div>
                  <div className=" text-start lg:bottom-[19.50%] slidertitile lg:w-[302px] w-[280px] bottom-[24.50%] md:w-[344px] md:bottom-[8.40%]">
                    <div className="flex pt-2  justify-between items-start ">
                      <p className=" text-md font-semibold w-3/4 text-[#FFFFFF] ml-2">
                        {slide.title}
                      </p>

                      <div className="flex w-1/2 text-[#FFB800]">
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                        <Icon icon="material-symbols:star" />
                      </div>
                    </div>
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

export default ProductSlider2;
