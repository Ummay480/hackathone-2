import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FoodMenu from "@/components/FoodMenu";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FoodMenu />
        <WhyChooseUs/>
      </main>
      <Footer />
    </>
  );
}
