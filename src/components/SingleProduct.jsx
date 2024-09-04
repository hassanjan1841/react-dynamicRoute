import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./ui/Loading";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-[90vh] bg-gray-100 p-8 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Product Image */}
        <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-[500px] object-cover"
          />
          <span className="absolute top-4 right-4 bg-slate-800 text-white text-xs px-3 py-1 rounded-full">
            New
          </span>
        </div>

        {/* Product Details */}
        <div className="bg-white p-10 rounded-xl shadow-2xl space-y-8">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            {product.title}
          </h1>
          <p className="text-slate-500 text-sm uppercase tracking-wide">
            {product.category}
          </p>
          <p className="text-3xl font-bold text-slate-900 mb-4">
            ${product.price}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center space-x-2 text-yellow-500">
            {[...Array(Math.floor(product.rating))].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.9 8.26h8.71l-7.07 5.14 2.91 8.26-7.05-5.14-7.06 5.14 2.91-8.26-7.07-5.14h8.72z" />
              </svg>
            ))}
            {product.rating % 1 ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" style={{ stopColor: "currentColor" }} />
                    <stop offset="50%" style={{ stopColor: "transparent" }} />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half)"
                  d="M12 2l2.9 8.26h8.71l-7.07 5.14 2.91 8.26-7.05-5.14-7.06 5.14 2.91-8.26-7.07-5.14h8.72z"
                />
              </svg>
            ) : null}
            <span className="text-slate-600 text-sm ml-2">
              ({product.rating})
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <button className="flex-1 py-4 bg-slate-900 text-white rounded-md hover:bg-slate-700 transition duration-300 shadow-md text-lg font-medium">
              Add to Cart
            </button>
            <button className="flex-1 py-4 bg-slate-100 text-slate-900 rounded-md hover:bg-slate-200 transition duration-300 shadow-md text-lg font-medium">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
