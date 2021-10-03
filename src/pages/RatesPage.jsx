import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { setRates } from '../store/actions/index.js';
import CurrencyForm from '../components/CurrencyForm.jsx';
import CurrencyTable from '../components/CurrencyTable.jsx';

const RatesPage = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [stateContent, setStateContent] = useState('waiting');
  const { baseCurrency } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const response = axios.get(`https://v6.exchangerate-api.com/v6/8af7256db7b4a0580ec9109a/latest/${baseCurrency}`);
    response.then(({ data }) => {
      setStateContent('loaded');
      dispatch(setRates(data.conversion_rates));
    })
      .catch((e) => {
        setStateContent('error');
        if (e.isAxios) {
          setError(t('errors.network'));
        } else {
          setError(t('errors.somethingWrong'));
        }
      });
  }, []);
  return stateContent === 'loaded' ? (
    <div className="container p-3">
      <div className="row">
        <div className="col-8 fs-2">{t('rates')}</div>
        <CurrencyForm />
      </div>
      <div className="row">
        <div className="col">
          <CurrencyTable />
        </div>
      </div>
    </div>
  ) : <div>{error ? <div className="text-danger">{error}</div> : <div>Идет загрузка данных...</div>}</div>;
};

export default RatesPage;
