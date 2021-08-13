import React from 'react';
import CurrencyBox from '../components/CurrencyBox';
import CurrencyForm from '../components/CurrencyForm';

const RatesPage = () => {
    return <div className="container p-3">
        <CurrencyForm />
        <CurrencyBox />
    </div>
};

export default RatesPage;