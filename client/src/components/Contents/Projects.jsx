import React, { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import TableRow, { TableRow3 } from "../Table/TableRow";

function Projects() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div id="projects" className="w-full mt-4 my-4 pb-3">
        <div
          className="m-2 p-2 flex flex-row items-center justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <h1 className="text-lg md:text-xl font-semibold">Projects</h1>

          <span className="text-xl">
            {show ? <SlArrowDown /> : <SlArrowRight />}
          </span>
        </div>
        {show && (
          <div>
            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              Revamping by Projects...,new and cool projects under construction
              and maintainance, can visit my{" "}
              <span className="underline bold italic">
                {" "}
                <a href="https://github.com/aalampatil">github</a>{" "}
              </span>{" "}
              as of now
            </p>

            <table className="border-1 md:border-2 border-black m-1 p-1 md:m-3 md:p-3">
              <thead className="border-1">
                <tr>
                  <th className="border-2 border-black">Link</th>
                  <th className="border-2 border-black">Title</th>
                  <th className="border-2 border-black">Description</th>
                </tr>
              </thead>
              <tbody>
                <TableRow3
                  td1={
                    <a
                      className="text-blue-700"
                      href="https://wordle-ap.netlify.app/"
                    >
                      [Link]
                    </a>
                  }
                  td2={"wordle-ap"}
                  td3={
                    "This Wordle-like project was built to learn JWT authentication and OAuth setup. It handles cookies, token refreshing using refresh tokens, forced logout after token expiry, session management, and Google OAuth 2.0 authentication using Passport."
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

export default Projects;
