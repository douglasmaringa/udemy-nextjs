

function Category() {
    return (
      <div className="relative shadow-md max-w-sm cursor-pointer">
        <div className="relative h-40 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
          <img
            src="painting.jpg"
            layout="fill"
            objectFit="cover"
            alt="art"
          />
        </div>
  
        <div className="p-4 space-y-2">
          <h1 className="text-[#5B20B6] hover:text-[#441583] text-3xl text-center font-semibold">Versailles Palace</h1>
          
        </div>
  
       
      </div>
    );
  }
  
  export default Category;