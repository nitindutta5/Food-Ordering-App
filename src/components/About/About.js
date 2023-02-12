import React from "react";
import Profile from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
          <Profile name="Nitin"/>
      </div>
    );
  }
}

export default About;
