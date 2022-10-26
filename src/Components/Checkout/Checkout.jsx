import React from "react";
import { FaCheck, FaClock, FaFileVideo } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { createRef } from "react";
import { FaFilePdf } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
const ref = createRef();

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const checkOutData = useLoaderData();
  const {
    course_name,
    course_duration,
    total_vedio,
    total_rating,
    price,
    instructer,
    instructer_img,
    img,
  } = checkOutData;
  console.log(checkOutData);
  return (
    <>
      <section>
        <div className="header bg-slate-400 p-4">
          <div className="flex justify-between items-center">
            <Link to="/courses" className="btn  btn-sm btn-primary">
              Back Course
            </Link>
            <Link>
              <Pdf targetRef={ref} filename={course_name}>
                {({ toPdf }) => (
                  <button
                    className="btn btn-sm btn-primary flex items-center gap-2"
                    onClick={toPdf}
                  >
                    <FaFilePdf></FaFilePdf> Generate Pdf
                  </button>
                )}
              </Pdf>
            </Link>
          </div>
        </div>
        <div className="userDetailsCheckout flex justify-center items-center mx-auto my-4">
          <div className="stack">
            <div className="card shadow-md bg-primary text-primary-content">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="indicator">
                    <span className="indicator-item badge badge-success mt-2 mr-3"></span>
                    <div
                      className="grid w-20 h-20 bg-base-300 place-items-center"
                      style={{ borderRadius: "50%" }}
                    >
                      <img
                        src={user.photoURL}
                        alt="user"
                        style={{ width: "5rem", borderRadius: "50%" }}
                      />
                    </div>
                  </div>
                  <h2 className="card-title">{user?.displayName}</h2>
                </div>
                <p>{user?.email}</p>
                <h2 className="flex items-center gap-2">
                  <FaCheck></FaCheck> You Are Going To Buy This Course
                </h2>
              </div>
            </div>
            <div className="card shadow bg-primary text-primary-content">
              <div className="card-body"></div>
            </div>
            <div className="card shadow-sm bg-primary text-primary-content">
              <div className="card-body"></div>
            </div>
          </div>
        </div>
        <div
          className="p-4"
          ref={ref}
          style={{ width: "90%", margin: "auto", height: "auto" }}
        >
          {
            <div className="card w-10/12 bg-base-100 shadow-xl mx-auto mt-4">
              <figure>
                <img src={img} alt={course_name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{course_name}</h2>
                <div className="badge badge-secondary">Price : ${price}</div>
                <div className="flex items-center gap-3">
                  <div className="badge badge-secondary">
                    Our Instructer : {instructer}
                  </div>
                  <div>
                    <img
                      src={instructer_img}
                      alt={instructer}
                      style={{ width: "5rem", borderRadius: "50%" }}
                    />
                  </div>
                </div>

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
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
};

export default Checkout;
