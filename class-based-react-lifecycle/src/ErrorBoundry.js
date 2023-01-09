import { Component } from "react";

class ErrorBoundry extends Component {

    state = {
        hasError: false,
        message: ''
    }

    static getDerivedStateFromError = (error) => {
        return {hasError: true, message: error.message}
    }

    componentDidCatch = (error, info) => {
        console.log(error, info);
    }

    render() {
        if(this.state.hasError) {
            return <h1>Error: {this.state.message}</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;