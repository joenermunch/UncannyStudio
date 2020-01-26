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
            <h1 className="title">Uncanny Studio</h1>
          </div>
        </header>
        <Sketch />
        <Footer />
      </div>
    );
  }
}

export default connect(null)(Home);
