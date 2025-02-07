import { notFound } from "next/navigation";
import Image from "next/image";
import { PageProps } from "next";

interface Chef {
  id: string;
  slug: string;
  name: string;
  bio: string;
  experience: string;
  image: string;
  specialty: string;
}

// ✅ Define the getChef function
async function getChef(slug: string): Promise<Chef | null> {
  try {
    const res = await fetch(`https://sanity-nextjs-rouge.vercel.app/api/chefs?slug=${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data: Chef[] = await res.json();
    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Error fetching chef:", error);
    return null;
  }
}

// ✅ Explicitly define `PageProps` type
export default async function ChefPage({ params }: PageProps<{ slug: string }>) {
  if (!params?.slug) {
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
      {chef.image && (
        <Image src={chef.image} alt={chef.name} width={500} height={500} />
      )}
    </>
  );
}

// ✅ Correct the format of generateStaticParams
export async function generateStaticParams() {
  return [{ slug: 'placeholder' }]; // Correct format
}

export const dynamicParams = true; // Enable dynamic params
