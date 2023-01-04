import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      className: "hell",
    },
    "Heading 1"
  );
  
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "Heading 2"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
      dev:"nitin"
    },
    [heading, heading2]
  );
  
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //passing a react element inside the root
  
  //async defer
  root.render(container);