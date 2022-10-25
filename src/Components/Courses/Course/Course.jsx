import React from "react";
import { FaClock, FaFileVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const {
    id,
    course_name,
    course_duration,
    total_rating,
    price,
    instructer,
    total_vedio,
    img,
  } = course;
  return (
    <>
      <div
        className="card w-9/12 mx-auto mb-4 mt-2 md:w-10/12 bg-base-100 shadow-xl"
        style={{ blockSize: "30rem", width: "22rem" }}
      >
        <figure>
          <img
            src={img}
            alt={course_name}
            style={{ height: "10rem", width: "100%", objectFit: "cover" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[1rem]">
            {course_name}
            <div className="badge badge-secondary">${price}</div>
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-bold text-[1rem]">
              <FaClock></FaClock> <span>{course_duration}</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-[1rem]">
              <FaFileVideo></FaFileVideo> <span>{total_vedio}</span>
            </div>
          </div>
          <div>
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
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Instructer {instructer}</div>
          </div>
          <div>
            <Link
              className="btn btn-sm mt-2 btn-primary mr-1"
              to={`/courses/${id}`}
            >
              See Details
            </Link>
            <Link className="btn btn-sm mt-2 btn-primary" to="/checkout">
              Purches Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
