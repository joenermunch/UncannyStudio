export const changeHair = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_HAIR": {
      return (state = action.payload);
    }
    default:
      return state;
  }
};
