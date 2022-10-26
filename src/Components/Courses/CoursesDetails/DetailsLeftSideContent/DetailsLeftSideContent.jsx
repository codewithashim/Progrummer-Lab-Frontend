import React from "react";
import { FaClock, FaFileVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const DetailsLeftSideContent = ({ details }) => {
  const {
    id,
    course_name,
    course_duration,
    total_rating,
    price,
    instructer,
    total_vedio,
    course_outline,
    img,
    instructer_img,
  } = details;
  return (
    <>
      <section className="p-4" style={{ width: "90%", marginTop: "2%" }}>
        <div className="border shadow-lg rounded p-4">
          <div className="courseProfile">
            <img src={img} alt={course_name} style={{ width: "100%" }} />
          </div>
          <div className="courseDetails mt-4">
            <h1 className="text-2xl font-bold">{course_name}</h1>
            <div className="flex items-center gap-4 py-4">
              <div>
                <img
                  src={instructer_img}
                  alt={instructer}
                  style={{ width: "4rem", borderRadius: "50%" }}
                />
              </div>
              <h2 className="font-bold">
                <span className="text-blue-500">Instructor:</span> {instructer}
              </h2>
              <h2>
                <span>Price :${price}</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-bold text-[1rem]">
                <FaClock></FaClock> <span>{course_duration}</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-[1rem]">
                <FaFileVideo></FaFileVideo> <span>{total_vedio}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              {total_rating}
            </div>
          </div>
        </div>
        <div className="grid h-20 mt-3 card bg-base-300 rounded-box place-items-center">
          <Link className="btn btn-primary" to={`/checkout/${id}`}>
            Purcehes Now
          </Link>
        </div>
        <div className="ourCourseOutLine">
          <div className="mt-3 border p-4 rounded">
            <h3 className="font-bold text-blue-600 my-4">Our Course Outline</h3>
            <div className="divider"></div>
            {course_outline.map((outline, index) => {
              return (
                <div className="" key={index}>
                  <p>{outline}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsLeftSideContent;
