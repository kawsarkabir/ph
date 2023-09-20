import React from "react";
import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
  const comments = useLoaderData();
  return (
    <div>
      <h1 className="text-center text-3xl">
        this is a comments:{comments.length}
      </h1>
      <div className="grid grid-cols-4 gap-4 px-3 mt-10 ">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
