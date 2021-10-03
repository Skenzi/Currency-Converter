import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import RatesPage from '../pages/RatesPage.jsx';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Currency Converter</Navbar.Brand>
    </Container>
  </Navbar>
);

const App = () => (
  <div className="h-100">
    <Header />
    <RatesPage />
  </div>
);

export default App;
