import React from "react";

const Single = ({ us }) => {
    const {title, id, userId, completed} = us
  console.log(us);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
            <h1>{id}</h1>
          <h2 className="card-title">{us.title}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
