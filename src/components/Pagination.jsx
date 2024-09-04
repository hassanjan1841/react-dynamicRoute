import React from "react";

const Pagination = ({
  currentLimit,
  onPageChange,
  currentPage,
  totalPages,
}) => {
  // const handlePageChange = (page) => {};

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentLimit - 10)}
        className={`px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 ${currentLimit === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"} transition`}
        disabled={currentLimit === 10}
      >
        &lt;
      </button>

      <button
        className={`px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 $"hover:bg-gray-100"} transition`}
      >
        {currentPage}
      </button>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentLimit + 10)}
        className={`px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 "hover:bg-gray-200"} transition ${totalPages < 30 ? "opacity-50 cursor-not-allowed" : ""}}`}
        disabled={totalPages < 30}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
