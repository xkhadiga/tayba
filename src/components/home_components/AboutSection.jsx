import section2 from "../../assets/section2.png";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function AboutSection() {
      const sec2_data = [
    {
      number: "60+",
      title: "Tasty Dishes",
    },
    {
      number: "25k",
      title: "Happy Customers",
    },
    {
      number: "10+",
      title: "Years of Experience",
    },
    {
      number: "12",
      title: "Amazing Chefs",
    },
  ];
  const sec3_data = [
    {
      img: icon1,
      title: "Fresh Ingredients",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: icon2,
      title: "Best Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: icon3,
      title: "Happy Clients",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: icon4,
      title: "Vegan Menu",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];
  return (
    <div className='w-full flex flex-col px-1 lg:px-32 gap-32 items-center justify-center '>
      <section className="w-full flex flex-col lg:flex-row items-center justify-center  ">
        {/* left */}
        <div className="w-[90dvw] lg:w-1/2 flex items-center justify-center">
          <LazyLoadImage effect="blur" src={section2} alt="" />
        </div>
        {/* right */}
        <div className="w-[90dvw] lg:w-1/2 text-(--text-color)  ">
          <h1 className="text-3xl lg:text-5xl font-semibold text-center ">
            All in Good Taste Food With
            <span className="text-[#ea462b]"> Tayba Foods</span>
          </h1>
          <br />
          <p className="p-text">Try the delicious new dishes from our chef</p>
          <p className="p-text">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor.
          </p>
          <br />
          <p className="p-text">
            Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
            sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
            Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <div className="flex mt-14 mb-6 gap-2 md:gap-10 items-center justify-center text-center">
            {sec2_data.map((item, index) => {
              return (
                <div key={index}>
                  <h1 className=" text-2xl md:text-5xl font-bold md:font-semibold">{item.number}</h1>
                  <p className="p-text text-sm md:text-base">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 py-16 w-full ">
        <div className="flex w-full ">
          <div className="grid grid-cols-4 gap-1 md:gap-10 w-full items-center justify-center ">
            {sec3_data.map((item, index) => 
          
              <div key={index}>
                <div className=" flex flex-col items-center justify-center gap-4 text-center">
                  <div className="">
                        <img className="w-[80%] md:w-full" src={item.img} alt="" />
                  </div>
              
                  <h1 className="text-sm md:text-2xl font-semibold">{item.title}</h1>
                  <p className="hidden md:flex p-text">{item.description}</p>
                </div>
                </div>
                
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection