import React, { Component } from "react";

export class Hair extends Component {
  render() {
    return (
      <div className="hair-container select-container">
        <h4 className="choice-title">Cabelos</h4>
        <div className="hair option">Opção 1</div>
        <div className="hair option">Opção 2</div>
        <div className="hair option">Opção 2</div>
      </div>
    );
  }
}

export default Hair;
