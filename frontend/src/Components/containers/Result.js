import React, { Component } from "react";
import { connect } from "react-redux";
import { changeEyes } from "../../actions/changeEyes";
import EyesOne from "../../assets/result/eyes_one.png";
import HairOne from "../../assets/hair_one.png";
import HairTwo from "../../assets/hair_two.png";

export class Result extends Component {
  renderEyes = () => {
    switch (this.props.eyes) {
      case "one": {
        return (
          <img alt="eye first option" className="result-eyes" src={EyesOne} />
        );
      }

      default:
        return <></>;
    }
  };

  renderHair = () => {
    switch (this.props.hair) {
      case "one": {
        return (
          <img
            alt="hair first option"
            className="result-hair-one result-hair"
            src={HairOne}
          />
        );
      }
      case "two": {
        return (
          <img
            alt="hair first option"
            className="result-hair-two result-hair"
            src={HairTwo}
          />
        );
      }
      default:
        return <></>;
    }
  };

  render() {
    return (
      <div className="result-box">
        <div className="result-main head">
          {this.renderEyes()} {this.renderHair()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    eyes: state.eyes,
    hair: state.hair
  };
};

export default connect(mapStateToProps, { changeEyes })(Result);
