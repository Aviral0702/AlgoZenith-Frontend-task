import React, { useState } from "react";
// import {CalendarIcon} from "@heroicons/react/outline";

function ToggleButton() {
  const [active, setActive] = useState("learning");
  return (
    <div className="flex justify-between items-center">
    <div className="flex space-x-2 p-2 bg-gradient-to-b from-blue-50 to-white rounded-lg">
      <button
        onClick={() => setActive("mentor")}
        className={`flex items-center px-4 py-2 rounded-lg font-medium gap-2 ${
          active === "mentor"
            ? "bg-white border border-gray-300 shadow-md"
            : "text-gray-500"
        }
        `}
      >
        {/* <CalendarIcon className="h-5 w-5 mr-2" /> */}
        <img src="/Vectors/CalendarOutline.png" alt="" height={5} width={20} />
        Mentor Sessions
      </button>
      <button
        onClick={() => setActive("learning")}
        className={`flex items-center px-4 py-2 rounded-lg font-medium gap-2 ${
          active === "learning"
            ? "bg-white border border-gray-300 shadow-md"
            : "text-gray-500"
        }
        `}
      >
        <img src="/Vectors/BriefcaseOutline.png" alt="" height={5} width={20} />
        Learning Material
      </button>

    </div>
    <button className="flex items-center px-2 text-custom-blue rounded-lg font-medium gap-2 border-2 border-blue-200 h-10 hover:bg-gray-600 hover:border-white hover:text-white transition-colors">
        <img src="/Vectors/InformationCircleOutline.png" alt="" height={2} width={20}/>
        How it works
    </button>
    </div>
  );
}

export default ToggleButton;
