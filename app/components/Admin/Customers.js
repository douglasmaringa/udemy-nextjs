import React from 'react';

function Customers() {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>Email</th>
            <th>Date Joined</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>cy@example.com</td>
            <td>2022-01-01</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>hart@example.com</td>
            <td>2022-01-02</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>brice@example.com</td>
            <td>2022-01-03</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
