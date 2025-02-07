import { notFound } from "next/navigation";
import Image from "next/image";

// ✅ Manually define PageProps
interface PageProps {
  params: { slug: string };
}

interface Chef {
  id: string;
  slug: string;
  name: string;
  bio: string;
  image: string;
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

// ✅ Fix type usage in component
export default async function ChefDetailsPage({ params }: PageProps) {
  if (!params?.slug) {
    return notFound();
  }

  const chef = await getChef(params.slug);

  if (!chef) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {chef.image && (
            <Image
              src={chef.image}
              alt={chef.name}
              width={500}
              height={350}
              className="w-full h-[350px] object-cover rounded-md"
            />
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{chef.name}</h1>
          <p className="text-md text-gray-600 mt-6">{chef.bio}</p>
        </div>
      </div>
    </div>
  );
}
