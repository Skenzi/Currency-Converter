import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import CurrencyForm from './CurrencyForm';

const CurrencyBox = () => {
  const { t } = useTranslation();
  const { rates, baseCurrency } = useSelector((state) => state);
  const ratesKeys = Object.keys(rates);
  return (
    <>
      <div className="row">
        <div className="col-8 fs-2">{t('rates')}</div>
        <CurrencyForm />
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-dark table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">{t('currencyPair')}</th>
                <th scope="col">{t('rate')}</th>
              </tr>
            </thead>
            <tbody>
              {ratesKeys.map((rateKey) => {
                const id = _.uniqueId();
                return (
                  <tr key={id}>
                    <td>
                      {`${baseCurrency}/${rateKey}`}
                    </td>
                    <td>{rates[rateKey]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CurrencyBox;
