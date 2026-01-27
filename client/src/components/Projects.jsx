import React, { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

function Projects() {
    const [show, setShow] = useState(false);
  return (
    <>
       <div id="projects" className="w-full mt-4 my-4 pb-3">
              <div
                className="m-2 p-2 flex flex-row items-center justify-between cursor-pointer"
                onClick={() => setShow(!show)}
              >
                <h1 className="text-lg md:text-xl font-semibold">Projets</h1>
      
                <span className="text-xl">
                  {show ? <SlArrowDown /> : <SlArrowRight />}
                </span>
              </div>
              {show && (
                <div>
                  <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
                    Revamping by Projects...,new and cool projects under construction and maintainance,
                     can visit my <span className="underline bold italic"> <a href="https://github.com/aalampatil">github</a> </span> as of now
                  </p>
                </div>
              )}
            </div>
    </>
  )
}

export default Projects
