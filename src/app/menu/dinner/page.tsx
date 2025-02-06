import React from "react";
import NavBar from "@/components/NavBar";
import StatsSection from "@/components/StatsSection";
import DinnerSection from "@/components/Dinner"; // Renamed the import to avoid conflict
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";

const DinnerPage = () => {
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
        <DinnerSection />
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

export default DinnerPage; // ✅ Correctly export the Page component

