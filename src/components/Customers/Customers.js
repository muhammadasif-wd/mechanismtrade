import React from "react";
import "./Customer.css";

import img1 from "../../Assets/img/customers/c1.png";
import img2 from "../../Assets/img/customers/c2.png";
import img3 from "../../Assets/img/customers/c3.png";

import Marquee from "react-fast-marquee";
const Customers = () => {
  return (
    <div className="text-center my-10">
      <h3 className="text-[#00235A] lg:text-[42px] font3 sm:text-[30px] font-semibold">
        Our Customers
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
            <img src={img1} className=" mx-auto im" alt="" />
          </div>
          <div className="image-wrap">
            <img src={img2} className=" mx-auto im" alt="" />
          </div>
          <div className="image-wrap">
            <img src={img3} className=" mx-auto im" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Customers;
