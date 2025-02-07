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

// Fetch chef by slug dynamically
async function getChef(slug: string): Promise<Chef | null> {
  try {
    const res = await fetch(`https://sanity-nextjs-rouge.vercel.app/api/chefs?slug=${slug}`, {
      cache: "no-store", // Ensure fresh data on every request
    });

    const data: Chef[] = await res.json();
    return data.length ? data[0] : null; // Assuming API returns an array
  } catch (error) {
    console.error("Error fetching chef:", error);
    return null;
  }
}

// Define the type for props
interface ChefPageProps {
  params: { slug: string };
}

export default async function ChefPage({ params }: ChefPageProps) {
  const chef = await getChef(params.slug);

  if (!chef) {
    return notFound(); // Return 404 page if chef not found
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

// ✅ Fix: Use generateStaticParams to register dynamic routes
export async function generateStaticParams() {
  return []; // Ensure Next.js recognizes this as a dynamic route
}
