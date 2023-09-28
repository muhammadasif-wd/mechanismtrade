import React from "react";
import img1 from "../../Assets/img/testimonials/Ellipse 4 (1).png";
import img2 from "../../Assets/img/testimonials/Ellipse 4.png";
import img3 from "../../Assets/img/testimonials/Ellipse 4 (2).png";


import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  const slidesData = [
    {
      id: 1,
      name: "Naimur Rahman",
      img: `${img1}`,
    },
    {
      id: 2,
      name: "Faisal Ahamed",
      img: `${img2}`,
    },
    {
      id: 3,
      name: "Tamim Hosssain",
      img: `${img3}`,
    },
    {
      id: 4,
      name: "Naimur Rahman",
      img: `${img1}`,
    },

    {
      id: 5,
      name: "Faisal Ahamed",
      img: `${img2}`,

    },
    {
      id: 6,
      name: "Tamim Hosssain",
      img: `${img3}`,
    },
  ];
  return (
    <div className="text-center my-16">
      <h1 className="text-[#00235A] lg:text-[42px] font3 sm:text-[30px] font-semibold ">
        Testimonials
      </h1>



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
            spaceBetween={30}
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
                <div className="w-[410px] h-[293px]">
                  <div className=" pt-5 lg:pb-8 md:pb-6 pb-8 px-4 bg-[#FF5E14]  swipper-text rounded-md">
                    <p className="text-white text-xs font-thin ">“Lorem ipsum dolor sit amet consectetur. Fringilla Lorem ipsum dolor sit amet consectetur. FringillaLorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur.“</p>
                  </div>
                  <div className="text-center ">
                    <div className="w-[50px] h-[50px] mx-auto text-center  absolute bottom-[135px] left-[43%]  ">
                      <img src={slide.img} alt="" className="text-center" />
                    </div>

                  </div>
                  <p className="mt-10  text-[#00235A] text-[20px]">{slide.name} </p>
                  <p className="text-sm text-[#FF5E14]">Graphics Designer</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
