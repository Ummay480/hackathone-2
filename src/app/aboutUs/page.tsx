import React from 'react';
import NavBar from '@/components/NavBar';
import HeroBenner from '@/components/HeroBanner';
import WhyChooseUs from '@/components/WhyChooseUs 2';
import TeamMembers from '@/components/TeamMembers';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';
import FoodMenu2 from "@/components/FoodMenu2";



const aboutPage = () => {
  return (
    <>
        <NavBar/>
      <HeroBenner title="About Us" />
      <AboutUs/>
      <WhyChooseUs />
         <TeamMembers />
         <div className='bg-white'>
           <Testimonials />
           <FoodMenu2/>
         </div>
    
 
    </>
  );
};

export default aboutPage;
