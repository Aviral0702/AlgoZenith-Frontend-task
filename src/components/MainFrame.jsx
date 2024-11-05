import ChapterContent from "./ChapterContent";
import MainFrameSidebar from "./MainFrameSidebar";
import { ListItem } from "./Sidebar";
import React from 'react'
import { useState } from "react";
function MainFrame() {
    const [selectedChapter, setSelectedChapter] = useState(0);
    console.log(selectedChapter)
    return (
        <div className="flex">
            <MainFrameSidebar onSelectChapter={setSelectedChapter}/>
            <ChapterContent chapterIndex={selectedChapter}/>
        </div>
    )
}

export default MainFrame
