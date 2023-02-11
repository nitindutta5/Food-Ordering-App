import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import {RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { ThemeContextProvider } from "./utils/ThemeContext";
import Router from "./router";

const About = lazy(() => import("./components/About/About"));

const Container = () => {
  return (
    <>
      <ThemeContextProvider>
        <Main/>
      </ThemeContextProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router}><Container/></RouterProvider>);
