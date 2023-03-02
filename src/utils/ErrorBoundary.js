import React from "react";


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {error:null, errorInfo:null };
    }

    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }   
  
    render() {
      if (this.state.error) {
        // You can render any custom fallback UI
        return <h1>Looks like something went wrong.{this.state.errorInfo}</h1>;
      }
  
      return this.props.children; 
    }
  }
export default ErrorBoundary  