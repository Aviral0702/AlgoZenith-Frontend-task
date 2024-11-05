import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
function ChapterContent({ chapterIndex }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const chapterData = [
    {
      title: "Lorem Ipsum Dolor Sit Amet - Chapter 1",
      parts: [
        {
          type: "Video",
          title: "Video 1",
          time: "10:00",
          icon: "/Vectors/PlayOutline.png",
        },
        {
          type: "Article",
          title: "Article 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Quiz",
          title: "Quiz 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Coding",
          title: "Coding Exercise",
          time: "10:00",
          icon: "/Vectors/CodeOutline.png",
        },
        {
          type: "Resource",
          title: "Combined Resource",
          time: "10:00",
          icon: "/Vectors/DocumentDuplicateOutline.png",
        },
      ],
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet - Chapter 2",
      parts: [
        {
          type: "Video",
          title: "Video 1",
          time: "10:00",
          icon: "/Vectors/PlayOutline.png",
        },
        {
          type: "Article",
          title: "Article 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Quiz",
          title: "Quiz 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Coding",
          title: "Coding Exercise",
          time: "10:00",
          icon: "/Vectors/CodeOutline.png",
        },
        {
          type: "Resource",
          title: "Combined Resource",
          time: "10:00",
          icon: "/Vectors/DocumentDuplicateOutline.png",
        },
      ],
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet - Chapter 3",
      parts: [
        {
          type: "Video",
          title: "Video 1",
          time: "10:00",
          icon: "/Vectors/PlayOutline.png",
        },
        {
          type: "Article",
          title: "Article 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Quiz",
          title: "Quiz 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Coding",
          title: "Coding Exercise",
          time: "10:00",
          icon: "/Vectors/CodeOutline.png",
        },
        {
          type: "Resource",
          title: "Combined Resource",
          time: "10:00",
          icon: "/Vectors/DocumentDuplicateOutline.png",
        },
      ],
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet - Chapter 4",
      parts: [
        {
          type: "Video",
          title: "Video 1",
          time: "10:00",
          icon: "/Vectors/PlayOutline.png",
        },
        {
          type: "Article",
          title: "Article 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Quiz",
          title: "Quiz 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Coding",
          title: "Coding Exercise",
          time: "10:00",
          icon: "/Vectors/CodeOutline.png",
        },
        {
          type: "Resource",
          title: "Combined Resource",
          time: "10:00",
          icon: "/Vectors/DocumentDuplicateOutline.png",
        },
      ],
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet - Chapter 5",
      parts: [
        {
          type: "Video",
          title: "Video 1",
          time: "10:00",
          icon: "/Vectors/PlayOutline.png",
        },
        {
          type: "Article",
          title: "Article 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Quiz",
          title: "Quiz 1",
          time: "10:00",
          icon: "/Vectors/QuestionMarkCircleOutline.png",
        },
        {
          type: "Coding",
          title: "Coding Exercise",
          time: "10:00",
          icon: "/Vectors/CodeOutline.png",
        },
        {
          type: "Resource",
          title: "Combined Resource",
          time: "10:00",
          icon: "/Vectors/DocumentDuplicateOutline.png",
        },
      ],
    },
  ];
  const selectedChapter = chapterData[chapterIndex] || {};
  return (
    <div
      className={`w-3/4 p-4 bg-white shadow-md rounded-lg transition-all duration-300 ${
        isCollapsed ? "h-32" : "h-auto"
      }`}
    >
      {/* Header section */}
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <p className="text-gray-600 text-sm">PART {chapterIndex + 1}</p>
          <h2 className="font-semibold text-custom-blue">
            {selectedChapter.title}
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-600 gap-1">
            <img src="/Vectors/ClockOutline.png" alt="" height={5} width={20} />
            <span className="text-sm">02:00:00</span>
          </div>

          <div className="flex items-center text-gray-600 gap-1">
            <img src="/Vectors/Contest.png" alt="" height={3} width={15} />
            <span className="text-sm">Medium</span>
          </div>

          <div className="flex items-center text-gray-600">
            <img
              src="/Vectors/DocumentDuplicateOutline.png"
              alt=""
              height={5}
              width={20}
            />
            <span className="text-sm">5</span>
          </div>

          <button className="text-gray-600" onClick={toggleCollapse}>
            {isCollapsed ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-end mb-1">
          <span className="text-sm text-gray-600">45% Completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-custom-blue h-1 rounded-full"
            style={{ width: "45%" }}
          />
        </div>
      </div>
      {/* collapsible component */}
      {!isCollapsed && (
        <div className="space-y-2">
          {selectedChapter.parts?.map((part, index) => (
            <div>
              <div
                key={index}
                className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <span className="flex items-center space-x-2">
                  <span className="material-icons">
                    <img src={part.icon} alt="" height={5} width={20} />
                  </span>
                  <span>{part.title}</span>
                </span>
                <span className="text-gray-500">{part.time}</span>
              </div>
              <div className="flex flex-row">
                <div className="h-1 w-1/2 bg-gradient-to-r from-white to-gray-200" />
                <div className="h-1 w-1/2 bg-gradient-to-r from-gray-200 to-white" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChapterContent;
