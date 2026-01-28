import React, { useState } from "react";

function LatestCommit() {
  const [open, setOpen] = useState(false);
  return (
    <div className="m-2 p-2 max-w-md">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="peer flex items-center gap-2 w-fit h-9 px-3 rounded-md border border-neutral-300 bg-neutral-50 text-xs font-medium text-neutral-800 hover:bg-neutral-100
        transition absolute"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-100 animate-ping"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
        </span>
        Latest Commit
      </button>

      {/* Card */}
      {open && (
        <div
          className="mt-2 hidden flex-col gap-2 rounded-md border border-neutral-300
        bg-white p-3 text-xs text-neutral-800 shadow-sm top-[30px] relative md:top-[-7px] md:left-[110px] peer-focus:flex "
        >
          <p className="text-neutral-600">🔔 New commit pushed</p>

          <p>
            <span className="font-medium text-neutral-500">Repo:</span>{" "}
            <span className="font-mono text-blue-600">my-portfolio</span>
          </p>

          <p>
            <span className="font-medium text-neutral-500">Message:</span>{" "}
            <span className="font-mono">
              some new things added to my portfolio repo
            </span>
          </p>

          <a
            href="#"
            className="mt-1 w-fit text-blue-600 hover:underline font-medium"
          >
            View on GitHub →
          </a>
        </div>
      )}
    </div>
  );
}

export default LatestCommit;
