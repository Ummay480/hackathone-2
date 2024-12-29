import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FoodMenu from "@/components/FoodMenu";
import WhyChooseUs from "@/components/WhyChooseUs";
import Menu from "@/components/Menu";
import Members from "@/components/Members";
import BlogSection from "@/components/BlogSection";
import CreativeProcess from "@/components/CreativeProcess";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials2";


export default function Home() {
  return (
    <>
      <main className="bg-black px-4 sm:px-2 md:px-2 lg:px-20 overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <FoodMenu />
        <WhyChooseUs />
        <StatsSection />
        <Menu />
        <Members />
        <Testimonials />
        <div className="my-10">
        <CreativeProcess />
        </div>
        <BlogSection />
      </main>
    </>
  );
}
