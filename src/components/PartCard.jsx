import React from "react";

function PartCard({ title, parts, completion }) {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg transition-all duration-300 mb-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-600 text-sm font-semibold">{title}</h3>
        <span className="text-sm text-gray-600">{completion}% Completed</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
        <div
          className="bg-custom-blue h-1 rounded-full"
          style={{ width: `${completion}%` }}
        />
      </div>

      {/* Parts ki List */}
      <div className="space-y-2">
        {parts.map((part, index) => (
          <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-md">
            <span className="flex items-center space-x-2">
              <img src={part.icon} alt="" height={20} width={20} />
              <span>{part.title}</span>
            </span>
            <span className="text-gray-500">{part.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartCard;
