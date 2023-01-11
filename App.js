import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RestaurantList from "./components/Restaurant/RestaurantList";
import "./global.css"

const Container = () => {
  return (
    <>
      <Header />
      <RestaurantList/>
      <Footer />
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(<Container />);
