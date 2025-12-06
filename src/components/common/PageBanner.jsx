import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Banner from "../../assets/pagebanner.jpg";
function PageBanner({ title, text }) {

  return (
    <div>
      <div className="relative">
        <LazyLoadImage src={Banner} />
        <div className="absolute top-1/2  transform  -translate-y-1/2 px-32 flex flex-col text-white">
            <h1 className="text-5xl">{title}</h1>
            <p className="text-xl">
            {text}
</p>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
