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
import { useTranslation } from "react-i18next";


function MenuSection() {
  const {t} = useTranslation();
const menuData = [
  {
    category: "menu.pizza.title",
    categoryBanner: banner1,
    categoryImg: category1,
    items: [
      {
        id: 1,
        img: c1item1,
        title: "menu.pizza.oakeySmokey.title",
        description: "menu.pizza.oakeySmokey.desc",
        price: 21,
      },
      {
        id: 2,
        img: c1item2,
        title: "menu.pizza.whiteRicotta.title",
        description: "menu.pizza.whiteRicotta.desc",
        price: 24,
      },
      {
        id: 3,
        img: c1item3,
        title: "menu.pizza.margherita.title",
        description: "menu.pizza.margherita.desc",
        price: 22,
      },
      {
        id: 4,
        img: c1item4,
        title: "menu.pizza.calzone.title",
        description: "menu.pizza.calzone.desc",
        price: 23,
      },
      {
        id: 5,
        img: c1item5,
        title: "menu.pizza.mercyMargherita.title",
        description: "menu.pizza.mercyMargherita.desc",
        price: 18,
      },
    ],
  },

  {
    category: "menu.pasta.title",
    categoryBanner: banner2,
    categoryImg: category2,
    items: [
      {
        id: 1,
        img: c2item1,
        title: "menu.pasta.amatriciana.title",
        description: "menu.pasta.amatriciana.desc",
        price: 21,
      },
      {
        id: 2,
        img: c2item2,
        title: "menu.pasta.carbonara.title",
        description: "menu.pasta.carbonara.desc",
        price: 24,
      },
      {
        id: 3,
        img: c2item3,
        title: "menu.pasta.lasagna.title",
        description: "menu.pasta.lasagna.desc",
        price: 22,
      },
    ],
  },

  {
    category: "menu.burger.title",
    categoryBanner: banner3,
    categoryImg: category3,
    items: [
      {
        id: 1,
        img: c3item1,
        title: "menu.burger.doubleBarrel.title",
        description: "menu.burger.doubleBarrel.desc",
        price: 21,
      },
      {
        id: 2,
        img: c3item2,
        title: "menu.burger.classicHavana.title",
        description: "menu.burger.classicHavana.desc",
        price: 24,
      },
      {
        id: 3,
        img: c3item3,
        title: "menu.burger.bbqChicken.title",
        description: "menu.burger.bbqChicken.desc",
        price: 22,
      },
      {
        id: 4,
        img: c3item4,
        title: "menu.burger.havanaCombo.title",
        description: "menu.burger.havanaCombo.desc",
        price: 23,
      },
    ],
  },
];

  return (
    <div className="w-full flex flex-col  ">
              <h1 className="text-3xl lg:text-5xl font-semibold text-center mb-2">{t("menu.header.title")}</h1>
        <p className="p-text mb-10 text-center">{t("menu.header.subtitle")}
</p>
      {menuData.map((category, index) => (
        <section
          className={`flex flex-col md:flex-row px-2 mb-12 w-full items-center gap-6 lg:gap-32 justify-center ${
            index % 2 !== 0 ? "flex-col md:flex-row-reverse " : ""
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
          <div className="flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center md:text-start">{t(category.category)}</h2>

            <ul className="space-y-1 md:space-y-4 flex flex-col ">
              {category.items.map((item) => (
                <li key={item.id} className="flex gap-1 md:gap-4 items-center ">
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
                      <span className="font-semibold md:text-lg md:w-[60vh]">
                        {t(item.title)}
                      </span>
                      <span className="text-[#ea462b] font-semibold md:text-lg">
                        ${item.price.toFixed(2)}
                      </span>
                    </h4>
                    <p className="p-text text-sm md:text-base">{t(item.description)}</p>
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
