import PropTypes from "prop-types";
import React from "react";

const Blog = ({ blog }) => {
  const { cover, title, author_img, author, posted_date,reading_time,hashtags} = blog;
  return (
    <div>
      <div className="w-10/12 my-10">
        <img className="rounded-lg w-full" src={cover} alt="" />
        <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 mt-5">
          <div>
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div>
            <h3> {author}</h3>
            <h4>{posted_date}</h4>
          </div>
        </div>
        <div>
            <h5>0{reading_time} min read</h5>
        </div>
        </div>
        <h1 className="text-3xl font-semibold my-2">{title}</h1>
        {
            hashtags.map((hash, idx)=> <span key={idx} className="text-gray-500"> #{hash} </span>)
        } <br />
        <button className="border-none text-blue-700 mt-2">Mark read</button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};
export default Blog;
