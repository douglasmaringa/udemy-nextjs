import AddProducts from "../../../components/Admin/AddProducts"
import Sidebar from "../../../components/SideBar"


function page() {
  return (
    <div>
        <div className="flex">
          <Sidebar />
          <div className="flex-grow p-4">
          <h1 className="text-2xl text-center font-bold text-[#5B20B6] mb-4">Add New Product</h1>
          <div className="flex justify-center">
            <AddProducts />
          </div>
        </div>
        </div>
    </div>
  )
}

export default page