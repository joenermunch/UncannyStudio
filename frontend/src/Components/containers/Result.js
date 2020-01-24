import React, { Component } from "react";

export class Result extends Component {
  render() {
    return (
      <div className="result-box">
        <div className="result-main head">
          <div className="result hair"></div>
          <div className="result eyes"></div>
          <div className="result nose"></div>
          <div className="result mouth"></div>
        </div>

        <button className="save-button">Salvar</button>
      </div>
    );
  }
}

export default Result;
