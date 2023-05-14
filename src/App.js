import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import HomePage from './components/Home/Home';

class App extends Component {
  render() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <InvoiceForm/>
        {/* <HomePage/> */}
      </Container>
    </div>
  );
}}

export default App;
