import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div> 
      <h1>this is dynamic page: {params.product}</h1>
      <h2>search by: {searchParams.category}</h2>
    </div>
  );
};

export default DynamicPage;
