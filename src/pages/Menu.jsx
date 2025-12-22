import React from "react";
import PageBanner from "../components/common/PageBanner";

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
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();
  const mainMenuData = [
    // -----------------------------
    // CATEGORY 1 — PIZZA
    // -----------------------------
    {
      categoryKey: "pizza",
      cover: cover1,
      items: [
        {
          img: c1item1,
          titleKey: "smokeyBBQChickenPizza",
          price: "$21.00",
          descKey: "smokeyBBQChickenPizza",
        },
        {
          img: c1item2,
          titleKey: "fourCheeseRicottaPizza",
          price: "$24.00",
          descKey: "fourCheeseRicottaPizza",
        },
        {
          img: c1item3,
          titleKey: "classicMargherita",
          price: "$19.00",
          descKey: "classicMargherita",
        },
        {
          img: c1item4,
          titleKey: "pepperoniLoversPizza",
          price: "$22.00",
          descKey: "pepperoniLoversPizza",
        },
        {
          img: c1item5,
          titleKey: "veggieGardenDelight",
          price: "$20.00",
          descKey: "veggieGardenDelight",
        },
      ],
    },

    // -----------------------------
    // CATEGORY 2 — PASTA
    // -----------------------------
    {
      categoryKey: "pasta",
      cover: cover2,
      items: [
        {
          img: c2item1,
          titleKey: "spaghettiBolognese",
          price: "$18.00",
          descKey: "spaghettiBolognese",
        },
        {
          img: c2item2,
          titleKey: "chickenAlfredo",
          price: "$22.00",
          descKey: "chickenAlfredo",
        },
        {
          img: c2item3,
          titleKey: "penneArrabbiata",
          price: "$17.00",
          descKey: "penneArrabbiata",
        },
      ],
    },

    // -----------------------------
    // CATEGORY 3 — BURGERS
    // -----------------------------
    {
      categoryKey: "burgers",
      cover: cover3,
      items: [
        {
          img: c3item1,
          titleKey: "doubleBeefBurger",
          price: "$23.00",
          descKey: "doubleBeefBurger",
        },
        {
          img: c3item2,
          titleKey: "crispyChickenBurger",
          price: "$19.00",
          descKey: "crispyChickenBurger",
        },
        {
          img: c3item3,
          titleKey: "bbqBaconBurger",
          price: "$24.00",
          descKey: "bbqBaconBurger",
        },
        {
          img: c3item4,
          titleKey: "spicyJalapenoBurger",
          price: "$20.00",
          descKey: "spicyJalapenoBurger",
        },
      ],
    },

    // -----------------------------
    // CATEGORY 4 — DESSERTS
    // -----------------------------
    {
      categoryKey: "desserts",
      cover: cover4,
      items: [
        {
          img: c4item1,
          titleKey: "lavaCake",
          price: "$14.00",
          descKey: "lavaCake",
        },
        {
          img: c4item2,
          titleKey: "cheesecake",
          price: "$12.00",
          descKey: "cheesecake",
        },
        {
          img: c4item3,
          titleKey: "tiramisu",
          price: "$13.00",
          descKey: "tiramisu",
        },
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden w-full max-w-full flex flex-col items-center ">
      <PageBanner title={t("menu-page.title")} text={t("menu-page.text")} />

      <section className="w-full max-w-7xl mt-20 py-16 bg-white border border-(--secondary-color) md:p-10 rounded-2xl">
        {mainMenuData.map((menu) => (
          <div key={menu.categoryKey} className="mb-40">
            {/* Title */}
            <div className="text-center mb-10 relative">
              <LazyLoadImage
                effect="blur"
                src={menu.cover}
                alt={t(`menu-page.categories.${menu.categoryKey}`)}
                className="object-cover w-fit"
              />
              <h2 className="text-3xl md:text-6xl font-bold tracking-wide text-(--text-color) absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {t(`menu-page.categories.${menu.categoryKey}`)}
              </h2>
            </div>

            {/* Items  */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 px-6 ">
              {menu.items.map((item) => (
                <div
                  key={item.titleKey}
                  className="flex flex-col md:flex-row items-start md:gap-5 border-b border-(--secondary-color) pb-6 lg:mx-16"
                >
                  <div className=" overflow-hidden ">
                    <LazyLoadImage
                      effect="blur"
                      src={item.img}
                      alt={t(`menu-page.items.${item.titleKey}.title`)}
                      className="w-20 h-20 object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="md:text-lg lg:text-xl font-semibold text-(--text-color)">
                        {t(`menu-page.items.${item.titleKey}.title`)}
                      </h4>
                      <span className="text-(--primary-color) font-semibold text-lg md:text-xl">
                        {item.price}
                      </span>
                    </div>

                    <p className="p-text  mt-1 text-sm lg:text-lg">
                      {t(`menu-page.items.${item.descKey}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Menu;
