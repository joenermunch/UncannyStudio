import React, { Component } from "react";
import Sketch from "./Sketch";
import Footer from "./Footer";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo-box">
            <h1 className="title">
              uncanny <span>studio</span>
            </h1>
          </div>
          <button className="save-button">Salvar</button>
        </header>
        <Sketch />
      </div>
    );
  }
}

export default connect(null)(Home);
