import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Loading Spinner */}
        <div className="w-16 h-16 border-4 border-t-transparent border-black rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
