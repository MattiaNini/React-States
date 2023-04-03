export const globalReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + 1, //Incremento
      };
    case "decrement":
      return {
        ...state,
        value: state.value - 1, //Decremento
      };
    case "reset":
      return {
        ...state,
        value: 0, //Reset = Valore di partenza (es: 0)
      };
    default:
      return state;
  }
};
