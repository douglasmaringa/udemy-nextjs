import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "udemy-shop",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

// Function to get orders by email and sort by the latest
export async function getOrdersByEmail(email) {
    try {
      // Query orders from Sanity with a GROQ query
      const orders = await client.fetch(
        `*[_type == 'order' && email == $email] | order(createdAt desc)`,
        { email },
        {next: {
          revalidate: 1, //revalidate every 30 days
       }});
  
      // Return the sorted orders
      return orders;
    } catch (error) {
      // Handle errors appropriately
      console.error('Error getting orders:', error.message);
      throw new Error('Failed to get orders');
    }
  }
  
  export async function createOrder(email,cart) {
    console.log(email,cart);
    try {
      // Create an array to store the promises for creating each order
      const orderCreationPromises = [];
  
      // Iterate over the orderDataArray and create a promise for each order
      cart.forEach((orderData) => {
        // Extract order data
        const { name, quantity, price,color} = orderData;
  
        // Create a promise for creating each order
        const orderCreationPromise = client.create({
          _type: 'order',
          name,
          qty: quantity,
          price,
          color,
          paid: true,
          delivered: false,
          email: email,
          createdAt: new Date().toISOString(),
        });
  
        // Add the promise to the array
        orderCreationPromises.push(orderCreationPromise);
      });
  
      // Wait for all order creation promises to resolve
      const createdOrders = await Promise.all(orderCreationPromises);
  
      // Return the created orders
      return createdOrders;
    } catch (error) {
      // Handle errors appropriately
      console.error('Error creating order:', error.message);
      throw new Error('Failed to create order');
    }
  }
  
