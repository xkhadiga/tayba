import React from 'react'
import banner from "../../assets/best-banner.jpg";

function DishSection() {
  return (
              <div
            className=" relative w-full h-[87vh]"
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col justify-center h-full  text-left pl-2  lg:pl-32">
                <p className='p-text mb-2 text-sm md:text-lg'>Best Dish Of The Day
</p>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:font-semibold md:font-base">Big Calzone</h1>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:font-semibold md:font-base">Napoletano Pizza</h1>
              <p className="text-4xl md:text-5xl my-6 text-[#ea462b] font-semibold">$17.99</p>

              <button className="border border-[#ea462b] text-[#ea462b]  w-[40%] lg:w-[15%] p-2 rounded-xl hover:bg-[#ea462b] hover:text-white font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
  )
}

export default DishSection