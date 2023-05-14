function Invoice({ invoice, onEdit, onDelete }) {
    // const { invoiceNo, billTo, billFrom, date } = invoice;
  
    return (
      <div className="card mb-3">
        <div className="card-body">
            <div className="d-flex justify-content-around">
            <h5 className="card-title">Invoice #2</h5>
            <p className="card-text">Bill To: xyz</p>
            <p className="card-text">Bill From: yz</p>
            <p className="card-text">Date: 20.03.2001</p>
            </div>
          <button className="btn btn-primary mr-2" >Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
  
  export default Invoice;