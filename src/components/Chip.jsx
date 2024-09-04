import React from "react";

const Chip = ({ label, isChosen, onClick }) => {
  // console.log(isChosen);
  return (
    <span
      onClick={onClick}
      className={`${isChosen ? "bg-slate-600 text-white" : "bg-white text-black"} px-4 py-2 rounded-full hover:bg-gray-600 hover:cursor-pointer hover:text-white transition duration-300`}
    >
      {label}
    </span>
  );
};

export default Chip;
