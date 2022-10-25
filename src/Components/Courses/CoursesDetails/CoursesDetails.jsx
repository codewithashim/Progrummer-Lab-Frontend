import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import DetailsLeftSideContent from "./DetailsLeftSideContent/DetailsLeftSideContent";
import "./CourseDetails.css";
import DetailsRightSideCard from "./DetailsRightSideCard/DetailsRightSideCard";

const CoursesDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);

  return (
    <>
      <section className="p-6">
        <div className="DetailsHeader bg-slate-300 p-6 ">
          <div className="flex">
            <div>
              <Link to="/courses" className="btn btn-sm btn-primary">
                Back To Main Course
              </Link>
            </div>
          </div>
        </div>

        <div className="DetailsMainContainer">
          <div className="DetailsMainContainerLeft">
            {
              <DetailsLeftSideContent
                key={courseDetails.id}
                details={courseDetails}
              ></DetailsLeftSideContent>
            }
          </div>

          <div className="DetailsMainContainerRight mt-6">
            <div className="border shadow-lg rounded p-4">
              {
                <DetailsRightSideCard
                  key={courseDetails.id}
                  details={courseDetails}
                ></DetailsRightSideCard>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesDetails;
