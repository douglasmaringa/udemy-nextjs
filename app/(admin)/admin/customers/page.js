import React from 'react';
import Customers from "../../../components/Admin/Customers";
import Sidebar from "../../../components/SideBar";

function Page() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <h1 className="text-2xl text-center font-bold text-[#5B20B6] mb-4">Store Customers</h1>
          <div className="flex justify-center">
            <Customers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;