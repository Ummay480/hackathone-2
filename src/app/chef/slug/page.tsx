import { notFound } from "next/navigation";
import Image from "next/image";

interface Chef {
  id: string;
  slug: string;
  name: string;
  bio: string;
  experience: string;
  image: string;
  specialty: string;
}

// 🚀 Fetch chef by slug dynamically
async function getChef(slug: string): Promise<Chef | null> {
  try {
    const res = await fetch(`https://sanity-nextjs-rouge.vercel.app/api/chefs?slug=${slug}`, {
      cache: "no-store", // Fetch fresh data every time
    });
    const data = await res.json();
    return data.length ? data[0] : null; // Assuming API returns an array
  } catch (error) {
    console.error(error); // Log the error if necessary
    return null;
  }
}

export default async function ChefPage({ params }: { params: { slug: string } }) {
  const chef = await getChef(params.slug);

  if (!chef) {
    return notFound(); // ❌ Show 404 if chef not found
  }

  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <Image src={chef.image} alt={chef.name} className="w-40 h-40 rounded-full mx-auto object-cover" />
      <h1 className="text-3xl font-bold mt-4">{chef.name}</h1>
      <p className="text-lg text-gray-600 italic">{chef.specialty}</p>
      <p className="mt-3 text-gray-700">{chef.bio}</p>
      <p className="mt-2 font-semibold">Experience: {chef.experience}</p>
    </div>
  );
}
