import React from "react";
import PageBanner from "../components/common/PageBanner";

function Booking() {
  return (
    <div className="overflow-x-hidden flex flex-col items-center w-full">
      <PageBanner
        title="Book A Table
"
        text="Book your table and let us take care of the rest."
      />

      <div className="text-center mt-10 p-4 md:p-10 lg:p-20 w-full flex flex-col items-center">
        <h1 className="text-3xl lg:text-5xl text-(--text-color)">Book a Table</h1>
        <p className="text-sm md:text-lg p-text lg:w-3xl mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
          reminusto doeiusmod tempor condorico consectetur adipiscing elitut
          aliquip.
        </p>

        <div className="grid grid-cols-2 grid-rows-3 gap-4 w-full mt-20">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 pl-4 border border-(--secondary-color)"
          />
          <input
            type="date"
            className="p-2 pl-4 border border-(--secondary-color) p-text"
          />
          <input
            type="time"
            className="p-2 pl-4 border border-(--secondary-color) p-text"
          />
          <input
            type="number"
            placeholder="2"
            className="p-2 pl-4 border border-(--secondary-color) p-text"
          />
          <textarea
            placeholder="Enter message"
            className="p-2 pl-4 border border-(--secondary-color) col-span-2"
          ></textarea>

          <button className="main-btn bg-[#ea462b] w-[60%] lg:w-[30%] mb-6 col-span-2 mx-auto">
            Confirm Reservation
          </button>
        </div>
      </div>

                <iframe className='w-full h-[50dvh]'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.6580030833134!2d29.94535340271855!3d31.21378651550446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c545f555730d%3A0xea7c0d5a7d8c234d!2sSemouha%20garden!5e0!3m2!1sen!2seg!4v1765828197683!5m2!1sen!2seg" frameborder="0"></iframe>
    </div>
  );
}

export default Booking;
