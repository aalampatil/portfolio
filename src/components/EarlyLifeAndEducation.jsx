import React, { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

function EarlyLifeAndEducation() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div id="earlyLife" className="w-full mt-4 my-4 pb-3">
        <div
          onClick={() => setShow(!show)}
          className="m-2 p-2 flex flex-row items-center justify-between cursor-pointer"
        >
          <h1 className="text-lg md:text-xl font-semibold">
            Early Life and Education
          </h1>

          <span className="text-xl">
            {show ? <SlArrowDown /> : <SlArrowRight />}
          </span>
        </div>
        {/* <hr /> */}

        {/* Content */}
        {show && (
          <div>
            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              <ol className="m-2 p-2">
                <li className="list-decimal m-1 p-1">
                  I’m more of a history-minded, “canon event” kind of person who
                  enjoys collecting and preserving meaningful things.
                </li>
                <li className="list-decimal m-1 p-1">
                  An average PCM student with aspirations to become something
                  extraordinary.
                </li>
                <li className="list-decimal m-1 p-1">
                  I’ve learnt valuable life lessons along the way—understanding
                  what to do, and just as importantly, what not to do.
                </li>
              </ol>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default EarlyLifeAndEducation;
