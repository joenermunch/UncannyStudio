import React, { Component } from "react";
import { connect } from "react-redux";
import Hair from "./containers/Hair";
import Eyes from "./containers/Eyes";
import Nose from "./containers/Nose";
import Mouth from "./containers/Mouth";
import Result from "./containers/Result";

export class Sketch extends Component {
  state = {
    hair: false,
    hairClicked: true,
    eyes: true,
    eyesClicked: false,
    mouth: false,
    mouthClicked: false,
    nose: false,
    noseClicked: false
  };

  renderChoices = () => {
    if (this.state.hair) {
      return <Hair />;
    } else if (this.state.eyes) {
      return <Eyes />;
    } else if (this.state.mouth) {
      return <Mouth />;
    } else if (this.state.nose) {
      return <Nose />;
    } else return <></>;
  };

  renderChoiceMenu = () => {
    return (
      <div className="choice-menu">
        <div className="choices-container">
          <nav>
            <ul>
              <li
                onClick={e =>
                  this.setState({
                    hair: true,
                    eyes: false,
                    mouth: false,
                    nose: false
                  })
                }
                className="hair-choice"
              >
                Hair
              </li>
              <li
                onClick={e =>
                  this.setState({
                    hair: false,
                    eyes: true,
                    mouth: false,
                    nose: false
                  })
                }
              >
                Eyes
              </li>
              <li
                onClick={e =>
                  this.setState({
                    hair: false,
                    eyes: false,
                    mouth: false,
                    nose: true
                  })
                }
              >
                Nose
              </li>
              <li
                onClick={e =>
                  this.setState({
                    hair: false,
                    eyes: false,
                    mouth: true,
                    nose: false
                  })
                }
              >
                Mouth
              </li>
              <li>Clothes</li>
            </ul>
          </nav>
        </div>
        <div className="choices-container">
          <nav>
            <ul>
              <li
                onClick={e =>
                  this.setState({
                    hair: true,
                    eyes: false,
                    mouth: false,
                    nose: false
                  })
                }
                className="hair-choice"
              >
                Hair
              </li>
              <li
                onClick={e =>
                  this.setState({
                    hair: false,
                    eyes: true,
                    mouth: false,
                    nose: false
                  })
                }
              >
                Eyes
              </li>
              <li
                onClick={e =>
                  this.setState({
                    hair: false,
                    eyes: false,
                    mouth: false,
                    nose: true
                  })
                }
              >
                Nose
              </li>
              <li
                onClick={e =>
                  this.setState({
                    hair: false,
                    eyes: false,
                    mouth: true,
                    nose: false
                  })
                }
              >
                Mouth
              </li>
              <li>Clothes</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="sketch-container">
        <div className="result-container">
          <Result />
        </div>
        {this.renderChoiceMenu()}
        {this.renderChoices()}
      </div>
    );
  }
}

export default connect()(Sketch);
