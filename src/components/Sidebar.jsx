import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar w-64 p-6">
      <ul className="flex flex-col mt-8 gap-3">
        <ListItem to="/dashboard" icon="/Vectors/ViewGridOutline.png" label="Dashboard" />
        <ListItem to="/learn" icon="/Vectors/learn.png" label="Learn" />
        <ListItem to="/forums" icon="/Vectors/UserGroupOutline.png" label="Forums" />
        <ListItem to="/upskill" icon="/Vectors/ClipboardOutline.png" label="Upskill" />
        <ListItem to="/contest" icon="/Vectors/Contest.png" label="Contest" />
        <ListItem to="/leaderboard" icon="/Vectors/StarOutline.png" label="Leaderboard" />
      </ul>
    </div>
  );
}

export function ListItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex flex-row items-center gap-4 p-2 rounded-md hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
    >
      <img src={icon} alt={label} className="h-6 w-6" />
      <span>{label}</span>
    </Link>
  );
}

export default Sidebar;
