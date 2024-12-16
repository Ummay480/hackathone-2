

const AboutSection = () => {
    return (
      <section className="py-16 bg-white text-center">
        <h3 className="text-3xl font-semibold text-gray-800">We Create the Best Food Products</h3>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Experience delicious meals prepared with love by our expert chefs. We focus on quality, hygiene, and taste.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <img src="/images/about1.jpg" className="w-60 rounded-lg shadow-md" alt="Dish" />
          <img src="/images/about2.jpg" className="w-60 rounded-lg shadow-md" alt="Dish" />
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  