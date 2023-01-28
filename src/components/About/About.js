import React from "react";
import Profile from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <h1>Hey I am the about page</h1>
          <Profile name="Nitin"/>
      </div>
    );
  }
}

export default About;
