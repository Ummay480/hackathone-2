
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FoodMenu from "@/components/FoodMenu";
import WhyChooseUs from "@/components/WhyChooseUs"
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
    
      <main>
        <HeroSection />
        <AboutSection />
        <FoodMenu />
        <WhyChooseUs/>
        <Menu/>
      </main>
     
    </>
  );
}
