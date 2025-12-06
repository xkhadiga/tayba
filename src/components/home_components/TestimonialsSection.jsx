import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.css";
import { ChevronLeft, ChevronRight } from "../../assets/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Blogger",
      message:
        "The flavors here are incredible! Every dish tells a story of passion and quality. Highly recommend!",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Regular Customer",
      message:
        "Best dining experience I've had in years. The staff is friendly and the atmosphere is perfect.",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Chef",
      message:
        "As a fellow chef, I appreciate the attention to detail and fresh ingredients. Outstanding work!",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
      rating: 5,
    },
    {
      name: "David Wilson",
      role: "Family Man",
      message:
        "Great place to bring the whole family. Kids love it and adults enjoy the sophisticated menu.",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      rating: 4,
    },
  ];

  const renderStars = (rating) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`${
          i < rating ? "text-yellow-400" : "text-gray-300"
        } text-xl`}
      >
        ★
      </span>
    ));

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
  });

  return (
    <section >
      <div className="max-w-6xl mx-auto px-5">
              <h1 className="text-5xl font-semibold text-center mb-2">Our Reviews</h1>
        <p className="p-text mb-10 text-center">They Say About Us
</p>
        <div className="relative">
          {/* SLIDER */}
          <div ref={sliderRef} dir="ltr" className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="bg-white rounded-xl p-8 shadow-md text-center h-full transform transition-all duration-300 border border-light">
                  
                  {/* IMAGE */}
                  <LazyLoadImage
                    effect="blur"
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-5 border-2 border-gray-200"
                  />

                  {/* STARS */}
                  <div className="mb-4 flex justify-center">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* MESSAGE */}
                  <p className="p-text text-base italic mb-5">
                    "{testimonial.message}"
                  </p>

                  {/* NAME */}
                  <h4 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h4>

                  {/* ROLE */}
                  <span className="text-sm p-text font-medium">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* PREV BUTTON */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/30 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
          >
            <ChevronLeft className="w-4 h-4" fill="white" />
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/30 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
          >
            <ChevronRight className="w-4 h-4" fill="white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
