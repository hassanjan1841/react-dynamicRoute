function Filters() {
  return (
    <div className="flex justify-start space-x-3 mb-8">
      <button className="px-4 py-2 bg-white shadow-md hover:shadow-lg rounded-md text-gray-700 transition duration-300">
        A-Z
      </button>
      <button className="px-4 py-2 bg-white shadow-md hover:shadow-lg rounded-md text-gray-700 transition duration-300">
        Z-A
      </button>
      <button className="px-4 py-2 bg-white shadow-md hover:shadow-lg rounded-md text-gray-700 transition duration-300">
        Price: Low to High
      </button>
      <button className="px-4 py-2 bg-white shadow-md hover:shadow-lg rounded-md text-gray-700 transition duration-300">
        Price: High to Low
      </button>
    </div>
  );
}
export default Filters;
