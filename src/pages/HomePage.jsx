import foodImage from "../assets/food.jpg";
import section2 from "../assets/section2.png";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";

function HomePage() {
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
    <div className="homepage w-full flex flex-col gap-32 px-32 ">
      {/*section 1 - hero */}
      <section>
        <div
          className=" relative w-full h-[87vh]"
          style={{
            backgroundImage: `url(${foodImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col justify-center h-full pl-8 ">
            <h1 className="text-7xl">Fresh & Fast</h1>
            <h1 className="text-7xl">Street Food</h1>
            <p className="text-2xl my-3">High Professional Services</p>

            <button className="main-btn bg-[#ea462b] hover:bg-[#cc361f]">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/*section 2 - about */}
      <section className="w-full flex items-center justify-center">
        {/* left */}
        <div className="w-1/2 ">
          <img src={section2} alt="" />
        </div>
        {/* right */}
        <div className="w-1/2">
          <h1 className="text-5xl font-semibold ">
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
          <div className="flex mt-14 mb-6 gap-10 items-center justify-center text-center">
            {sec2_data.map((item, index) => {
              return (
                <div key={index}>
                  <h1 className=" text-5xl font-semibold">{item.number}</h1>
                  <p className="p-text">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 py-16 ">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 gap-10">
            {sec3_data.map((item, index) => 
          
              <div key={index}>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <div className="">
                        <img className="w-full" src={item.img} alt="" />
                  </div>
              
                  <h1 className="text-2xl font-semibold">{item.title}</h1>
                  <p className="p-text">{item.description}</p>
                </div>
                </div>
                
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
