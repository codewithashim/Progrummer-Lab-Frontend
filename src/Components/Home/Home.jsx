import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import OurCetagory from "./OurCetagory/OurCetagory";

import FilterGelagry from "./FilterGelary/FilterGelagry";

const Home = () => {
  const courseCetagoty = useLoaderData();

  return (
    <>
      <section>
        <Hero></Hero>
        <div className="ourCetagory px-6 mt-8">
          <div className="cetagoryTitle">
            <h3 className="text-blue-600 font-bold md:text-[1.5rem] mb-2">
              OUR COURSE CATEGORIES
            </h3>
            <h2 className="text-black font-bold md:text-[2.3rem]">
              Explore Top Categories
            </h2>
          </div>
          <div className="ourCetagoryContainer grid md:grid-cols-3">
            {courseCetagoty.map((cetagory) => {
              return (
                <OurCetagory
                  key={cetagory.id}
                  cetagory={cetagory}
                ></OurCetagory>
              );
            })}
          </div>
          <div className="ourFilterGelary">
            <div>
              <h2 className="py-3 text-blue-600 font-bold text-2xl text-center">
                Our Popular Courses{" "}
              </h2>
            </div>
            <FilterGelagry></FilterGelagry>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
