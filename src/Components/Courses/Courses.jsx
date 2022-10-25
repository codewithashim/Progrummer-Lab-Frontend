import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course/Course";
import CourseLeftNav from "./CourseLeftNav/CourseLeftNav";
import "./Courses.css";

const Courses = () => {
  const course = useLoaderData();

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
            <div>
              <h1 className="text-2xl font-bold text-center p-4 text-gray-700">
                Our Popular Courses
              </h1>
            </div>
            <div className="grid" id="CourseCard">
              {course.map((course) => {
                return <Course key={course.id} course={course}></Course>;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
