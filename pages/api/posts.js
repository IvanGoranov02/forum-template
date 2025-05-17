export default async function handler(req, res) {
  const response = await fetch('https://6828704d6b7628c529135538.mockapi.io/forum/posts');
  const data = await response.json();
  res.status(200).json({ posts: data });
} 