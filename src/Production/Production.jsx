import React from "react";
import { Loader2, Twitter, Github, Mail } from "lucide-react";

function Production() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100 rounded-2xl shadow-md p-6">
        <p className="text-xl">
          {" "}
          hey visitor, I'm aalam...i am learning development..the
          bio/portfolio is under production, as currently i am figuring out
          designs or you can say i suck at designing...pretty good at back end
          stuff, i have some cool project which i wanna show you soon..
        </p>
        <div className="text-xl font-semibold">
          The website is currently in production...Man at work
        </div>
        <Loader2 className="animate-spin h-8 w-8 text-gray-600" />
        {/*  */}
        <div className="mt-8 flex flex-row space-x-1">
          <div className="flex space-x-4">
            <a
              href="https://x.com/aalam_twt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-500 hover:underline"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a
              href="https://github.com/aalam-git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-800 hover:underline"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>

             <a
            href="mailto:aalamaptil001@gmail.com"
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Mail className="w-5 h-5" />
            <span>Mail Me</span>
          </a>
          </div>
        </div>
            <p>feedbacks/advice/guidance will be much appreciated</p>
      </div>
    </>
  );
}

export default Production;
