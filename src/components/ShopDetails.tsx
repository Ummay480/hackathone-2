import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetails from '@/components/ProductDetails';
import SimilarProducts from '@/components/SimilarProducts';
import SupportSection from '@/components/SupportSection';

const ShopDetails = () => (
  <>
    <Header />
    <main className="container mx-auto px-6">
      <h2 className="text-2xl font-bold my-6">Shop Details</h2>
      <ProductDetails />
      <SimilarProducts />
      <SupportSection />
    </main>
    <Footer />
  </>
);

export default ShopDetails;
