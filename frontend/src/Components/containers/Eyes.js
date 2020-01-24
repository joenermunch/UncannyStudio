import React, { Component } from "react";
import { connect } from "react-redux";
import { changeEyes } from "../../actions/changeEyes";
import EyesOne from "../../assets/eyes_one.png";
import EyesTwo from "../../assets/eyes_two.png";

export class Eyes extends Component {
  changeEyes = option => {
    !this.props.eyes
      ? this.props.changeEyes(option)
      : this.props.changeEyes("");
  };

  render() {
    return (
      <div className="eyes-container select-container">
        <h4 className="choice-title">Olhos</h4>
        <div
          className="eyes-option eye-one option"
          onClick={e => {
            if (!this.props.eyes) {
              this.changeEyes("one");
            } else this.changeEyes("");
          }}
        >
          <img className="eyes-one choice" alt="eyes" src={EyesOne} />
        </div>
        <div
          className="eyes-option eye-two option"
          onClick={e => {
            if (!this.props.eyes) {
              this.changeEyes("two");
            } else this.changeEyes("");
          }}
        >
          <img className="eyes-two choice" alt="eyes" src={EyesTwo} />
        </div>
        <div className="eyes-option option">Opção 2</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    eyes: state.eyes
  };
};

export default connect(mapStateToProps, { changeEyes })(Eyes);
