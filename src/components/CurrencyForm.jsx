import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrency, updateRates } from '../store/actions';


const CurrencyForm = () => {
    const [currency, setCurrency] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(changeCurrency(currency));
        const response = axios.get(`https://v6.exchangerate-api.com/v6/8af7256db7b4a0580ec9109a/latest/${currency}`);
        response.then(({ data }) => {
        dispatch(updateRates(data.conversion_rates))
        })
        .catch((e) => {
        console.log(e);
        });
    };
    return <div className="row">
        <div className="col">
        <form className="row g-3" onSubmit={onSubmit}>
            <div className="col-auto">
            <input name='baseCurrency' className="form-control" value={currency} onChange={(e) => setCurrency(e.target.value)} type="text" />
            </div>
            <div className="col-auto">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        </div>
    </div>
};

export default CurrencyForm;