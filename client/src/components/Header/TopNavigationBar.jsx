import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

function TopNavigationBar() {
  return (
         // top navigation
          <div className="w-full flex flex-col md:flex-row border-b border-gray-300 ">
            {/* Left Nav */}
            <div className="w-full md:max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-4 md:gap-8 py-3 font-serif text-[15px]">
              <p className="text-black hover:underline cursor-pointer">Main Page</p>
              <p className="text-black hover:underline cursor-pointer">Contents</p>
              <p className="text-black hover:underline cursor-pointer">
                Life Updates
              </p>
              <p className="text-black hover:underline cursor-pointer">Articles</p>
              <p className="text-black hover:underline cursor-pointer">About</p>
            </div>
    
            {/* Right Nav */}
            <div className="w-full mr-2 md:max-w-5xl mx-auto flex items-center justify-center md:justify-end gap-4 py-3 font-serif text-[15px]">
              <div className="flex flex-row items-center justify-center">
                <CiMail />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aalampatil001@gmail.com"
                  className="text-black hover:underline cursor-pointer"
                >
                  Connect
                </a>
              </div>
    
              <div className="flex flex-row items-center justify-center">
                <CiUser />
                <p className="text-blue-800 hover:underline cursor-pointer">
                  Login
                </p>
              </div>
            </div>
          </div>
  )
}

export default TopNavigationBar