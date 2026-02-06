import React, { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

function Skills() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div id="skills" className="w-full mt-4 my-4 pb-3">
        <div
          className="m-2 p-2 flex flex-row items-center justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <h1 className="text-lg md:text-xl font-semibold">
            Skills-TechStacks
          </h1>

          <span className="text-xl">
            {show ? <SlArrowDown /> : <SlArrowRight />}
          </span>
        </div>
        {show && (
          <div>
            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              I work as a full-stack web developer with experience across the
              complete MERN ecosystem and modern web tooling and I also like
              cpp.{" "}
            </p>
            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              On the frontend, I build responsive and accessible interfaces
              using{" "}
              <strong>
                HTML5, CSS3, JavaScript (ES6+), React, Next.js, Tailwind CSS,
                Bootstrap
              </strong>
              , and state management tools like <strong>Redux</strong> and{" "}
              <strong>Context API</strong>, with bundlers such as{" "}
              <strong>Vite</strong>.
            </p>

            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              On the backend, I develop scalable server-side applications using{" "}
              <strong>Node.js</strong> and <strong>Express.js</strong>,
              designing <strong>RESTful APIs</strong>, implementing
              authentication with <strong>JWT</strong> and{" "}
              <strong>OAuth</strong>, and enabling real-time features using{" "}
              <strong>Socket.IO</strong> / <strong>WebRTC</strong>. I work with
              databases including <strong>MongoDB (Mongoose)</strong>,{" "}
              <strong>PostgreSQL</strong>, and <strong>Appwrite</strong>.
            </p>

            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              For development and collaboration, I use <strong>Git</strong>,{" "}
              <strong>GitHub</strong>, <strong>npm</strong> /{" "}
              <strong>bun</strong> / <strong>yarn</strong> /{" "}
              <strong>pnpm</strong>, <strong>VS Code</strong>,{" "}
              <strong>ESLint</strong>, and <strong>Prettier</strong>.
            </p>

            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              I test and debug applications using <strong>Postman</strong> and{" "}
              <strong>Thunder Client</strong>.
            </p>

            <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              For deployment and DevOps, I use <strong>Vercel</strong>,{" "}
              <strong>Netlify</strong>, <strong>Render</strong>, and{" "}
              <strong>Cloudinary</strong>.
            </p>

            {/* Docker, Nginx, PM2, and CI/CD pipelines with GitHub Actions, along
              with cloud services like AWS (EC2, S3), Firebase Storage, */}
            {/* <p className="px-4 pb-3 text-sm md:text-base text-gray-700 leading-relaxed">
              I also integrate third-party services such as Stripe/Razorpay for
              payments and Twilio for messaging, with a strong focus on security
              using bcrypt, Helmet, CORS, CSRF protection, and rate limiting.
            </p> */}
          </div>
        )}
      </div>
    </>
  );
}

export default Skills;
