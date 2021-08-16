import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeCurrency, updateRates } from '../store/actions';

const CurrencyForm = () => {
  const [currency, setCurrency] = useState('');
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(changeCurrency(currency.toUpperCase()));
    const response = axios.get(`https://v6.exchangerate-api.com/v6/8af7256db7b4a0580ec9109a/latest/${currency}`);
    response.then(({ data }) => {
      dispatch(updateRates(data.conversion_rates));
    })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="col">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input name="baseCurrency" placeholder={t('sendPlaceholder')} className="form-control" value={currency} onChange={(e) => setCurrency(e.target.value)} type="text" />
          <button type="submit" className="btn btn-outline-secondary">{t('send')}</button>
        </div>
      </form>
    </div>
  );
};

export default CurrencyForm;
