import { UPDATE_TAX_AMOUNT, UPDATE_TAX_RATE } from '../actions/types';

export default (state = {rate: 0.1, amount: 0 }, action) => {
  switch (action.type) {
    case UPDATE_TAX_AMOUNT: {
        return {
          ...state,
          amount: action.payload
        };
    }
    case UPDATE_TAX_RATE: {
        return {
          ...state,
          rate: action.payload
        };
    }
    default: {
      return state;
    }

  }
}