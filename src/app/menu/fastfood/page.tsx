import React from "react";
import NavBar from "@/components/NavBar";
import StatsSection from "@/components/StatsSection";
import FastFoodSection from "@/components/FastFood"; // Renamed the import to avoid conflict
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";

const fastFoodPage = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Navbar Component */}
      <NavBar />
      
      {/* HeroBanner with Dinner Title */}
      <div>
        <HeroBanner title="Dinner" />
      </div>

      {/* Dinner Section */}
      <div>
        <FastFoodSection />
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

export default fastFoodPage; // ✅ Correctly export the Page component

