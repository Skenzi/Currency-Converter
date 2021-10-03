import { createAction } from 'redux-actions';

const changeCurrency = createAction('CURRENCY_SET');
const setRates = createAction('CURRENCY_UPDATE');

export { changeCurrency, setRates };
