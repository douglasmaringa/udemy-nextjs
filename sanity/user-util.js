import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "artshop",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});



export async function createUser(userData) {
  const { name, email } = userData;

  // Create a new user document
  const newUser = await client.create({
    _type: "user",
    name,
    email,
    createdAt: new Date().toISOString(),
  });

  return newUser;
}

 
export async function getUserByEmail(email) {
    return client.fetch(
      groq`*[_type == "user" && email == $email]{
        _id,
        createdAt,
        name,
        email
      }`,
      { email }
    );
  }