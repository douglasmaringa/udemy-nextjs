import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-11-21',
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function createContact(name, email, issue) {
  const currentDate = new Date().toISOString();

  const data = {
    _type: 'contact',
    name,
    email,
    issue,
    createdAt: currentDate,
  };

  // Use the client to create a new document in the 'contact' collection
  const response = await client.create(data).catch((error) => {
    console.error('Error creating contact:', error.message);
    throw new Error('Failed to create contact');
  });

  return response;
}
