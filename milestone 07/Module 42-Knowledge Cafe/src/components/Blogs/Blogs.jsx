import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmarks }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogs]);
  return (
    <div className="lg:w-2/3 md:w-2/3">
      {blogs.map((blog) => (
        <Blog handleBookmarks={handleBookmarks} blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Blogs;
