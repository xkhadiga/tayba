import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Banner from "../../assets/pagebanner.jpg";
function PageBanner({ title, text }) {

  return (
    <div className="overflow-hidden w-full">
      <div className="w-full relative">
        <LazyLoadImage src={Banner} className=" object-cover w-full "/>
        <div className="absolute top-1/2  transform  -translate-y-1/2 px-2 lg:px-32 flex flex-col text-white">
            <h1 className="text-lg md:text-3xl lg:text-5xl">{title}</h1>
            <p className="text-xs md:text-xl">
            {text}
</p>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
