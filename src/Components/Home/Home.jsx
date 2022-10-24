import React from "react";
import Hero from "../Hero/Hero";
import OurCetagory from "./OurCetagory/OurCetagory";

const Home = () => {
  return (
    <>
      <section>
        <Hero></Hero>
        <div>
          <OurCetagory></OurCetagory>
        </div>
      </section>
    </>
  );
};

export default Home;
