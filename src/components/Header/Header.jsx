import React from "react";

function Header() {
  return (
    <>
      {/* Top Navigation */}
      <div className="w-full md:flex flex-col md:flex-row border-b border-gray-300 hidden">
        {/* Left Nav */}
        <div className="w-full md:max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-4 md:gap-8 py-3 font-serif text-[15px]">
          <p className="text-black hover:underline cursor-pointer">Main Page</p>
          <p className="text-black hover:underline cursor-pointer">Contents</p>
          <p className="text-black hover:underline cursor-pointer">
            Current Events
          </p>
          <p className="text-black hover:underline cursor-pointer">Articles</p>
          <p className="text-black hover:underline cursor-pointer">About</p>
        </div>

        {/* Right Nav */}
        <div className="w-full mr-2 md:max-w-5xl mx-auto flex items-center justify-center md:justify-end gap-4 py-3 font-serif text-[15px]">
          <p className="text-black hover:underline cursor-pointer">Donate</p>
          <p className="text-blue-800 hover:underline cursor-pointer">Login</p>
        </div>
      </div>

      {/* Logo + Search */}
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
        <div className="mx-2 w-full md:w-auto flex justify-center md:justify-end leading-none">
          <input
            type="text"
            placeholder="Search Wikipedia"
            className="my-1 p-2 w-full md:w-64 bg-transparent border border-black rounded"
          />
        </div>
      </div>

      <div className="w-full flex flex-col mx-5 p-4 ">
        <h1 className="text-lg font-bold py-3">Aalam Patil</h1>
        <hr className="w-full border-b" />
        <p className="text-sm font-thin py-3">From Wikipedia, the free encyclopedia</p>
        <hr className="w-full border-b" />
      </div>
    </>
  );
}

export default Header;
