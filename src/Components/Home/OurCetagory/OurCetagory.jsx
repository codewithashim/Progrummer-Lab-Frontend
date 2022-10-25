import React from "react";
import { Link } from "react-router-dom";
import "./OurCetagory.css";

const OurCetagory = ({ cetagory }) => {
  const { category, img, details, id } = cetagory;
  return (
    <>
      <section>
        <div className="container p-4 mx-auto">
          <div className="cetagoryContainer">
            <div className="card card-side bg-base-100 shadow-xl  p-4">
              <figure className="">
                <img src={img} alt={cetagory} style={{ inlineSize: "4rem" }} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{details.slice(0, 80)}</p>
                <div className="card-actions justify-end">
                  <Link className="btn btn-link" to={`/cetagory/${id}`}>
                    LEARN MORE{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCetagory;
