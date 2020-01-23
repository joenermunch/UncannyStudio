export const testReducer = (state = null, action) => {
  switch (action.type) {
    case "TEST": {
      console.log(action.payload);
      return (state = action.payload);
    }
    default:
      return state;
  }
};
