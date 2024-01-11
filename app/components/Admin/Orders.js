'use client'
import React, { useState } from 'react';

function Orders() {
  // Placeholder data for orders
  const ordersData = [
    { id: 1, username: 'John Doe', products: ['Product 1', 'Product 2'], date: '2022-01-01' },
    { id: 2, username: 'Jane Smith', products: ['Product 3', 'Product 4'], date: '2022-01-02' },
    // Add more orders as needed
  ];

  // State for the selected order
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to open the modal and set the selected order
  const openModal = (order) => {
    setSelectedOrder(order);
    document.getElementById('my_modal_3').showModal();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Username</th>
              <th>Products</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <tr key={order.id}>
                <td>{order.username}</td>
                <td>{order.products.join(', ')}</td>
                <td>{order.date}</td>
                <th>
                  <button className="btn" onClick={() => openModal(order)}>
                    👁️
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById('my_modal_3').close()}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Order Details</h3>
            <p className="py-4">
              <strong>Username:</strong> {selectedOrder?.username}
            </p>
            <p>
              <strong>Products:</strong> {selectedOrder?.products.join(', ')}
            </p>
          </div>
        </dialog>
     
    </div>
  );
}

export default Orders;
