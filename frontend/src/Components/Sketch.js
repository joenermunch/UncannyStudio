import React, { Component } from "react";
import { connect } from "react-redux";
import Hair from "./containers/Hair";
import Eyes from "./containers/Eyes";
import Nose from "./containers/Nose";
import Mouth from "./containers/Mouth";
import Result from "./containers/Result";

export class Sketch extends Component {
  state = {
    head: null,
    hair: null,
    eyes: null,
    mouth: null,
    nose: null
  };

  render() {
    return (
      <div className="sketch-container">
        <h3 className="sketch-title">Sketch</h3>

        <div className="choices-container">
          <Hair />
          <Eyes />
          <Nose />
          <Mouth />
        </div>
        <div className="result-container">
          <Result />
        </div>
      </div>
    );
  }
}

export default connect()(Sketch);
