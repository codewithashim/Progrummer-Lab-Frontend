import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <>
      <section>
        <Header></Header>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default MainLayout;
