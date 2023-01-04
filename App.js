import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";

const Container = () => {
  return (
    <div id="container">
      <Header />
      <h1>Hello World</h1>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<Container />);
