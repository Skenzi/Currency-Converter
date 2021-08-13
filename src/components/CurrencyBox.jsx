import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

const CurrencyBox = () => {
    const {rates, baseCurrency} = useSelector((state) => state);
    console.log(baseCurrency)
    const ratesKeys = Object.keys(rates);
    return <>
        <div className="row">
            <div className="col">
                <h1>Rates</h1>
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
                        <td className="">{baseCurrency}/{rateKey}</td>
                        <td className="">{rates[rateKey]}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
};

export default CurrencyBox;