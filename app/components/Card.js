

function Card() {
  return (
    <div className="relative shadow-md max-w-sm cursor-pointer">
      <div className="relative h-96 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
        <img
          src="painting.jpg"
          layout="fill"
          objectfit="cover"
          alt="art"
        />
      </div>

      <div className="p-4 space-y-2">
        <h1 className="text-[#5B20B6] hover:text-[#441583] text-3xl font-semibold">Iphone 15 Pro max</h1>
        <p className="text-xl text-gray-500 truncate">Iphone 15 for sale</p>
        <br/>
        <br/>
      </div>

      {/* Sticky Price Tag - Outside the Card Container */}
      <div className="absolute bottom-0 right-0 p-2 bg-[#F5F3FF] shadow-md">
        <span className="text-[#5B20B6] text-lg font-semibold">$99.99</span>
      </div>
    </div>
  );
}

export default Card;