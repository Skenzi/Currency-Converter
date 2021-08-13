import { createAction } from "redux-actions";

const changeCurrency = createAction('CURRENCY_SET');
const updateRates = createAction('CURRENCY_UPDATE');

export {changeCurrency, updateRates};