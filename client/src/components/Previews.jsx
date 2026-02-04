import React from "react";
import { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

function Previews() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div id="previews" className="w-full mt-4 my-4 pb-3">
        <div
          className="m-2 p-2 flex flex-row items-center justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <h1 className="text-lg md:text-xl font-semibold">Preview</h1>

          <span className="text-xl">
            {show ? <SlArrowDown /> : <SlArrowRight />}
          </span>
        </div>
        {show && (
          <div className="flex items-center gap-2 m-2 p-2">
            <div className="h-5 w-5 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
            <p>Previews will be live soon</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Previews;
