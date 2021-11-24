import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Cakes from "../Cakes/Cakes";
import Footer from "../Footer/Footer";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import Reviews from "../Reviews/Reviews";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Slider></Slider>
      <Cakes></Cakes>
      <Reviews></Reviews>
      <FrequentlyAsked></FrequentlyAsked>
      <Footer></Footer>
    </div>
  );
};

export default Home;
