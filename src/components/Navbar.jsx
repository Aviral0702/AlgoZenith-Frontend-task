import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar flex flex-row justify-between mx-8">
      <Link to="/">
        <div className="flex flex-row gap-4 h-6 items-center">
          <img src="/Vectors/Vector.png" alt=" " height={5} width={20} />
          <h1 className="text-custom-blue text-2xl font-bold">AlgoZenith</h1>
        </div>
      </Link>
      <div className="flex flex-row h-1 items-center gap-4">
        <span className="bg-blue-50 w-8 h-8 grid place-items-center rounded-md">
          <img src="/Vectors/bell.png" alt="" height={7} width={17} />
        </span>
        <span>👤</span>
      </div>
    </div>
  );
}

export default Navbar;
