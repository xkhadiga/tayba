import React from 'react'
import PageBanner from '../components/common/PageBanner'


// Category banners
import cover1 from "../assets/menuitems/ct1cover.jpg";
import cover2 from "../assets/menuitems/ct2cover.jpg";
import cover3 from "../assets/menuitems/ct3cover.jpg";
import cover4 from "../assets/menuitems/ct4cover.jpg";

// Category 1 items (5 items)
import c1item1 from "../assets/menuitems/ct1i1.jpg";
import c1item2 from "../assets/menuitems/ct1i2.jpg";
import c1item3 from "../assets/menuitems/ct1i3.jpg";
import c1item4 from "../assets/menuitems/ct1i4.jpg";
import c1item5 from "../assets/menuitems/ct1i5.jpg";

// Category 2 items (3 items)
import c2item1 from "../assets/menuitems/ct2i1.jpg";
import c2item2 from "../assets/menuitems/ct2i2.jpg";
import c2item3 from "../assets/menuitems/ct2i3.jpg";

// Category 3 items (4 items)
import c3item1 from "../assets/menuitems/ct3i1.jpg";
import c3item2 from "../assets/menuitems/ct3i2.jpg";
import c3item3 from "../assets/menuitems/ct3i3.jpg";
import c3item4 from "../assets/menuitems/ct3i4.jpg";

// Category 4 items (3 items)
import c4item1 from "../assets/menuitems/ct4i1.jpg";
import c4item2 from "../assets/menuitems/ct4i2.jpg";
import c4item3 from "../assets/menuitems/ct4i3.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Menu() {
const mainMenuData = [
  // -----------------------------
  // CATEGORY 1 — PIZZA (5 items)
  // -----------------------------
  {
    category: "Pizza",
    cover: cover1,
    items: [
      {
        img: c1item1,
        title: "Smokey BBQ Chicken Pizza",
        price: "$21.00",
        desc: "Tender BBQ chicken, smoked mozzarella, red onions, and fresh basil.",
      },
      {
        img: c1item2,
        title: "Four Cheese Ricotta Pizza",
        price: "$24.00",
        desc: "Ricotta, mozzarella, parmesan, and provolone on a crispy base.",
      },
      {
        img: c1item3,
        title: "Classic Margherita",
        price: "$19.00",
        desc: "Fresh tomatoes, buffalo mozzarella, basil, and olive oil drizzle.",
      },
      {
        img: c1item4,
        title: "Pepperoni Lovers Pizza",
        price: "$22.00",
        desc: "Loaded with premium pepperoni, mozzarella, and our signature sauce.",
      },
      {
        img: c1item5,
        title: "Veggie Garden Delight",
        price: "$20.00",
        desc: "Bell peppers, mushrooms, olives, red onions, and basil pesto.",
      },
    ],
  },

  // -----------------------------
  // CATEGORY 2 — PASTA (3 items)
  // -----------------------------
  {
    category: "Pasta",
    cover: cover2,
    items: [
      {
        img: c2item1,
        title: "Spaghetti Bolognese",
        price: "$18.00",
        desc: "Slow-cooked beef ragù with parmesan and fresh herbs.",
      },
      {
        img: c2item2,
        title: "Creamy Chicken Alfredo",
        price: "$22.00",
        desc: "Grilled chicken with creamy Alfredo sauce and fettuccine pasta.",
      },
      {
        img: c2item3,
        title: "Penne Arrabbiata",
        price: "$17.00",
        desc: "Penne tossed in a spicy tomato-garlic sauce with chili flakes.",
      },
    ],
  },

  // -----------------------------
  // CATEGORY 3 — BURGERS (4 items)
  // -----------------------------
  {
    category: "Burgers",
    cover: cover3,
    items: [
      {
        img: c3item1,
        title: "Double Beef Smash Burger",
        price: "$23.00",
        desc: "Two smashed beef patties with cheddar, pickles, and house sauce.",
      },
      {
        img: c3item2,
        title: "Crispy Chicken Burger",
        price: "$19.00",
        desc: "Crispy chicken fillet, lettuce, mayo, and brioche bun.",
      },
      {
        img: c3item3,
        title: "BBQ Bacon Burger",
        price: "$24.00",
        desc: "Grilled beef, smoky BBQ sauce, crispy bacon, and cheddar.",
      },
      {
        img: c3item4,
        title: "Spicy Jalapeño Burger",
        price: "$20.00",
        desc: "Jalapeños, spicy sauce, melted cheese, and caramelized onions.",
      },
    ],
  },

  // -----------------------------
  // CATEGORY 4 — DESSERTS (3 items, using ct4 images)
  // -----------------------------
  {
    category: "Desserts",
    cover: cover4, 
    items: [
      {
        img: c4item1,
        title: "Chocolate Lava Cake",
        price: "$14.00",
        desc: "Warm molten chocolate cake served with vanilla ice cream.",
      },
      {
        img: c4item2,
        title: "New York Cheesecake",
        price: "$12.00",
        desc: "Classic creamy cheesecake topped with fresh berry sauce.",
      },
      {
        img: c4item3,
        title: "Tiramisu",
        price: "$13.00",
        desc: "Layers of espresso-soaked ladyfingers with mascarpone cream.",
      },
    ],
  },
];

  return (
    <div>
      <PageBanner title="Our Menu" text="good food fresh ingredients" />
      <section className="w-full mt-20 py-16 bg-white">
      {mainMenuData.map((menu, i) => (
        <div key={i} className="mb-40">
          {/* Title */}
          <div className="text-center mb-10 relative">
            <LazyLoadImage effect='blur' src={menu.cover} alt='cove photo'/>
            <h2 className="text-6xl font-bold tracking-wide text-(--text-color) absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{menu.category}</h2>
          </div>

          {/* Items  */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-10 px-6 ">
            {menu.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 border-b border-(--secondary-color) pb-6 mx-16"
              >
                <div className=" overflow-hidden ">
                  <LazyLoadImage 
                    effect='blur'
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold text-(--text-color)">{item.title}</h4>
                    <span className="text-(--primary-color) font-semibold text-xl">{item.price}</span>
                  </div>

                  <p className="p-text  mt-1 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
    </div>
  )
}

export default Menu