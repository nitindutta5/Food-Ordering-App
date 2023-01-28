import React from "react";

class Profile extends React.Component{
    constructor(props){
        console.log("constructor")
        super(props);
        this.state = {
            description:"I am a developer"
        }
    }
    componentDidMount(){
        console.log("didMount")
        this.setState((state) => state.description = "I am doctor")
    }
    render(){
        console.log("render")
        return(
            <>
            <h1>Hey I am {this.props.name}.</h1>
            <h2>{this.state.description}</h2>
            </>
        )
    }
}

export default Profile