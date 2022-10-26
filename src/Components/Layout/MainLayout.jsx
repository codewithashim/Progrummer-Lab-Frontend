import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <>
      <section>
        <Header></Header>
        <Outlet></Outlet>
        <section>
          <Footer></Footer>
        </section>
      </section>
    </>
  );
};

export default MainLayout;
