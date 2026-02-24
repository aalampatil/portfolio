import { useRef } from "react";
import IdCard from "../IdCard/IdCard";
import {
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import { motion } from "motion/react";

function WikipediaLogo() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("changes values", latest);
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [-200, 200]),
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 py-3 gap-3"
    >
      {/* Logo */}
      <motion.div
        className="flex items-center"
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
        }}
      >
        <p className="m-1 p-1 w-10 h-10 flex items-center justify-center text-2xl font-bold">
          W
        </p>
        <div>
          <h1 className="font-bold text-xl md:text-xl">WIKIPEDIA</h1>
          <p className="text-blue-800 text-sm md:text-base">
            The Free Encyclopedia
          </p>
        </div>
      </motion.div>

      {/* IdCard */}
      <motion.div
        className="mx-2 md:w-[50vw] md:h-[100vh]"
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        <IdCard />
      </motion.div>
    </div>
  );
}

export default WikipediaLogo;
