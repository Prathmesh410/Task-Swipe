const initialState= {
    invoices:[{
        isOpen: false,
        currency: '$',
        currentDate: '',
        dateOfIssue: '',
        billTo: '',
        billToEmail: '',
        billToAddress: '',
        billFrom: '',
        billFromEmail: '',
        billFromAddress: '',
        notes: '',
        total: '0.00',
        subTotal: '0.00',
        taxRate: '',
        taxAmmount: '0.00',
        discountRate: '',
        discountAmmount: '0.00',
        invoiceNumber: 0,
        items : [
        {
          id: 0,
          name: '',
          description: '',
          price: '1.00',
          quantity: 1
        }
      ]}]
}

export const invoiceReducer= (state= initialState, {type, payload}) => {
    switch(type){
        case 'ADD_INVOICE': state.invoices.push(payload); 
        default: return state;
    }
}