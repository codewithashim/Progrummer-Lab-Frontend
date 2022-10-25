import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CourseLeftNav = () => {
  const [cetagory, setCetagory] = useState([]);

  useEffect(() => {
    fetch("https://progrummer-lab-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCetagory(data));
  }, []);

  return (
    <>
      <section>
        <div className="container">
          {cetagory.map((cetagory) => {
            return (
              <div>
                <h3 className="p-2 border mb-2  rounded shadow cursor-pointer">
                  <Link to={`/cetagory/${cetagory.id}`}>
                    {cetagory.category}
                  </Link>
                </h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CourseLeftNav;
