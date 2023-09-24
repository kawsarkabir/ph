import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Product = () => {
  const { products } = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-5 px-5 mt-10">
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
