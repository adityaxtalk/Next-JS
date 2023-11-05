import React from "react";

const Shimmersidebar = () => {
  return (
    <div className="bg-white shadow-lg p-4 w-64">
      <div className="animate-pulse flex flex-col space-y-2">
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
        <div className="w-4/5 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default Shimmersidebar;
