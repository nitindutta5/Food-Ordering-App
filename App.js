import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./src/utils/components/Header/Header";
import Footer from "./src/utils/components/Footer/Footer";
import RestaurantDetail from "./src/utils/components/Restaurant/RestaurantDetail";
import { lazy } from "react";
import { Suspense } from "react/cjs/react.production.min";
import useOnline from "./src/utils/hooks/useOnline";
import Offline from "./src/utils/components/Common/Offline";
import RestaurantList from "./src/utils/components/Restaurant/RestaurantList";

const About = lazy(()=> import("./src/utils/components/About/About"));

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
