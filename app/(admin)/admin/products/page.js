import Products from "../../../components/Admin/Products"
import Sidebar from "../../../components/SideBar"


function page() {
  return (
    <div>
        <div className="flex">
          <Sidebar />
         
          <div className="flex-grow p-4">
          <h1 className="text-2xl text-center font-bold text-[#5B20B6] mb-4">Store Products</h1>
          <div className="flex justify-center">
             <Products/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default page