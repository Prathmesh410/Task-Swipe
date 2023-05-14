import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Invoice from './Invoice';

function HomePage() {
  // Dummy list of created invoices
  const invoices = [
    { id: 1, number: 'INV-001', amount: 100 },
    { id: 2, number: 'INV-002', amount: 200 },
    { id: 3, number: 'INV-003', amount: 300 },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 fw-semibold home-head ">Invoice Generator</h1>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Created Invoices:</h3>
            <button className="btn btn-primary btn-sm">Create Invoice</button>
          </div>
          
           {invoices.map(invoice => (
              <Invoice/>
            ))}
        
        </div>
      </div>
    </div>
  );

}

export default HomePage;
