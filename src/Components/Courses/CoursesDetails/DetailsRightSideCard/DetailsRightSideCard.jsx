import React from "react";
import { Link } from "react-router-dom";

const DetailsRightSideCard = ({ details }) => {
  const { course_name, price, instructer, img } = details;
  return (
    <>
      <div
        className="card bg-base-100 shadow-xl"
        style={{ width: "100%", marginTop: "2%" }}
      >
        <figure>
          <img src={img} alt={course_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <div className="badge badge-accent font-bold">
            Course Fee: ${price}
          </div>
          <p className="card-subtitle">Instructer: {instructer}</p>
          <div className="card-actions justify-end">
            <Link to="/checkout" className="btn btn-primary">
              Purches Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsRightSideCard;
