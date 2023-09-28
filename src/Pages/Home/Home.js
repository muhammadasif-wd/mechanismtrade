import React from "react";
// import Customers from "../../Components/Customers/Customers";
// import HeroSection from "../../Components/HeroSection/HeroSection";
// import Work from "../../Components/Work/Work";
// import LatestNews from "../../Components/LatestNews/LatestNews";
// import Products from "./../../Components/Products/Products";
// import RecentProject from "./../../Components/RecentProject/RecentProject";
// import GlobalPartners from "../../Components/GlobalPartners/GlobalPartners";
import HeroSection from './../../components/HeroSection/HeroSection';
import Work from './../../components/Work/Work';
import Products from './../../components/Products/Products';
import RecentProject from './../../components/RecentProject/RecentProject';
import Customers from './../../components/Customers/Customers';
import LatestNews from './../../components/LatestNews/LatestNews';
import GlobalPartners from './../../components/GlobalPartners/GlobalPartners';
import OurCommunity from "../../components/OurCommunity/OurCommunity";
import Testimonials from "../../components/Testimonials/Testimonials";

//initializing sumaiya branch
const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Work></Work>
      <Products></Products>
      <RecentProject></RecentProject>
      <Customers></Customers>
      <LatestNews></LatestNews>
      <OurCommunity></OurCommunity>
      <GlobalPartners></GlobalPartners>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
