export const changeEyes = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_EYES": {
      return (state = action.payload);
    }
    default:
      return state;
  }
};
