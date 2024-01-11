import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

const commentsQuery = groq`
  *[_type == "comment" && product._ref == $productId] {
    _id,
    email,
    commentText,
    stars,
    createdAt
  }
`;

export async function createComment(productId, commentText, stars, email) {
  const currentDate = new Date().toISOString();

  const commentData = {
    product: {
      _type: "reference",
      _ref: productId,
    },
    email,
    commentText,
    stars,
    createdAt: currentDate,
  };

  const result = await client.create({
    _type: "comment",
    ...commentData,
  });

  return result;
}

export async function getCommentsByProductId(productId) {
  const params = { productId };
  const comments = await client.fetch(commentsQuery, params);
  //console.log(comments);
  return comments;
}
