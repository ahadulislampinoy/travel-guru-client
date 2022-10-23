import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

const Root = () => {
  const location = useLocation();
  return (
    <div>
      <div className={location.pathname === "/" ? "hidden" : "block"}>
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
