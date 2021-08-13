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
        dispatch(changeCurrency(currency.toUpperCase()));
        const response = axios.get(`https://v6.exchangerate-api.com/v6/8af7256db7b4a0580ec9109a/latest/${currency}`);
        response.then(({ data }) => {
        dispatch(updateRates(data.conversion_rates))
        })
        .catch((e) => {
        console.log(e);
        });
    };
    return <div className="col">
        <form onSubmit={onSubmit}>
            <div className="input-group">
            <input name='baseCurrency' placeholder="Введите валюту..." className="form-control" value={currency} onChange={(e) => setCurrency(e.target.value)} type="text" />
            <button type="submit" className="btn btn-outline-secondary">Submit</button>
            </div>
        </form>
    </div>
};

export default CurrencyForm;