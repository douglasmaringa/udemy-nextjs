import React from 'react';

function Products() {
  // Placeholder data for products
  const productsData = [
    {
      id: 1,
      productName: 'Artistic Painting',
      numberOfImages: 3,
      description: 'Beautiful artistic painting for your home decor.',
      price: 99.99,
      inStock: 10,
      colorsAvailable: ['Red', 'Blue', 'Green'],
    },
    {
      id: 2,
      productName: 'Abstract Sculpture',
      numberOfImages: 5,
      description: 'Unique abstract sculpture to enhance your living space.',
      price: 149.99,
      inStock: 5,
      colorsAvailable: ['Gold', 'Silver', 'Bronze'],
    },
    // Add more products as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Number of Images</th>
            <th>Description</th>
            <th>Price</th>
            <th>Number in Stock</th>
            <th>Colors Available</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.numberOfImages}</td>
              <td>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.inStock}</td>
              <td>{product.colorsAvailable.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
