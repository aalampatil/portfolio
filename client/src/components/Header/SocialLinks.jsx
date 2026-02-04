import React from "react";
import { FaInstagram, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import LatestCommit from "../LatestCommit/LatestCommit";
import { useEffect } from "react";
import axios from "../../api/axios.js";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

function SocialLinks() {
  const [visit, setVisit] = useState(0);

  const fetchVisit = async () => {
    const response = await axios.get("/api/features/get-visitor-count");
    // console.log(response.data);
    if (response.data.success) {
      setVisit(response.data.visits);
    } else {
      throw new Error("failed to fetch visit");
    }
  };

  useEffect(() => {
      fetchVisit();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col mx-5 p-4 ">
        <div className="flex flex-row items-center justify-start gap-4">
          <h1 className="text-lg font-bold py-3">Aalam Patil </h1>
          <a href="https://github.com/aalampatil" title="github">
            <FaGithub />
          </a>
          <a href="https://x.com/aalam_twt" title="x/twitter">
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGj9OH9UN-l6gAAAZvp7gmQrzgUXIgIT-SBgbJPX8UUCCmZFSc1RE9h9MyPDWgGkNNWwwg8DdQs-RxF5kLqbJw84U-cKgnfcsXl9cC_iNgrEgz-WiUoiBEFLUJLXsjn_qCkIFo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faalampatil%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
            title="linkedin"
          >
            <FaLinkedin />
          </a>
          <a href="https://instagram/aalam_ig" title="instagram">
            <FaInstagram />
          </a>

          <div className="flex items-center gap-2 justify-end text-sm text-gray-500">
            <FaEye className="text-base" />
            <span className="font-medium">{visit}</span>
          </div>
        </div>

        <hr className="w-full border-b" />
        <p className="text-sm font-thin py-3">
          From Wikipedia, the free encyclopedia
        </p>
        <hr className="w-full border-b" />
        <LatestCommit />
      </div>
    </>
  );
}

export default SocialLinks;
