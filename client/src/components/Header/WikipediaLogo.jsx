import React from "react";
import { CiSearch } from "react-icons/ci";
import IdCard from "../IdCard/IdCard";

function WikipediaLogo() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 py-3 gap-3">
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

      {/* IdCard */}
      <div className="mx-2 md:w-[50vw] md:h-[100vh]">
        <IdCard />
      </div>
    </div>
  );
}

export default WikipediaLogo;
