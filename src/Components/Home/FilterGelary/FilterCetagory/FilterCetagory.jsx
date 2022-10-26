import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FilterCetagory = () => {
  const [cetagory, setCetagory] = useState([]);

  useEffect(() => {
    fetch("https://progrummer-lab-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCetagory(data));
  }, []);

  return (
    <>
      <section className="mt-4">
        <div className="container md:flex justify-center items-center gap-2">
          {cetagory.map((cetagory) => {
            return (
              <div className="flex items-center justify-center">
                <h3 className="p-2 border mb-2  rounded shadow cursor-pointer flex">
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

export default FilterCetagory;
