import React, { Component } from "react";
import { connect } from "react-redux";
import { changeHair } from "../../actions/changeHair";
import HairOne from "../../assets/hair_one.png";
import HairTwo from "../../assets/hair_two.png";

export class Hair extends Component {
  changeHair = option => {
    this.props.hair === option
      ? this.props.changeHair("null")
      : this.props.changeHair(option);
  };

  render() {
    return (
      <div className="hair-container select-container">
        <h4 className="choice-title">Cabelos</h4>

        <div
          className="hair-option hair-one option"
          onClick={() => {
            this.changeHair("one");
          }}
        >
          {" "}
          <img
            alt="hair"
            className="hair-option hair-one-option choice"
            src={HairOne}
          />
        </div>
        <div className="hair option" onClick={() => this.changeHair("two")}>
          <img
            alt="hair"
            className="hair-option hair-two-option choice"
            src={HairTwo}
          />
        </div>
        <div className="hair option">Opção 2</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hair: state.hair
  };
};

export default connect(mapStateToProps, { changeHair })(Hair);
