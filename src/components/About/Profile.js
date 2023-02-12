import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "I am a developer",
    };
  }
  componentDidMount() {
    this.setState((state) => (state.description = "I am frontend developer."));
  }
  render() {
    return (
      <>
        <h1>Hey I am {this.props.name}.</h1>
        <h2>{this.state.description}</h2>
      </>
    );
  }
}

export default Profile;
