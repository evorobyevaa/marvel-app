import { Component } from "react";
import ErrorMsg from "../errorMsg/ErrorMsg";


class ErrorBoundary extends Component {
  state = {
    error: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error) {
      return <h2><ErrorMsg/></h2>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;