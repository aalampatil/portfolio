import React, { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

function Blogs() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div id="blogs" className="w-full mt-4 my-4 pb-3">
        <div
          className="m-2 p-2 flex flex-row items-center justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <h1 className="text-lg md:text-xl font-semibold">Blogs</h1>

          <span className="text-xl">
            {show ? <SlArrowDown /> : <SlArrowRight />}
          </span>
        </div>
        {show && (
          <div className="flex flex-col m-2 p-2 ">
            <ol className="m-2 p-4 text-blue-500 list-decimal ">
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/what-is-git">
                  Git for Beginners: Basics and Essential Commands
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/inside-git-how-it-works-and-the-role-of-the-git-folder">
                  Inside Git: How It Works and the Role of the .git Folder
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/why-version-control-exists-the-pendrive-problem">
                  Why Version Control Exists: The Pendrive Problem
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/how-dns-resolution-works">
                  How DNS Resolution Works
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/dns-record-types-explained">
                  DNS Record Types Explained
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/curl-deep-dive-curl-client-url">
                  Getting Started with cURL
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/understanding-network-devices">
                  Understanding Network Devices
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/tcp-vs-udp-when-to-use-what-and-how-tcp-relates-to-http">
                  TCP vs UDP: When to Use What, and How TCP Relates to HTTP
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/tcp-working-3-way-handshake-and-reliable-communication">
                  TCP Working: 3-Way Handshake &amp; Reliable Communication
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/how-a-browser-works-a-beginner-friendly-guide-to-browser-internals">
                  How a Browser Works: A Beginner-Friendly Guide to Browser
                  Internals
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/understanding-html-tags-and-elements">
                  Understanding HTML Tags and Elements
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/emmet-for-html-a-beginners-guide-to-writing-faster-markup">
                  Emmet for HTML: A Beginner’s Guide to Writing Faster Markup
                </a>
              </li>
              <li>
                <a href="https://aalampatilblogs.hashnode.dev/css-selectors-101-targeting-elements-with-precision">
                  CSS Selectors 101: Targeting Elements with Precision
                </a>
              </li>
            </ol>
          </div>
        )}
      </div>
    </>
  );
}

export default Blogs;
