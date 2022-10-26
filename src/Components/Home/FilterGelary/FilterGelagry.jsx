import React, { useEffect, useState } from "react";
import FilterCetagory from "./FilterCetagory/FilterCetagory";
import AllItems from "./AllItems/AllItems";
import "./FilterGelary.css";

const FilterGelagry = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://progrummer-lab-server.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <section>
        <div className="filterCetagory">
          <FilterCetagory></FilterCetagory>
        </div>
        <div className="itemsList" id="filterItemsList">
          {items.map((item) => {
            return <AllItems key={item.id} item={item}></AllItems>;
          })}
        </div>
      </section>
    </>
  );
};

export default FilterGelagry;
