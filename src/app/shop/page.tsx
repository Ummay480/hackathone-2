import Header from '@/components/Header';

import ProductDetails from '@/components/ProductDetails';
import SimilarProducts from '@/components/SimilarProducts';
import SupportSection from '@/components/SupportSection';
import ProductGallery from '@/components/ProductGallery';

const Shop = () => (
  <>
    <Header />
    <main className="container mx-auto px-6">
      <h2 className="text-2xl font-bold my-6">Shop Details</h2>
      
      <div>
      <ProductDetails />
      </div>
   
      <ProductGallery/>
      <SimilarProducts />
      <SupportSection />
    </main>
 
  </>
);

export default Shop;
