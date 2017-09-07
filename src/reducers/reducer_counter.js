// Importing Action types
import { INC, DEC } from "./../actions/action_types";

// Counter Reducer to switch the actions dispatched by store
export const counterReducer = (state = { count: 5 }, action) => {
  switch (action.type) {
    case INC:
      return Object.assign({}, state, {
        count: state.count + action.payload.value
      });
    case DEC:
      return Object.assign({}, state, {
        count: state.count - action.payload.value
      });
    default:
      return state;
  }
};
