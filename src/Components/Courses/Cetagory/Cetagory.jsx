import React from "react";
import CourseLeftNav from "../CourseLeftNav/CourseLeftNav";
import CetagoryCard from "./CetagoryCard/CetagoryCard";
import "../Courses.css";
import { useLoaderData } from "react-router-dom";

const CetagoryDetails = () => {
  const courseCetagory = useLoaderData();
  return (
    <>
      <section>
        <div className="container mainCourseContainers">
          <div className="courseCetagorySide  min-h-screen bg-slate-300">
            <div className="p-4">
              <CourseLeftNav></CourseLeftNav>
            </div>
          </div>
          <div className="mainCourseSide ">
            <div className="w-full">
              <h1 className="text-2xl font-bold text-center mt-5 mb-5 text-gray-700">
                Our Popular Cetagory
              </h1>
            </div>
            <div className="grid" id="CourseCard1">
              {courseCetagory.map((courseCetagory) => (
                <CetagoryCard
                  key={courseCetagory.id}
                  courseCetagory={courseCetagory}
                ></CetagoryCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CetagoryDetails;
