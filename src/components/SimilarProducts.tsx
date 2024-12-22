const SimilarProducts = () => (
    <section className="mt-12">
      <h3 className="text-lg font-bold mb-4">Similar Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['Fresh Lime', 'Chocolate Muffin', 'Burger', 'Fresh Lime'].map((product, idx) => (
          <div key={idx} className="shadow-md p-4 rounded-md">
            <img src={`/product-${idx + 1}.jpg`} alt={product} className="rounded-md" />
            <h4 className="text-md font-medium mt-2">{product}</h4>
            <p className="text-yellow-500">Price: $12.00</p>
          </div>
        ))}
      </div>
    </section>
  );
  export default SimilarProducts;
  