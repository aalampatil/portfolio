import React, { useEffect, useState } from "react";
import axios from "axios";

function LatestCommit() {
  const [open, setOpen] = useState(false);
  const [commit, setCommit] = useState({});

  const fetchCommit = async () => {
    const serverUrl =
      import.meta.env.MODE === "production"
        ? import.meta.env.VITE_PRODUCTION_URL
        : import.meta.env.VITE_LOCAL_URL;
    const response = await axios.get(`${serverUrl}/api/commit-details`);
    if (response.data.success) {
      localStorage.setItem("commit", JSON.stringify(response.data.commit));
      setCommit(response.data.commit);
    } else {
      throw new Error("failed to fetch commit");
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem("commit");
    if (cached) {
      setCommit(JSON.parse(cached));
    }
    fetchCommit();
  }, []);

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
          className="mt-2 flex flex-col gap-2 rounded-md border border-neutral-300
        bg-white p-3 text-xs text-neutral-800 shadow-sm top-[30px] relative md:top-[-7px] md:left-[110px]"
        >
          <p className="text-neutral-600">🔔 New commit pushed</p>

          <p>
            <span className="font-medium text-neutral-500">Repo:</span>{" "}
            <span className="font-mono text-blue-600">{commit.repoName}</span>
          </p>

          <p>
            <span className="font-medium text-neutral-500">Message:</span>{" "}
            <span className="font-mono">{commit.message}</span>
          </p>

          <p>
            <span className="font-medium text-neutral-500">Date:</span>{" "}
            <span className="font-mono">{new Date(commit.date).toLocaleString()}</span>
          </p>

          <a
            href={`https://github.com/${commit.repoName}`}
            target="_blank"
            rel="noopener noreferrer"
            
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
