import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseLeftNav from "./CourseLeftNav/CourseLeftNav";

const Courses = () => {
  const course = useLoaderData()

  return (
    <>
      <section>
        <div className="container mx-auto grid md:grid-cols-2">
          <div className="courseCetagorySide md:w-2/5 min-h-screen bg-slate-300">
            <div className="p-4">
              <CourseLeftNav></CourseLeftNav>
            </div>
          </div>
          <div className="mainCourseSide md:w-7/12">
            <div className="courseMainContainer">
              {
                course.map(course => {
                  return(
                    
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
