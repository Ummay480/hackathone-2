import React from "react";
import NavBar from "@/components/NavBar";
import StatsSection from "@/components/StatsSection";
import SnackSection from "@/components/Snack"; // Renamed the import to avoid conflict
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";

const SnackPage = () => {
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
        <SnackSection />
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

export default SnackPage; // ✅ Correctly export the Page component

