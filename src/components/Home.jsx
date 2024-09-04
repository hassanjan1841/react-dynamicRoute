import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Chip from "./Chip";
import Loading from "./ui/Loading";
import Filters from "./Filters";

const Home = () => {
  const categories = ["Electronics", "Clothing", "Home Appliances", "Books"];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const [chosenCategory, setChosenCategory] = useState("All");

  if (loading) return <Loading />;
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Explore Our Products
        </h1>

        {/* Category Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Chip
            label={"All"}
            isChosen={chosenCategory == "All"}
            onClick={() => setChosenCategory("All")}
          />
          {categories.map((category, index) => (
            <Chip
              key={index}
              label={category}
              isChosen={category == chosenCategory}
              onClick={() => setChosenCategory(category)}
            />
          ))}
        </div>

        {/* Filters */}
        <Filters />

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
