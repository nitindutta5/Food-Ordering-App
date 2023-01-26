import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Main from "./Layout/Main";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RestaurantDetail from "./components/Restaurant/RestaurantDetail";
import { lazy } from "react";
import { Suspense } from "react/cjs/react.production.min";

const About = lazy(()=> import("./components/About/About"));
const Container = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/about",
        element: <Suspense fallback={<div>Laoding...</div>}> <About/></Suspense>,
      },
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router}/>);
