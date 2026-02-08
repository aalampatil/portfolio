import React, { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import TableRow from "../Table/TableRow";

function Career() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div id="career" className="w-full mt-4 my-4 pb-3">
        <div
          className="m-2 p-2 flex flex-row items-center justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <h1 className="text-lg md:text-xl font-semibold">
            Career & Life Updates
          </h1>

          <span className="text-xl">
            {show ? <SlArrowDown /> : <SlArrowRight />}
          </span>
        </div>
        {show && (
          <div>
            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              My not so beautiful but lovely time line.
            </p>
            <table className="border-1 md:border-2 border-black m-1 p-1 md:m-3 md:p-3">
              <thead>
                <tr>
                  <th className="border-2 border-black">Duration</th>
                  <th className="border-2 border-black">Activity</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  td1={"2024"}
                  td2={
                    "Started learning web development, not consistent, barely giving proper time"
                  }
                />
                <TableRow
                  td1={"2025"}
                  td2={
                    "off year explored more web dev- backend orientated/Dsa "
                  }
                />
                <TableRow
                  td1={"2025"}
                  td2={
                    "Stuck in the tutorial hell, watching video and making projects, realised early(obviously not), started making small project by my own"
                  }
                />
                <TableRow
                  td1={"2025"}
                  td2={"Started Job Hunting, realised need to upskill"}
                />
                <TableRow
                  td1={"2026 – Present"}
                  td2={
                    "Turning web dev experience more into a software Development"
                  }
                />
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default Career;
