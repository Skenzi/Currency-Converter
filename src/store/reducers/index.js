import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { changeCurrency, setRates } from '../actions/index.js';

const baseCurrencyReducer = handleActions({
  [changeCurrency]: (state, { payload }) => payload,
}, 'RUB');

const conversionReducer = handleActions({
  [setRates]: (state, { payload }) => payload,
}, {});

export default combineReducers({
  baseCurrency: baseCurrencyReducer,
  rates: conversionReducer,
});
