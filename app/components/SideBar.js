import React from 'react';
import { IoReceipt, IoCube, IoPeople, IoEye, IoLogOut } from 'react-icons/io5';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white p-6 h-screen sticky top-0">
      <ul className="space-y-4">
        <li className="cursor-pointer flex items-center text-xl font-semibold">
          <IoReceipt className="mr-2" /> Orders
        </li>
        <li className="cursor-pointer flex items-center text-xl font-semibold">
          <IoCube className="mr-2" /> Products
        </li>
        <li className="cursor-pointer flex items-center text-xl font-semibold">
          <IoCube className="mr-2" />Add Products
        </li>
        <li className="cursor-pointer flex items-center text-xl font-semibold">
          <IoPeople className="mr-2" /> Customers
        </li>
        <li className="cursor-pointer flex items-center text-xl font-semibold border-t-2 border-gray-600 pt-2">
          <IoEye className="mr-2" /> View Store
        </li>
        <li className="cursor-pointer flex items-center text-xl font-semibold border-t-2 border-gray-600 pt-2">
          <IoLogOut className="mr-2" /> Logout
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
