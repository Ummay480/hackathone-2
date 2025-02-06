import React from "react";
import NavBar from "@/components/NavBar";
import StatsSection from "@/components/StatsSection";
import BreakfastSection from "@/components/Breakfast"; // Renamed the import to avoid conflict
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";

const Page = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Navbar Component */}
      <NavBar />
      
      {/* HeroBanner with Breakfast Title */}
      <div>
        <HeroBanner title="Break Fast" />
      </div>

      {/* Breakfast Section */}
      <div>
        <BreakfastSection />
      </div>   

      {/* Stats Section */}
      <StatsSection />

      {/* Partners Section */}
      <div>
        <Partners />
      </div>
    </main>
  );
};

export default Page; // Export the Page component instead of BreakFastItems
