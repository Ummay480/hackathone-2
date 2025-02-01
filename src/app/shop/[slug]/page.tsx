import { notFound } from "next/navigation";

interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// 🚀 Fetch product by slug dynamically
async function getProduct(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://your-api-url.com/products?slug=${slug}`, {
      cache: "no-store", // Fetch fresh data every time
    });
    const data = await res.json();
    return data.length ? data[0] : null; // Assuming API returns an array
  } catch (error) {
    return null;
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    return notFound(); // ❌ Show 404 if product not found
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold">Price: ${product.price}</p>
    </div>
  );
}
