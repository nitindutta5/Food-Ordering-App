import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { ThemeContextProvider } from "./src/utils/ThemeContext";
import Router from "./src/router";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const About = lazy(() => import("./src/components/About/About"));

const Container = (props) => {
  return (
    <>
      <Provider store={store}>
      <ThemeContextProvider>
       {props.children}
      </ThemeContextProvider>
      </Provider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container><RouterProvider router={Router}/></Container>);
