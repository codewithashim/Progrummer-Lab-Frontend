import React from "react";
import NotFoundPic from "../../Assects/NotFound.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="notFoundSection">
      <div>
        <h1 className="p-4 text-5xl font-bold">404 Not Found Data</h1>
      </div>
      <img src={NotFoundPic} alt="Not Found" />
    </section>
  );
};

export default NotFound;
