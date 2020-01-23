import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { testAction } from "../actions/testAction";
import { connect } from "react-redux";

import Home from "./Home";

class App extends Component {
  state = {
    test: null
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            this.props.testAction(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default connect(null, {
  testAction
})(App);
