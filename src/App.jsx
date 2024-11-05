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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col mx-4 md:mx-8 mt-10">

        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex flex-grow">
          <div
            className={`fixed md:relative md:flex w-full md:w-1/5 lg:w-1/6 transition-transform transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
          >
            <Sidebar className="bg-white shadow-lg md:shadow-none h-full md:h-auto" />
          </div>

          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-10"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <div className="flex-grow p-4 md:ml-0 ml-64 transition-all duration-300">
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
      </div>
    </Router>
  );
}

export default App;
