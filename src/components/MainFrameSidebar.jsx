// components/Sidebar.js
import React, { useState } from "react";

const MainFrameSidebar = ({ onSelectChapter }) => {
  const chapters = [
    { name: "Chapter 1", duration: "05:00:00" },
    { name: "Chapter 2" },
    { name: "Chapter 3" },
    { name: "Chapter 4" },
    { name: "Chapter 5" },
  ];

  const [selectedChapter, setSelectedChapter] = useState(0);

  const handleChapterClick = (index) => {
    setSelectedChapter(index);
    onSelectChapter(index);
  };

  return (
    <div className="w-1/4 p-4 bg-white rounded-lg">
      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 cursor-pointer border-b-2 border-blue-50 ${
              selectedChapter === index
                ? "bg-blue-50  font-semibold"
                : "hover:bg-blue-50"
            }`}
            onClick={() => handleChapterClick(index)}
          >
            <span>{chapter.name}</span>
            {chapter.duration && (
              <div className="flex gap-1">
                <img
                  src="/Vectors/ClockOutline.png"
                  alt=""
                  height={5}
                  width={20}
                />
                <span className="text-sm text-blue-500">
                  {chapter.duration}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainFrameSidebar;
