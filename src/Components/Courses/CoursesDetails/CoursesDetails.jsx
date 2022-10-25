import React from "react";
import { useLoaderData } from "react-router-dom";
import DetailsLeftSideContent from "./DetailsLeftSideContent/DetailsLeftSideContent";
import "./CourseDetails.css";
import DetailsRightSideCard from "./DetailsRightSideCard/DetailsRightSideCard";

const CoursesDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);

  return (
    <>
      <section className="p-6">
        <div className="DetailsHeader"></div>

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
