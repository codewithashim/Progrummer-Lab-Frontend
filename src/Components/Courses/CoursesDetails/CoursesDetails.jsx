import { Link, useLoaderData } from "react-router-dom";
import DetailsLeftSideContent from "./DetailsLeftSideContent/DetailsLeftSideContent";
import "./CourseDetails.css";
import DetailsRightSideCard from "./DetailsRightSideCard/DetailsRightSideCard";
import Pdf from "react-to-pdf";
import { createRef } from "react";
import { FaFilePdf } from "react-icons/fa";
const ref = createRef();

const CoursesDetails = () => {
  const courseDetails = useLoaderData();

  return (
    <>
      <section className="p-6">
        <div className="DetailsHeader bg-slate-300 p-6 ">
          <div className="flex justify-between items-center gap-2 px-4">
            <div>
              <Link to="/courses" className="btn btn-sm btn-primary">
                Back Course
              </Link>
            </div>
            <div>
              <Pdf targetRef={ref} filename={courseDetails.course_name}>
                {({ toPdf }) => (
                  <button
                    className="btn btn-sm btn-primary flex items-center gap-1"
                    onClick={toPdf}
                    style={{ fontSize: "10px" }}
                  >
                    <FaFilePdf style={{ fontSize: "12px" }}></FaFilePdf>{" "}
                    Generate Pdf
                  </button>
                )}
              </Pdf>
            </div>
          </div>
        </div>

        <div className="DetailsMainContainer" ref={ref}>
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
