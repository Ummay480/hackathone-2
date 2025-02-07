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

async function getChef(slug: string): Promise<Chef | null> { // Explicitly return null
  try {
    const res = await fetch(`https://sanity-nextjs-rouge.vercel.app/api/chefs?slug=${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
        const errorText = await res.text(); // Get error message from response
        console.error("Failed to fetch chef:", res.status, errorText); // Log status and error
        return null;
    }

    const data: Chef[] = await res.json();
    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Error fetching chef:", error);
    return null;
  }
}

export default async function ChefPage({ params }: { params: { slug: string } }) {
  if (!params || !params.slug) {
    return notFound();
  }

  const chef = await getChef(params.slug);

  if (!chef) {
    return notFound();
  }

  return (
    <>
      <h1>{chef.name}</h1>
      <p>{chef.specialty}</p>
      <p>{chef.bio}</p>
      <p>Experience: {chef.experience}</p>
      {/* Add Image component if image URL is valid */}
      {chef.image && (
          <Image src={chef.image} alt={chef.name} width={500} height={500} />
      )}
    </>
  );
}


export async function generateStaticParams() {
  return [{ params: { slug: 'placeholder' } }]; // Return a placeholder
}

export const dynamicParams = true; // Key change: Indicate dynamic params