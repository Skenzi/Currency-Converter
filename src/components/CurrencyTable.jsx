import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

const CurrencyTable = () => {
  const { t } = useTranslation();
  const { rates, baseCurrency } = useSelector((state) => state);
  const ratesKeys = Object.keys(rates);
  return (
    <table className="table table-dark table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">{t('currencyPair')}</th>
          <th scope="col">{t('rate')}</th>
        </tr>
      </thead>
      <tbody>
        {ratesKeys.map((rateKey) => (
          <tr key={_.uniqueId()}>
            <td>
              {`${baseCurrency}/${rateKey}`}
            </td>
            <td>{rates[rateKey]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrencyTable;
