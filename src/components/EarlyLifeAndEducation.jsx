import React, { useState } from 'react'
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

function EarlyLifeAndEducation() {
    const [show, setShow] = useState(false)
  return (
    <>
      {/* Early Life and Education */}
            <div id="earlyLife" className="w-full mt-4 my-4 border-b pb-3">
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
              <hr />
      
              {/* Content */}
              {show && (
                <div>
                  <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate iusto est doloribus dolorem obcaecati praesentium natus
                    accusamus odio in consequatur sequi rem corrupti, tenetur ut?
                    Nobis laudantium optio repellat distinctio.
                  </p>
                </div>
              )}
            </div>
    </>
  )
}

export default EarlyLifeAndEducation
