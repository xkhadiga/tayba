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

import { FaFacebookF, FaTwitter, FaInstagram,  } from "react-icons/fa";
import TestimonialsSection from "../components/home_components/TestimonialsSection";

function About() {
  const [title, setTitle] = useState("About Us");
  const [text, setText] = useState("get to know more about Tayba");
  const aboutData = [
    {
      title: "Our History",
      subtitle: "Discover Our Story",
      img: AboutImg,
      paragraphs: [
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.",
        "Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
      ],
    },
    {
      title: "Who We Are",
      subtitle: "Welcome to Tayba",
      img: AboutImg2,
      paragraphs: [
        "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
        "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus.",
      ],
    },
  ];
  const aboutUsData = [
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
    {
      number: "300+",
      title: "Best Recipes",
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
      <PageBanner title={title} text={text} />
      {/* ABOUT US */}
      <div className=" mt-64">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className={`flex w-full mb-16 items-center justify-center gap-18 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <section className="flex ">
              <LazyLoadImage src={item.img} />
            </section>

            <section className="w-1/3 flex flex-col ">
              <h2 className="text-5xl font-semibold mb-2 text-(--text-color)">
                {item.title}
              </h2>
              <h3 className="p-text text-lg"> {item.subtitle}</h3>
              {item.paragraphs.map((paragraph, paragraphIndex) => (
                <p className="p-text my-6 text-lg" key={paragraphIndex}>
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
        <div className="flex my-64 gap-16 items-center justify-center text-center">
          {aboutUsData.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2 ">
                <h1 className=" text-5xl font-semibold text-(--text-color)">
                  {item.number}
                </h1>
                <p className="p-text text-lg">{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Chefs */}
      <section className="text-center mb-64 ">
              <h1 className="text-5xl font-semibold text-(--text-color) mb-2">Meet Our Chefs</h1>
          <p className="text-lg p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className="flex mt-16 gap-16 items-center justify-center text-center">
    
          {chefsData.map((item, index) => {
            return (
              <div key={index} className="flex flex-col  ">
                <LazyLoadImage src={item.img} />
                <h1 className=" text-3xl font-semibold text-(--text-color) mt-5">
                  {item.name}
                </h1>
                <p className="p-text text-lg">{item.role}</p>
                <div className="border-t border-[#dadada] mt-6">
                           <ul className="flex items-center justify-center gap-4 p-3 text-xl p-text">
                                <li><a href="#" ><FaFacebookF /></a></li>
                                <li><a href="#" ><FaTwitter /></a></li>
                                <li><a href="#" ><FaInstagram /></a></li>
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
