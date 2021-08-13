import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Navbar, Container } from 'react-bootstrap';
import RatesPage from '../pages/RatesPage.jsx';
import { setCurrency, updateRates } from '../store/actions/index.js';
import { useEffect } from 'react';

const Header = () => {
    return <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>Currency Converter</Navbar.Brand>
        </Container>
    </Navbar>
};

const App = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('test')
        const response = axios.get(`https://v6.exchangerate-api.com/v6/8af7256db7b4a0580ec9109a/latest/${state.baseCurrency}`);
        response.then(({ data }) => {
        dispatch(updateRates(data.conversion_rates))
        })
        .catch((e) => {
        console.log(e);
         });
    }, [])
    return <div className="h-100">
        <Header />
        <RatesPage />
    </div>;
}

export default App;