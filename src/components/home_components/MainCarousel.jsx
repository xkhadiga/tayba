import foodImage from "../../assets/food.jpg";
import foodImage2 from "../../assets/food2.jpg";
import foodImage3 from "../../assets/food3.jpg";
import { ChevronLeft, ChevronRight } from "../../assets/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


function MainCarousel() {
      const carousel_data = [
    {
      img: foodImage,
      h1: "Fresh & Fast",
      h2:
        "Street Food",
      p: "High Professional Services",
    },
    {
      img: foodImage2,
      h1: "Food For",
      h2:
        "Your Soul",
      p: "It’s about good food and fresh ingredients.",
    },
    {
      img: foodImage3,
      h1: "Try Our New",
      h2: "Burger Menu",
      p: " You will love it",
    },


  ];
  return (
     <Carousel
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button
            onClick={onClickHandler}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30  p-3 rounded-full z-10"
          >
            <ChevronLeft  stroke="white" fill="white" width={16} />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <button
            onClick={onClickHandler}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30  p-3 rounded-full z-10"
          >
            <ChevronRight  stroke="white" fill="white" width={16} />
          </button>
        )
      }
      showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        interval={5600}
        transitionTime={1800}
        stopOnHover={false}
        className=""
      >
        {carousel_data.map((item, index) => (
          <div
            className=" relative w-full h-[87vh]"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col justify-center h-full  text-left pl-32">
              <h1 className="text-7xl">{item.h1}</h1>
              <h1 className="text-7xl">{item.h2}</h1>
              <p className="text-2xl my-3">{item.p}</p>

              <button className="main-btn bg-[#ea462b]  w-[15%]">
                View Menu
              </button>
            </div>
          </div>
        ))}

       
      </Carousel>
  )
}

export default MainCarousel