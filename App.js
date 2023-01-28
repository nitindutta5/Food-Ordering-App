import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";
import RestaurantDetail from "./src/components/Restaurant/RestaurantDetail";
import { lazy } from "react";
import { Suspense } from "react/cjs/react.production.min";
import useOnline from "./src/hooks/useOnline";
import Offline from "./src/components/Common/Offline";
import RestaurantList from "./src/components/Restaurant/RestaurantList";

const About = lazy(()=> import("./src/components/About/About"));

const Container = () => {
  const isOnline =  useOnline();
  if(!isOnline){
    return <Offline/>
  }
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
        element: <RestaurantList/>,
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
