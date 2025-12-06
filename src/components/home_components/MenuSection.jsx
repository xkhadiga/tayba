// Category images
import category1 from "../../assets/menuitems/ct1.jpg";
import category2 from "../../assets/menuitems/ct2.jpg";
import category3 from "../../assets/menuitems/ct3.jpg";

// Category banners
import banner1 from "../../assets/menuitems/ct1banner.jpg";
import banner2 from "../../assets/menuitems/ct2banner.jpg";
import banner3 from "../../assets/menuitems/ct3banner.jpg";

// Category 1 items (5 items)
import c1item1 from "../../assets/menuitems/ct1i1.jpg";
import c1item2 from "../../assets/menuitems/ct1i2.jpg";
import c1item3 from "../../assets/menuitems/ct1i3.jpg";
import c1item4 from "../../assets/menuitems/ct1i4.jpg";
import c1item5 from "../../assets/menuitems/ct1i5.jpg";

// Category 2 items (3 items)
import c2item1 from "../../assets/menuitems/ct2i1.jpg";
import c2item2 from "../../assets/menuitems/ct2i2.jpg";
import c2item3 from "../../assets/menuitems/ct2i3.jpg";

// Category 3 items (4 items)
import c3item1 from "../../assets/menuitems/ct3i1.jpg";
import c3item2 from "../../assets/menuitems/ct3i2.jpg";
import c3item3 from "../../assets/menuitems/ct3i3.jpg";
import c3item4 from "../../assets/menuitems/ct3i4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


function MenuSection() {
  const menuData = [
    {
      category: "Pizza",
      categoryBanner: banner1,
      categoryImg: category1,
      items: [
        {
          id: 1,
          img: c1item1,
          title: "Oakey Smokey Pizza",
          price: 21,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
        {
          id: 2,
          img: c1item2,
          title: "White Ricotta Pizza",
          price: 24,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
        {
          id: 3,
          img: c1item3,
          title: "Original Margherita Pizza",
          price: 22,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
        {
          id: 4,
          img: c1item4,
          title: "Calzone",
          price: 23,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
        {
          id: 5,
          img: c1item5,
          title: "Mercy Margarita",
          price: 18,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
      ],
    },
    {
      category: "Pasta",
      categoryBanner: banner2,
      categoryImg: category2,
      items: [
        {
          id: 1,
          img: c2item1,
          title: "Spaghetti all’Amatriciana",
          price: 21,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
        {
          id: 2,
          img: c2item2,
          title: "Spaghetti Carbonara",
          price: 24,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
        {
          id: 3,
          img: c2item3,
          title: "Lasagna",
          price: 22,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
      ],
    },
    {
      category: "Burger",
      categoryBanner: banner3,
      categoryImg: category3,
      items: [
        {
          id: 1,
          img: c3item1,
          title: "The Double Barrel Meat Feast",
          price: 21,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
        {
          id: 2,
          img: c3item2,
          title: "Classic Havana Burger",
          price: 24,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
        {
          id: 3,
          img: c3item3,
          title: "Single BBQ Chicken Burger",
          price: 22,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
        {
          id: 4,
          img: c3item4,
          title: "Havana Speical Burger Combo",
          price: 23,
          description: "Smoke mozzarella, basil and picorino Romano",
        },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col  ">
              <h1 className="text-5xl font-semibold text-center mb-2">Our Menu</h1>
        <p className="p-text mb-10 text-center">Try the delicious new dishes from our chefs.
</p>
      {menuData.map((category, index) => (
        <section
          className={`flex  mb-12 w-full items-center gap-32 justify-center ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
          style={
           {backgroundImage: `url(${category.categoryBanner})`}
          }
          key={category.category}
        >
          {/* Left large image */}
          <div >
            <LazyLoadImage
              effect="blur"
              src={category.categoryImg}
              alt={category.category}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right side: title + items */}
          <div >
            <h2 className="text-3xl font-bold mb-4">{category.category}</h2>

            <ul className="space-y-4 flex flex-col ">
              {category.items.map((item) => (
                <li key={item.id} className="flex gap-4 items-center ">
                  {/* Small item image */}
                  <div className="w-18 h-18 flex-shrink-0">
                    <LazyLoadImage
                      effect="blur"
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Item info */}
                  <div>
                    <h4 className="flex justify-between font-semibold">
                      <span className="font-semibold text-lg w-[60vh]">
                        {item.title}
                      </span>
                      <span className="text-[#ea462b] font-semibold text-lg">
                        ${item.price.toFixed(2)}
                      </span>
                    </h4>
                    <p className="p-text">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}

export default MenuSection;
