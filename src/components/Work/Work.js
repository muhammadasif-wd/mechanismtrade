import React from "react";
import workImg from "../../Assets/img/Group 59.png";
import line from "../../Assets/img/Line 5.png";
import arrow from "../../Assets/img/Arrow 3.png";
const Work = () => {
  return (
    <div className="w-3/4 mx-auto mt-20 md:mt-40">
      <div className="flex gap-5 xl:gap-20 items-center flex-wrap md:flex-nowrap">
        <img className=" w-2/3 mx-auto md:w-1/2" src={workImg} alt="" />
        <div className="relative">
          <img
            className="absolute top-28 lg:top-36 xl:top-[160px] left-2"
            src={line}
            alt=""
          />
          <img
            className="absolute top-[165px] lg:top-[197px] xl:top-[212px] left-2"
            src={arrow}
            alt=""
          />
          <h1 className=" text-2xl lg:text-4xl font-semibold text-navy ">
            How We Work
          </h1>
          <p className=" text-gray text-xs lg:text-sm xl:text-lg font-[500] mt-2 lg:mt-7">
            Lorem ipsum dolor sit amet consectetur. Fringilla ac massa justo
            diam cursus lacinia. Malesuada enim cursus volutpat{" "}
          </p>
          <p className="text-lightGray text-xs lg:text-sm xl:text-lg pl-20 mt-2 lg:mt-5">
            Lorem ipsum dolor sit amet consectetur. Fringilla ac massa justo
            diam cursus lacinia. Lorem ipsum dolor sit amet consectetur.
            Fringilla ac massa justo lacinia lacinia. lacinia. lacinia. . .{" "}
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Fringilla ac massa justo
            diam cursus lacinia. Lorem ipsum
          </p>
          <button className="ml-20 text-danger text-xs lg:text-sm xl:text-lg mt-5 border-b ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
