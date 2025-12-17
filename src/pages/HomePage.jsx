
import React, { lazy, Suspense } from "react";


const MainCarousel = lazy(() => import("../components/home_components/MainCarousel"));
const AboutSection = lazy(() => import("../components/home_components/AboutSection"));
const PopularDishes = lazy(() => import("../components/home_components/PopularDishes"));
const MenuSection = lazy(() => import("../components/home_components/MenuSection"));
const DishSection = lazy(() => import("../components/home_components/DishSection"));
const TestimonialsSection = lazy(() => import("../components/home_components/TestimonialsSection"));
import {  ChevronUp } from "../assets/icons";
function HomePage() {

 
  return (
     <div className="homepage w-full flex flex-col gap-32 relative overflow-x-hidden">
      
      <a
            href="#"
            className="text-yellow-500 fixed hover:text-yellow-400 transition  bottom-0 right-0 mb-8 mr-8 z-10 flex flex-col items-center gap-2"
          >
            <span className=" bg-white text-white w-8 h-8 flex items-center justify-center rounded-full ">
                    <ChevronUp fill="#ea462b"  />

            </span>
          </a>
      
      {/* Section 1 - Hero */}
      <Suspense fallback={<div className="text-center py-20">Loading Hero...</div>}>
        <MainCarousel />
      </Suspense>

      {/* Section 2 - About */}
      <Suspense fallback={<div className="text-center py-20">Loading About...</div>}>
        <AboutSection />
      </Suspense>

      {/* Section 3 - Popular Dishes */}
      <Suspense fallback={<div className="text-center py-20">Loading Popular Dishes...</div>}>
        <PopularDishes />
      </Suspense>

      {/* Section 4 - Menu */}
      <Suspense fallback={<div className="text-center py-20">Loading Menu...</div>}>
        <MenuSection />
      </Suspense>
      <Suspense fallback={<div className="text-center py-20">Loading Dish Section...</div>}>
        <DishSection />
      </Suspense>

      {/* Section 5 - Testimonials */}
      <Suspense fallback={<div className="text-center py-20 ">Loading Testimonials...</div>}>
        <TestimonialsSection />
      </Suspense>



    </div>
  );
}

export default HomePage;
