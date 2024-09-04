import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Chip from "./Chip";
import Loading from "./ui/Loading";
import Filters from "./Filters";
import Pagination from "./Pagination";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentLimit, setCurrentLimit] = useState(10);
  const [sortOrder, setSortOrder] = useState({
    sortMethod: "",
    sortBy: "",
  });

  const currentPage = currentLimit / 10;

  const sortTitle =
    sortOrder.sortBy === "low-to-high" || sortOrder.sortBy === "high-to-low"
      ? "price"
      : "title";
  // Construct the URL based on current state
  const constructUrl = () => {
    const baseUrl =
      chosenCategory === "All"
        ? sortOrder.sortMethod !== "" && currentLimit === 10
          ? `https://dummyjson.com/products?sortBy=${sortTitle}&order=${sortOrder.sortMethod}`
          : sortOrder.sortMethod === "" && currentLimit === 10
            ? "https://dummyjson.com/products"
            : `https://dummyjson.com/products?skip=${currentLimit}&limit=10&sortBy=${sortTitle}&order=${sortOrder.sortMethod}`
        : sortOrder.sortMethod !== "" && currentLimit > 10
          ? `https://dummyjson.com/products/category/${chosenCategory}?sortBy=${sortTitle}&order=${sortOrder.sortMethod}&skip=${currentLimit}&limit=10`
          : "";
    console.log("Base URL:", baseUrl);
    return baseUrl;
    // return `${baseUrl}?sortBy=title&order=${sortOrder}&skip=${currentLimit}&limit=10`;
  };
  // sdfsdf/

  useEffect(() => {
    const url = constructUrl();
    console.log("Fetching from URL:", url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data getting ", data);
        setProducts(data.products);
        setLoading(false);
      });
  }, [chosenCategory, currentLimit, sortOrder]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  const onSortChange = (sortBy) => {
    const sortMethod =
      sortBy === "a-z" ? "asc" : sortBy === "low-to-high" ? "asc" : "desc";
    setSortOrder({ ...sortOrder, sortMethod, sortBy });
  };

  const handlePageChange = (page) => {
    console.log("Page changed to", page);
    setCurrentLimit(page); // Adjust offset based on page
    setLoading(true); // Set loading state true when page changes
  };

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
              label={category.name}
              isChosen={category.slug == chosenCategory}
              onClick={() => setChosenCategory(category.slug)}
            />
          ))}
        </div>

        {/* Filters */}
        <Filters onSortChange={onSortChange} chosenFilter={sortOrder.sortBy} />

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* Pagination */}
        <Pagination
          currentLimit={currentLimit}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;
