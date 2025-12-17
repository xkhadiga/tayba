import { useKeenSlider } from "keen-slider/react";  
import "keen-slider/keen-slider.min.css"
import product1 from "../../assets/Popular1.jpg"
import product2 from "../../assets/Popular2.jpg"
import product3 from "../../assets/Popular3.jpg"
import product4 from "../../assets/Popular4.jpg"
import product5 from "../../assets/Popular5.jpg"
import gallery1 from "../../assets/gallery1.jpg"
import gallery2 from "../../assets/gallery2.jpg"
import gallery3 from "../../assets/gallery3.jpg"
import gallery4 from "../../assets/gallery4.jpg"

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function PopularDishes() {
      const [sliderRef] = useKeenSlider({
          mode: "free-snap",

    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })

 const products = [
  {
    id: 1,
    img: product1,
    title: "Classic Havana Burger",
    description: "Grilled beef patty, Turkey rashes, and burger relish.",
    price: 21.0,
  },
  {
    id: 2,
    img: product2,
    title: "Bufalo Mozzarella",
    description: "Grilled beef patty, Turkey rashes, and burger relish.",
    price: 16.5,
  },
  {
    id: 3,
    img: product3,
    title: "Cheese Royale Burger",
    description: "Grilled beef patty, Turkey rashes, and burger relish.",
    price: 13.5,
  },
  {
    id: 4,
    img: product4,
    title: "Classic Havana Burger",
    description: "Grilled beef patty, Turkey rashes, and burger relish.",
    price: 21.0,
  },
  {
    id: 5,
    img: product5,
    title: "Bufalo Mozzarella",
    description: "Grilled beef patty, Turkey rashes, and burger relish.",
    price: 19.0,
  },
];
const gallery = [
    {
        id: 1,
        img: gallery1,
    },
    {
        id: 2,
        img: gallery2,
    },
    {
        id: 3,
        img: gallery3,
    },
    {
        id: 4,
        img: gallery4,
    },
]

  return (
    <div className="w-full  text-center flex flex-col gap-2">
        <h1 className="text-3xl lg:text-5xl font-semibold">Popular Dishes</h1>
        <p className="p-text">Try the delicious new dishes from our chefs.
</p>
              <div ref={sliderRef}
              dir="ltr"
              
              className="keen-slider my-6 flex px-6 md:px-16 gap-4 md:gap-2">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide flex flex-col items-center border border-light hover:cursor-pointer rounded-2xl p-3 gap-1 ">
            <LazyLoadImage src={product.img} alt={product.title} effect="blur" className="rounded-2xl" />
            <h3 className="text-xl md:text-2xl font-semibold md:font-base">{product.title}</h3>
            <p className="p-text">{product.description}</p>
            <p className="text-xl md:text-2xl text-[#ea462b]"> ${product.price}</p>
            <button className="main-btn bg-[#ea462b] w-[80%] mb-6">Add to Cart</button>
          </div>
        ))}
   
    
    </div>
         {/* Gallery */}
         <div className="grid grid-cols-2 md:flex w-full mt-20 mb-10 overflow-hidden gap-2 p-2">
        {gallery.map((product) => (
          <div key={product.id} className="keen-slider__slide hover:scale-102 hover:cursor-pointer  ">
            <LazyLoadImage effect="blur" src={product.img} alt={product.title} className="rounded-xl"  />
          </div>
        ))}
         </div>

    </div>

  )
}

export default PopularDishes