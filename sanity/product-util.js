import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "udemy-shop",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getProductBySlug(slug) {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug]{
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      colors
    }`,
    { slug }
    ,
    {next: {
      revalidate: 1, //revalidate every 30 days
   }});

  return product; // Assuming you expect a single product, not an array
}

export async function getAllProducts() {
  const products = await client.fetch(
    groq`*[_type == "product"]{
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      colors
    }`,
    {next: {
      revalidateTag: 1, //revalidate every hour
   }});

  return products;
}

export async function getProducts() {
  const products = await client.fetch(
    groq`*[_type == "product"] | order(createdAt desc) [0...6] {
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      colors
    }`,
    { next: { revalidateTag: 1 } } // revalidate every hour
  );

  return products;
}

