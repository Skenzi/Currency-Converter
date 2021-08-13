import {handleActions} from 'redux-actions';
import { combineReducers } from 'redux';
import {changeCurrency, updateRates} from '../actions/index.js';

const baseCurrencyReducer = handleActions({
    [changeCurrency]: (state, {payload}) => {
        return payload;
    }
}, 'RUB');

const conversionReducer = handleActions({
    [updateRates]: (state, {payload}) => {
        console.log(payload);
        return payload;
    }
}, {});

export default combineReducers({
    baseCurrency: baseCurrencyReducer,
    rates: conversionReducer,
})