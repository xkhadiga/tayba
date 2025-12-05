


import AboutSection from "../components/home_components/AboutSection";
import MainCarousel from "../components/home_components/MainCarousel";
import MenuSection from "../components/home_components/MenuSection";
import PopularDishes from "../components/home_components/PopularDishes";
function HomePage() {

 
  return (
    <div className="homepage w-full flex flex-col gap-32  ">
      {/*section 1 - hero */}
     <MainCarousel />


      {/*section 2 - about */}
    <AboutSection />
    
      {/*section 3 - popular dishes */}
      <PopularDishes />

      {/* section 4 - menu */}
      <MenuSection />

      {/*section 4 - testimonials */}

      {/*section 5 - contact */}
    </div>
  );
}

export default HomePage;
