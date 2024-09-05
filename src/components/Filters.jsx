function Filters({ onSortChange, chosenFilter }) {
  console.log("chosenFilter", chosenFilter);
  return (
    <div className="flex justify-start space-x-3 mb-8">
      <button
        onClick={() => onSortChange("all")}
        className={`${chosenFilter == "all" ? "bg-slate-800 text-white" : "bg-white text-gray-700"} px-4 py-2  shadow-md hover:shadow-lg rounded-md text-gray-700 transition duration-300`}
      >
        All
      </button>
      <button
        onClick={() => onSortChange("a-z")}
        className={`${chosenFilter == "a-z" ? "bg-slate-800 text-white" : "bg-white text-gray-700"} px-4 py-2  shadow-md hover:shadow-lg rounded-md text-gray-700 transition duration-300`}
      >
        A-Z
      </button>
      <button
        onClick={() => onSortChange("z-a")}
        className={`${chosenFilter == "z-a" ? "bg-slate-800 text-white" : "bg-white text-gray-700"} px-4 py-2  shadow-md hover:shadow-lg rounded-md text-gray-700 transition duration-300`}
      >
        Z-A
      </button>
      <button
        onClick={() => onSortChange("low-to-high")}
        className={`${chosenFilter == "low-to-high" ? "bg-slate-800 text-white" : "bg-white text-gray-700"} px-4 py-2  shadow-md hover:shadow-lg rounded-md text-gray-700 transition duration-300`}
      >
        Price: Low to High
      </button>
      <button
        onClick={() => onSortChange("high-to-low")}
        className={`${chosenFilter == "high-to-low" ? "bg-slate-800 text-white" : "bg-white text-gray-700"} px-4 py-2  shadow-md hover:shadow-lg rounded-md text-gray-700 transition duration-300`}
      >
        Price: High to Low
      </button>
    </div>
  );
}
export default Filters;
