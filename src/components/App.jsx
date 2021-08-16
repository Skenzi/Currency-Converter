import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Navbar, Container } from 'react-bootstrap';
import RatesPage from '../pages/RatesPage.jsx';
import { updateRates } from '../store/actions/index.js';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Currency Converter</Navbar.Brand>
    </Container>
  </Navbar>
);

const App = () => {
  const { baseCurrency } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const response = axios.get(`https://v6.exchangerate-api.com/v6/8af7256db7b4a0580ec9109a/latest/${baseCurrency}`);
    response.then(({ data }) => {
      dispatch(updateRates(data.conversion_rates));
    })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="h-100">
      <Header />
      <RatesPage />
    </div>
  );
};

export default App;
