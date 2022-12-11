import React from "react";
import Banner from "../Banner";
import { HomeBanner } from "../Banner/Banner.config";
import TwoCols from "../Sections/TwoCols";
import homeTwoCols from "./home.config";

const Home = () => {
  return (
    <>
      <Banner banner={HomeBanner} />
      <TwoCols twocols={homeTwoCols} />
    </>
  );
};

export default Home;
