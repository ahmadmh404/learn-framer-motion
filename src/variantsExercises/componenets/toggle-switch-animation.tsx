import { useState } from "react";
import { motion } from "framer-motion";

const variants = (on: boolean) => {
  return {
    initial: { left: "15px" },
    animate: {
      left: on ? "calc(100% - 55px)" : "15px",
    },
    transition: {
      duration: 0.5,
      type: "spring",
      stiffnes: 200,
    },
  };
};

const ToggleSwitchAnimation = () => {
  const [on, setOn] = useState(false);

  const handleSwitch = () => setOn((prev) => !prev);

  return (
    <div className="relative w-[200px] h-16 bg-sky-500 rounded-full text-white">
      <motion.div
        onClick={handleSwitch}
        className={`absolute w-10 h-10 bg-white rounded-full left-5 top-1/2 -translate-y-1/2 cursor-pointer`}
        {...variants(on)}
      ></motion.div>
    </div>
  );
};

export default ToggleSwitchAnimation;
