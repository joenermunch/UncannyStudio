import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { changeEyes } from "./changeEyes";
import { changeHair } from "./changeHair";

const reducers = combineReducers({
  test: testReducer,
  eyes: changeEyes,
  hair: changeHair
});

export default reducers;
