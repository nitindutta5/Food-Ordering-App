import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { ThemeContextProvider } from "./utils/ThemeContext";
import Router from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const About = lazy(() => import("./components/About/About"));

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
