import React, { useState } from "react";
import AboutImg from "../assets/about/ab1.png";
import AboutImg2 from "../assets/about/ab2.png";
import ChefImg from "../assets/about/chef1.jpg";
import TeamImg from "../assets/about/team1.jpg";
import TeamImg2 from "../assets/about/team2.jpg";
import TeamImg3 from "../assets/about/team3.jpg";
import SignatureImg from "../assets/about/signature.png";
import PageBanner from "../components/common/PageBanner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import TestimonialsSection from "../components/home_components/TestimonialsSection";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const aboutData = [
    {
      title: t("about-page.about.history.title"),
      subtitle: t("about-page.about.history.subtitle"),
      img: AboutImg,
      paragraphs: [t("about-page.about.history.p1"), t("about-page.about.history.p2")],
    },
    {
      title: t("about-page.about.who.title"),
      subtitle: t("about-page.about.who.subtitle"),
      img: AboutImg2,
      paragraphs: [t("about-page.about.who.p1"), t("about-page.about.who.p2")],
    },
  ];

const aboutUsData = [
  {
    number: "60+",
    title: t("about-page.aboutUsStats.dishes"),
  },
  {
    number: "25k",
    title: t("about-page.aboutUsStats.customers"),
  },
  {
    number: "10+",
    title: t("about-page.aboutUsStats.experience"),
  },
  {
    number: "12",
    title: t("about-page.aboutUsStats.chefs"),
  },
  {
    number: "300+",
    title: t("about-page.aboutUsStats.recipes"),
  },
];
  const chefsData = [
    {
      name: "John Doe",
      role: "Chef",
      img: TeamImg,
    },
    {
      name: "Jozefo Teodora",
      role: "Chef",
      img: TeamImg2,
    },
    {
      name: "Raya Leach",
      role: "Chef",
      img: TeamImg3,
    },
  ];
  return (
    <div>
      <PageBanner title={t("about-page.title")} text={t("about-page.text")} />
      {/* ABOUT US */}
      <div className="mt-20 md:mt-32 lg:mt-64 ">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row w-full mb-16 items-center justify-center gap-8 md:gap-12 lg:gap-18 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <section className="flex w-[70%] md:w-[50%] lg:w-fit">
              <LazyLoadImage src={item.img} />
            </section>

            <section className=" px-2 lg:w-1/3 flex flex-col ">
              <h2 className="text-3xl lg:text-5xl font-semibold mb-2 text-(--text-color)">
                {item.title}
              </h2>
              <h3 className="p-text text-sm md:text-lg"> {item.subtitle}</h3>
              {item.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  className="p-text my-6 text-sm md:text-lg"
                  key={paragraphIndex}
                >
                  {paragraph}
                </p>
              ))}

              {index % 2 === 0 ? (
                <div className="flex items-center justify-center gap-4">
                  <LazyLoadImage src={ChefImg} />
                  <LazyLoadImage src={SignatureImg} />
                </div>
              ) : (
                ""
              )}
            </section>
          </div>
        ))}
      </div>
      {/* Our numbers */}
      <section>
        <div className="grid grid-cols-3 lg:flex my-32 lg:my-64 gap-8 lg:gap-16 items-center justify-center text-center">
          {aboutUsData.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2 ">
                <h1 className="text-3xl md:text-5xl font-semibold text-(--text-color)">
                  {item.number}
                </h1>
                <p className="p-text text-sm lg:text-lg">{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Chefs */}
      <section className="text-center mb-32 lg:mb-64 ">
        <h1 className="text-3xl lg:text-5xl font-semibold text-(--text-color) mb-2">
          {t("about-page.chefs.title")}
        </h1>
        <p className="text-lg p-text">
          {t("about-page.chefs.text")}
        </p>
        <div className="flex flex-col md:flex-row mt-16 gap-8 lg:gap-16 items-center justify-center text-center px-2">
          {chefsData.map((item, index) => {
            return (
              <div key={index} className="flex flex-col  ">
                <LazyLoadImage src={item.img} />
                <h1 className="text-xl md:text-3xl font-semibold text-(--text-color) mt-5">
                  {item.name}
                </h1>
                <p className="p-text text-sm md:text-lg">{item.role}</p>
                <div className="border-t border-[#dadada] mt-2 md:mt-6">
                  <ul className="flex items-center justify-center gap-2 md:gap-4 p-3 text-sm md:text-lg p-text">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Our Reviews */}
      <section className="mt-32 mb-64">
        <TestimonialsSection />
      </section>
    </div>
  );
}

export default About;
