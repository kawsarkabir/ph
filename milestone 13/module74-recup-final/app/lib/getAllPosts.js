export default async function getAllPosts() {
  const res = await fetch("http://localhost:3004/posts");
  return res.json();
}
