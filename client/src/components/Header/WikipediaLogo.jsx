import React from "react";
import { CiSearch } from "react-icons/ci";

function WikipediaLogo() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-3">
      {/* Logo */}
      <div className="flex items-center">
        <p className="m-1 p-1 w-10 h-10 flex items-center justify-center text-2xl font-bold">
          W
        </p>
        <div>
          <h1 className="font-bold text-xl md:text-xl">WIKIPEDIA</h1>
          <p className="text-blue-800 text-sm md:text-base">
            The Free Encyclopedia
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mx-2 w-full md:w-auto flex justify-center md:justify-end leading-none border border-black rounded">
        <div className="flex items-center border border-black rounded px-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Wikipedia"
            className="p-2 w-full md:w-64 bg-transparent focus:outline-none"
          />
          <CiSearch className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default WikipediaLogo;
