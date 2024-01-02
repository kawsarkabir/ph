import Link from "next/link";

const PostDetais = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
 
  return (
    <div className="p-5 bg-pink-300 rounded-md">
      <h1>{post.title}</h1>
      <h>post details: {post.description}</h>
      <p>Like Count: {post.likeCount}</p>
      <Link href="/posts">
        <button className="btn btn-accent btn-sm">Back</button>
      </Link>
    </div>
  );
};

export default PostDetais;
