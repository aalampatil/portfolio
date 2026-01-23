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
              i have no plans to be in tech, i had some differnt plans, but you know, life don't work like this, it will take you there where it wants you to be, i was confused what to do, one day my friend . indeed a very good friend, recommended me to start developmemnt, he recommended me a course to start with than move foreward, i liked that course it sparked some curiousity..life was on/off for me, it still, so could not focus when i try to move 2 steps further in my life it drags me 4 steps back. 
            </p>
            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              the broken knowledge is making me stuck in a loop
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default PersonalLife;
