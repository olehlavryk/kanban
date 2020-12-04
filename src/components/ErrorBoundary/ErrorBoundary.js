import React, { Component } from "react";
import { Button, PanelHeader, Div } from "@vkontakte/vkui";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      stack: null,
      message: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, stack: error.stack, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <PanelHeader>Sorry Error!</PanelHeader>
          <Div>
            <div>Whoops, some error happend!</div>
            <Button onClick={() => window.location.reload()}>
              Please, reload page
            </Button>
          </Div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
