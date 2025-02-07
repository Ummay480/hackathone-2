import { notFound } from "next/navigation";
import Image from "next/image";
import { GetServerSideProps } from "next";

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

    const data: Chef[] = await res.json();
    return data.length ? data[0] : null; // Assuming API returns an array
  } catch (error) {
    console.error("Error fetching chef:", error);
    return null;
  }
}

export default async function ChefPage({ params }: { params: Record<string, string> }) {
  const chef = await getChef(params.slug);

  if (!chef) {
    return notFound(); // ❌ Show 404 if chef not found
  }

  return (
    <div>
      <h1>{chef.name}</h1>
      <h2>{chef.specialty}</h2>
      <Image src={chef.image} alt={chef.name} width={500} height={500} />
      <p>{chef.bio}</p>
      <p>Experience: {chef.experience}</p>
    </div>
  );
}
