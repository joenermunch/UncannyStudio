import React, { Component } from "react";
import { connect } from "react-redux";
import { changeEyes } from "../../actions/changeEyes";
import EyesOne from "../../assets/options/eye_option_one.png";

export class Eyes extends Component {
  changeEyes = option => {
    this.props.eyes === option
      ? this.props.changeEyes("null")
      : this.props.changeEyes(option);
  };

  render() {
    return (
      <div className="eyes-container select-container">
        <div
          className="eyes-options eye-one option"
          onClick={() => {
            this.changeEyes("one");
          }}
        >
          <img className="eyes-one eyes-item item" alt="eyes" src={EyesOne} />
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
