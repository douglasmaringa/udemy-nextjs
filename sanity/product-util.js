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
    return client.fetch(
      groq`*[_type == "product" && slug.current == $slug]{
        _id,
        createdAt,
        name,
        slug,
        description,
        price,
        "image": image.asset->url,
        "slug": slug.current,
      }`,
      { slug }
    );
  }
  
  
  export async function getProducts() {
    return client.fetch(
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
      }`
    );
  }