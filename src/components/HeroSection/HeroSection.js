import React from "react";
import "./HeroSection.css";
import bg from "../../Assets/img/Group 56.png";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <div className=" w-10/12 md:w-3/4 grid grid-cols-10   mx-auto items-center mt-20 md:mt-[150px]">
      <div className=" col-span-4 h-full">
        <div className="  h-full flex flex-col justify-center md:pt-16 lg:pt-20 xl:pt-36">
          {" "}
          <div className=" mt-5 md:mt-0">
            <h1 className="hero-text text-darkGray text-[16px] sm:text-xl md:text-4xl xl:text-5xl font-bold ">
              Making <span className="text-white"> Dream </span>
              <br /> Comes Real
            </h1>
            <p className=" sm:my-2 md:my-5 xl:my-7 text-[#262585] text-[9px] md:text-sm xl:text-lg">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="w-[80px] md:w-[100px] lg:w-[150px] xl:w-[180px] bg-danger -skew-x-12 text-white text-center">
              <button className="text-[9px] lg:text-sm skew-x-12 lg:py-2">
                Explore More
              </button>
            </div>
          </div>
          <div className="flex justify-end sm:pr-5 h-full md:mb-5 lg:mb-0 ">
            <div className=" items-end flex">
              <svg
                className="text-[#D9D9D9] text-xs md:text-4xl xl:text-6xl"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 16l1.4-1.4l-1.6-1.6H16v-2h-4.2l1.6-1.6L12 8l-4 4Zm0 6q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"
                />
              </svg>
              <svg
                className="text-[#D9D9D963] text-xs md:text-4xl xl:text-6xl"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6Zm0 6q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-6 relative ">
        <img
          className=" absolute -top-3 -left-3 md:-top-10 md:-left-7 w-[50px] md:w-[100px]"
          src={bg}
          alt=""
        />
        <img
          className="absolute -bottom-3 -right-3  md:-bottom-10 md:-right-10 w-[50px] md:w-[100px]"
          src={bg}
          alt=""
        />
        <HeroSlider></HeroSlider>
        <div className="">
          <div className="flex items-end absolute left-5 md:left-10 lg:left-28 -bottom-5 sm:-bottom-7 md:-bottom-9 xl:-bottom-14  z-10 ">
            <h1 className=" hero-text text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold">
              21
            </h1>
            <p className="font-semibold text-[7px] sm:text-[9px] md:text-xs xl:text-sm xl:mb-3">
              Years <br />{" "}
              <span className="text-7px sm:text-[9px] xl:text-lg font-bold">
                Experience
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
