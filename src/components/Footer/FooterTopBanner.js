import React from "react";
import banner from "../../Assets/img/footer/footer.png";
import bgFooter from "../../Assets/img/footer/bgFooter.png";

const FooterTopBanner = () => {
  return (
    <div className="grid lg:grid-cols-3 w-full h-48">
      <div
        className="bg-[#FF5E14] text-white px-4 md:px-20 py-10 col-span-2"
        style={{ backgroundImage: `url(${bgFooter})` }}
      >
        <div>
          <h3 className="text-2xl font-bold">Great Company </h3>
          <p className="w-full lg:w-3/5">
            If you have any construction and renovation work need, simply call
            our 24 hour emergecny number.
          </p>
          <div className="flex flex-col md:flex-row md:items-center mt-2">
            <p className="text-[#232323] font-medium">+8801790763887</p>
            <span className="mx-2"> Or</span>
            <button className=" hidden lg:block px-2 text-[#232323]  border border-[#232323] font-medium">
              Contact
            </button>
            <button className="w-1/3 sm:w-1/6 mt-1 block lg:hidden text-[#232323]  border border-[#232323] font-medium">
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block h-full bg-[#FF5E14]">
        <img
          src={banner}
          alt=""
          className=" h-full w-full "
          style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 40% 100%)` }}
        />
      </div>
    </div>
  );
};

export default FooterTopBanner;
