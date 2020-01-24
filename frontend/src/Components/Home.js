import React, { Component } from "react";
import Sketch from "./Sketch";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    return (
      <div>
        <h2>Uncanny Studio</h2>
        <Sketch />
      </div>
    );
  }
}

export default connect(null)(Home);
