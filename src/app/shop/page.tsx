import React from 'react';
import NavBar from '@/components/NavBar';
import HeroBanner from '@/components/HeroBanner';
import ProductDetails from '@/components/ProductDetails';
import SimilarProducts from '@/components/SimilarProducts';



const Shop = () => (
  <>
    
    <main>
    <NavBar/>
      {/* Hero Banner */}
      <div >
      <HeroBanner title="Our Shop" />
      </div>

      <h2 className="text-2xl font-bold my-6 px-10">Shop Details</h2>
      
      <div className='px-20'>
      <ProductDetails />
      </div>
      <div className='px-20'>
       <SimilarProducts />
       </div>
    </main>
 
  </>
);

export default Shop;
