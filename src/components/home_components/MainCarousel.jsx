import foodImage from "../../assets/food.jpg";
import foodImage2 from "../../assets/food2.jpg";
import foodImage3 from "../../assets/food3.jpg";
import { ChevronLeft, ChevronRight } from "../../assets/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";

function MainCarousel() {
    const { t, i18n } = useTranslation();

  const carousel_data = [
    {
      img: foodImage,
      h1: t("carousel.slide1.h1"),
      h2: t("carousel.slide1.h2"),
      p: t("carousel.slide1.p"),
    },
    {
      img: foodImage2,
      h1: t("carousel.slide2.h1"),
      h2: t("carousel.slide2.h2"),
      p: t("carousel.slide2.p"),
    },
    {
      img: foodImage3,
      h1: t("carousel.slide3.h1"),
      h2: t("carousel.slide3.h2"),
      p: t("carousel.slide3.p"),
    },
  ];
  return (
    <div dir="ltr">
     <Carousel
     
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button
            onClick={onClickHandler}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/30  p-3 rounded-full z-10"
          >
            <ChevronLeft  stroke="white" fill="white" width={16} />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <button
            onClick={onClickHandler}
            className=" hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/30  p-3 rounded-full z-10"
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
            className=" relative w-full h-[87dvh] bg-right md:bg-center"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col justify-center h-full  text-left pl-2 md:pl-32 text-white md:text-(--text-color) ">
              <h1 className="text-4xl md:text-7xl font-medium font md:font-base text-shadow-gray-700 text-shadow-sm md:text-shadow-none">{item.h1}</h1>
              <h1 className="text-4xl md:text-7xl font-medium md:font-base text-shadow-gray-700 text-shadow-sm md:text-shadow-none">{item.h2}</h1>
              <p className="text-xl md:text-2xl my-6 md:my-3 font-medium md:font-base text-shadow-gray-700 text-shadow-sm md:text-shadow-none " >{item.p}</p>

              <button className="main-btn bg-[#ea462b]  w-[50%] md:w-[30%] lg:w-[15%]">
                View Menu
              </button>
            </div>
          </div>
        ))}

       
      </Carousel>
      </div>
  )
}

export default MainCarousel