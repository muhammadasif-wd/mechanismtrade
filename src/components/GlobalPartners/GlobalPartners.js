import React from "react";

import "./GlobalPartners.css";

import img1 from "../../Assets/img/globalPartners/gb1 (1).png";
import img2 from "../../Assets/img/globalPartners/gb1 (2).png";
import img3 from "../../Assets/img/globalPartners/gb1 (3).png";
import img4 from "../../Assets/img/globalPartners/gb1 (4).png";

// import Marquee from 'react-fast-marquee';
import Marquee from "react-fast-marquee";

const GlobalPartners = () => {
  return (
    <div className="text-center my-10">
      <h3 className="text-[#00235A] lg:text-[42px] font3 sm:text-[30px] mt-16 font-semibold">
        Our Global Partners
      </h3>

      <div className="w-[85%] mx-auto mt-10">
        <Marquee>
          <div className="image-wrap ">
            <img src={img1} className="mx-auto  im" alt="" />
          </div>
          <div className="image-wrap">
            <img src={img2} className=" mx-auto im" alt="" />
          </div>
          <div className="image-wrap">
            <img src={img3} className=" mx-auto im" alt="" />
          </div>
          <div className="image-wrap">
            <img src={img4} className=" mx-auto im" alt="" />
          </div>
          <div className="image-wrap">
            <img src={img1} className=" mx-auto im" alt="" />
          </div>
          <div className="image-wrap">
            <img src={img2} className=" mx-auto im" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default GlobalPartners;
