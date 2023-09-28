import React from "react";
import ProductSlider1 from "./ProductSlider1";
import ProductSlider2 from "./ProductSlider2";

const Products = () => {
  return (
    <div className="text-center my-14">
      <h3 className="text-[#00235A] lg:text-[42px] font-semibold  font3 sm:text-[30px]">
        Our Products
      </h3>
      <p className="text-[#00235a82] text-[14px] lg:text-[20px] font3 mx-10 sm:text-[16px]">
        Our Products Lorem ipsum dolor sit amet consec tetur. Fringilla <br />{" "}
        bac massa justo diam cursus lacinia. Malesuada enim See More
      </p>

      <ProductSlider1></ProductSlider1>
      <ProductSlider2></ProductSlider2>

      <button className="text-sm border-2  px-5 py-3 rounded text-[#FF5E14] hover:bg-[#FF5E14] hover:text-white font-semibold">
        See More
      </button>
    </div>
  );
};

export default Products;
