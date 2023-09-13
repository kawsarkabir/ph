import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogs]);
  return (
    <div>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Blogs;
