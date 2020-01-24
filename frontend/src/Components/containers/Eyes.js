import React, { Component } from "react";

export class Eyes extends Component {
  render() {
    return (
      <div className="eyes-container select-container">
        <h4 className="choice-title">Olhos</h4>
        <div
          className="eyes-option eye-one option"
          onClick={this.changeEyesTwo}
        >
          Opção 1
        </div>
        <div onClick={this.changeEyes} className="eyes-option eye-two option">
          Opção 2
        </div>
        <div className="eyes-option option">Opção 2</div>
      </div>
    );
  }
}

export default Eyes;
