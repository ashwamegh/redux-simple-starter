//  Import Action Types
import { INC, DEC } from "./action_types";

// Action that increments counter value
export const incrementCounter = () => {
  return {
    type: INC,
    payload: {
      value: 2
    }
  };
};

// Action that decrements counter value
export const decrementCounter = () => {
  return {
    type: DEC,
    payload: {
      value: 1
    }
  };
};
