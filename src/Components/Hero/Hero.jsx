import React from "react";
import "./Hero.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="heroSection min-h-screen">
        <div className="grid items-center place-content-center pt-28">
          <h1 className="text-blue-600 text-[3.8rem] font-bold">
            Let’s Started
          </h1>
          <h2 className="text-4xl mt-4 text-white font-semibold">
            Learning Skills & Upgrade Your Life
          </h2>
          <div className="mt-8 flex items-center gap-3">
            <h3 className="text-blue-50 flex gap-2 items-center text-[1.2rem] font-semibold">
              <FaRegCheckCircle className="text-blue-500"></FaRegCheckCircle>{" "}
              Experts Advisors
            </h3>
            <h3 className="text-blue-50 flex gap-2 items-center text-[1.2rem] font-semibold">
              <FaRegCheckCircle className="text-blue-500"></FaRegCheckCircle>{" "}
              538+ Courses
            </h3>
            <h3 className="text-blue-50 flex gap-2 items-center text-[1.2rem]">
              <FaRegCheckCircle className="text-blue-500"></FaRegCheckCircle>{" "}
              Events & Program
            </h3>
          </div>
          <div className="mt-6 flex gap-5 items-center justify-center">
            <Link className="btn btn-primary font-bold">Get Start</Link>
            <Link className="btn btn-outline btn-primary font-bold">Our Course</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
