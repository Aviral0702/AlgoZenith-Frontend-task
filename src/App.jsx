import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Frame from "./components/Frame";
import Dashboard from "./pages/dashboard";
import Learn from "./pages/Learn";
import Forums from "./pages/Forums";
import Upskill from "./pages/Upskill";
import Contest from "./pages/Contest";
import Leaderboard from "./pages/Leaderboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col mx-8 mt-10">
        <Navbar />

        <div className="flex flex-grow">
          <Sidebar className="w-1/5 md:w-2/5 sm:w-1" />

          {/* Frame area which takes the remaining width */}
          <Frame>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/forums" element={<Forums />} />
              <Route path="/upskill" element={<Upskill />} />
              <Route path="/contest" element={<Contest />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </Frame>
        </div>
      </div>
    </Router>
  );
}

export default App;
