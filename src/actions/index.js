import { UPDATE_TAX_AMOUNT, UPDATE_TAX_RATE } from './types';

export const updateTaxAmount = amount => {
  return {
    type: UPDATE_TAX_AMOUNT,
    payload: amount
  }
}

export const updateTaxRate = rate => {
  return {
    type: UPDATE_TAX_RATE,
    payload: rate
  }
}