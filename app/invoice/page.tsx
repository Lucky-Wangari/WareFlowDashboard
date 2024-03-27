import React from 'react';

const InvoicePage = () => {
  const company = {
    name: 'Mumias Sugar',
    address: '123 Street, Nairobi, Kenya',
    email: 'mumiassugar@mumias.com',
    phone: '+1234567890'
  };

 
  const invoices = [
    {
      invoiceNumber: 'INV-001',
      date: 'March 29, 2024',
      items: [
        { description: 'Product 1', quantity: 2, unitPrice: 50 },
        { description: 'Product 2', quantity: 1, unitPrice: 75 }
      ],
      subtotal: 175,
      tax: 17.5,
      total: 192.5
    },
   
  ];

  const invoiceIndexToShow = 0; 

  const invoice = invoices[invoiceIndexToShow];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold mb-8">Invoice</h1>
      <div className="flex justify-between mb-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{company.name}</h2>
          <p className="text-gray-600">{company.address}</p>
          <p className="text-gray-600">{company.email} | {company.phone}</p>
        </div>
        <div className="flex-1 text-right">
          <p className="text-xl font-semibold">Invoice Number: {invoice.invoiceNumber}</p>
          <p className="text-gray-600">Date: {invoice.date}</p>
        </div>
      </div>
      <div className="border-t border-gray-300 py-8">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-2">Description</th>
              <th className="text-right py-2">Quantity</th>
              <th className="text-right py-2">Unit Price</th>
              <th className="text-right py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, index) => (
              <tr key={index}>
                <td className="text-left py-4">{item.description}</td>
                <td className="text-right py-4">{item.quantity}</td>
                <td className="text-right py-4">Ksh{item.unitPrice.toFixed(2)}</td>
                <td className="text-right py-4">Ksh{(item.quantity * item.unitPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-8">
        <div className="text-right">
          <p className="text-lg font-semibold">Subtotal: Ksh{invoice.subtotal.toFixed(2)}</p>
          <p className="text-lg font-semibold">Tax (10%): Ksh{invoice.tax.toFixed(2)}</p>
          <p className="text-lg font-semibold">Total: Ksh{invoice.total.toFixed(2)}</p>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-sm text-gray-600">Payment due within 30 days. Please remit payment to the above address.</p>
      </div>
    </div>
  );
};

export default InvoicePage;
