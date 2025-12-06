import React, { useState } from "react";
import AboutImg from "../assets/about/ab1.png";
import AboutImg2 from "../assets/about/ab2.png";
import ChefImg from "../assets/about/chef1.jpg";
import SignatureImg from "../assets/about/signature.png";
import PageBanner from "../components/common/PageBanner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    }
  ];
  return (
    <div>
      <PageBanner title={title} text={text} />
      <div>
        {aboutData.map((item, index) => (
          <div
            key={index}
            className={`flex w-full my-16 items-center justify-center gap-18 ${
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
      <section>
        <div className="flex my-32 gap-16 items-center justify-center text-center">
          {aboutUsData.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2 " >
                <h1 className=" text-5xl font-semibold text-(--text-color)">{item.number}</h1>
                <p className="p-text text-lg">{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default About;
