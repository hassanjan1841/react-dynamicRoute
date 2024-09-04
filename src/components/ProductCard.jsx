import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { images, title, price, category, id } = product;
  // console.log(product);
  return (
    <Link to={`/product/${id}`}>
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-56 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">{category}</p>
          <p className="text-lg font-semibold text-blue-500">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
