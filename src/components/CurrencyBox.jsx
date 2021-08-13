import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import CurrencyForm from './CurrencyForm';

const CurrencyBox = () => {
    const {rates, baseCurrency} = useSelector((state) => state);
    const ratesKeys = Object.keys(rates);
    return <>
        <div className="row">
            <div className="col-8 fs-2">Rates</div>
            <CurrencyForm />
        </div>
        <div className="row">
            <div className="col">
                <table className="table table-dark table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">ParaCurrency</th>
                        <th scope="col">Money</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ratesKeys.map((rateKey) => {
                        const id = _.uniqueId();
                        return <tr key={id}>
                        <td>{baseCurrency}/{rateKey}</td>
                        <td>{rates[rateKey]}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
};

export default CurrencyBox;