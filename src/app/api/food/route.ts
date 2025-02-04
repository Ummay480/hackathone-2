import { client } from "@/sanity/lib/client";
import Fetchdata from "@/components/Fetchdata"

export const dynamic = 'force-static'
export async function GET() {
  try {
    const products = await client.fetch(`*[_type == "food"] {
  _id,
  title,
  price,
  priceWithoutDiscount,
  badge,
  "imageUrl": image.asset->url,
  category-> {
    _id,
    title
  },
  description,
  inventory,
  tags
}
`);

    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
    <Fetchdata/>
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}