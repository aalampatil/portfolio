import React from "react";
import Header from "./components/Header";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Socials from "./components/Socials";
// import Resume from "./components/Resume";
import Production from "./Production/Production";

function App() {
  return (
    <>
     <Production />
    <div className="scroll-smooth">
      {/* <Header /> */}
      {/* <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Socials />
        <Resume />
      </main> */}
    </div>
    </>
     
  );
}

export default App;
