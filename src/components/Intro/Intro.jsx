import React, { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import {
  EarlyLifeAndEducation,
  Career,
  PersonalLife,
  ExternalLinks,
  References,
  SkilllsAndExpertise,
} from "../imports.js";

function Intro() {
  return (
    <>
      {/* Main wrapper */}
      <div className="w-full my-2 flex flex-col-reverse md:flex-row gap-4 px-4 md:px-8">
        {/* Left Section */}
        <div className="flex flex-col m-2 p-2 text-[15px] max-w-3xl">
          <p>
            <b>Aalam Patil</b> (born August 16, 2003) is a developer (I think I
            am). Based in Haryana, specializing in backend development and
            contributing to many projects.
          </p>

          <br />

          <p>
            Throughout the career (my 1.5-year-old career), I have worked on
            numerous projects spanning various tech fields, demonstrating
            expertise in backend stuffs. My work has not been widely recognized
            yet(but i believe).
          </p>

          {/* Contents Box */}
          <div className="flex flex-col text-blue-600 mt-6 p-5 border bg-gray-100 rounded-lg shadow-sm w-full md:w-1/2">
            <p className="text-black font-semibold mb-2">Contents</p>
            <a href="#earlyLife">1. Early life and education</a>
            <a href="#career">2. Career</a>
            <a href="#skills">3. Skills and expertise</a>
            <a href="#">4. Recognition and awards</a>
            <a href="#personalLife">5. Personal life</a>
            <a href="#references">6. References</a>
            <a href="#externalLinks">7. External links</a>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col border bg-gray-100 m-2 p-5 rounded-lg shadow-md w-full md:w-1/3">
          <h1 className="text-center m-2 p-2 text-xl font-semibold">
            Aalam Patil
          </h1>

          {/* Image Section */}
          <div className="flex flex-col items-center justify-center m-2 p-2">
            <img
              className="h-[80px] w-[80px] rounded-full object-cover"
              src="https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg"
              alt="profile"
            />
            <p className="text-sm mt-2 text-gray-700">Aalam in [2018]</p>
          </div>

          {/* Table */}
          <table className="border w-full text-sm">
            <tbody>
              <tr>
                <td className="font-semibold border p-2 w-1/3">Born</td>
                <td className="border p-2">August 16, 2003</td>
              </tr>
              <tr>
                <td className="font-semibold border p-2">Nationality</td>
                <td className="border p-2">Indian</td>
              </tr>
              <tr>
                <td className="font-semibold border p-2">Education</td>
                <td className="border p-2">A degree in CS</td>
              </tr>
              <tr>
                <td className="font-semibold border p-2">Occupation</td>
                <td className="border p-2">Senior Developer</td>
              </tr>
              <tr>
                <td className="font-semibold border p-2">Years Active</td>
                <td className="border p-2">Aug 2024 - present</td>
              </tr>
              <tr>
                <td className="font-semibold border p-2">Website</td>
                <td className="border p-2 text-blue-700 underline">
                  <a
                    href="https://aalampatil.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    visit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <EarlyLifeAndEducation />
      <Career />
      <PersonalLife />
      <SkilllsAndExpertise />
      <References />
      <ExternalLinks />
    </>
  );
}

export default Intro;

// import React from "react";

// function Intro() {
//   return (
//     <>
//       <div className="w-full mx-auto my-2 flex flex-col-reverse md:flex-row">
//         <div className="flex flex-col m-2 p-2">
//           <p>
//             <b>Aalam Patil</b> (born August 16, 2003) is a developer(i think i
//             am). Based in Haryana, specialize in backend dev and have
//             contributed to many projects
//           </p>
//           <br />
//           <p>
//             Throughout the career (my 1.5 old career), i have worked on numerous
//             projects spanning in various tech fields, demonstrating expertise in
//             backend stuffs, my work has not been recognised for achievements as
//             of now.
//           </p>
//           <div className="flex flex-col flex-wrap text-blue-500 mx-10 my-10 p-5 w-1/3 border bg-gray-100">
//             <p className="text-black">Contents</p>
//             <a href="">1 Early life and education</a>
//             <a href="">2 Career</a>
//             <a href="">3 Skills and expertise</a>
//             <a href="">4 Recognition and awards</a>
//             <a href="">5 Personal life</a>
//             <a href="">6 Reference</a>
//             <a href="">7 External links</a>
//           </div>
//         </div>
//         <div className="flex flex-col border bg-gray-100 m-5 p-5 ">
//           <h1 className="text-center m-2 p-2">Aalam Patil</h1>
//           <div className="flex flex-col items-center justify-center m-2 p-2">
//             <img className="h-[50px] w-[50px]" src="https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg" alt="" />
//             <p>Aalam in [2018]</p>
//           </div>
//           <table className="border">
//             <tr classname="m-2 p-2">
//               <td>Born</td>
//               <td>August 16, 2003</td>
//             </tr>
//             <tr classname="m-2 p-2">
//                 <td>Nationality</td>
//                 <td>Indian</td>
//             </tr>
//             <tr classname="m-2 p-2">
//                 <td>Education</td>
//                 <td>A degree in CS</td>
//             </tr>
//             <tr className="m-2 p-2">
//                 <td>Occupation</td>
//                 <td>Senior Developer</td>
//             </tr>
//             <tr classname="m-2 p-2">
//                 <td>Years Active</td>
//                 <td>Aug 2024 - present</td>
//             </tr>
//             <tr classname="m-2 p-2">
//                 <td>website</td>
//                 <td><a href="aalampatil.netlify.app">aalampatil.netlify.app</a></td>
//             </tr>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Intro;
