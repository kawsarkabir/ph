import React from "react";

export default function Post({ post }) {
  const { title, description, likeCount } = post || {};
  return (
    <div className="rounded p-6 border mt-4">
      <h2>{title}</h2>
      <p>{description}</p>
      <small>{likeCount}</small>
    </div>
  );
}
