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
        <div
          className="hair-option option hair-one"
          onClick={() => {
            this.changeHair("one");
          }}
        >
          <img alt="hair" className="hair-item image-option" src={HairOne} />
        </div>

        <div
          className="hair-option option hair-two"
          onClick={() => this.changeHair("two")}
        >
          <img alt="hair" className="hair-item image-option" src={HairTwo} />
        </div>
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
