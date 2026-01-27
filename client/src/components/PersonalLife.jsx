import React, { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

function PersonalLife() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div id="personalLife" className="w-full mt-4 my-4 pb-3">
        <div
          className="m-2 p-2 flex flex-row items-center justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <h1 className="text-lg md:text-xl font-semibold">Personal Life</h1>

          <span className="text-xl">
            {show ? <SlArrowDown /> : <SlArrowRight />}
          </span>
        </div>
        {show && (
          <div>
            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              I never planned to be in tech. I had different ideas for my life,
              but as it often happens, life had its own plans. It led me in
              directions I didn’t expect. I was confused about what to do next
              until a close friend—someone I deeply respect—suggested that I try
              development and recommended a course to get started. That course
              sparked my curiosity and slowly pulled me into the world of
              building things.
            </p>

            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              My journey hasn’t been linear. Life has been on and off, and even
              now it continues to be that way. Whenever I try to move forward,
              it often feels like I’m pulled back even further. The gaps in my
              knowledge sometimes leave me stuck in a loop—but I’m aware of it,
              and I’m working through it, one step at a time.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default PersonalLife;
