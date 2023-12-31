const Posts = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  console.log(posts);
  return (
    <div>
      <h1>total posts: {posts.length}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center">
        {posts.map((post) => (
          <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{post.title}</h2>
              <h2 className="card-title">Like: {post.likeCount}</h2>
              <p>{post.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
