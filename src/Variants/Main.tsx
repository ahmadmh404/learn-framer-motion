import { motion } from "framer-motion";
import { useState } from "react";
import FlipingCard from "../Keyframes/components/FlipingCard";

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

const Main = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <motion.div
        className="box circle cursor-pointer"
        onClick={() => setVisible((prev) => !prev)}
        variants={variants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        exit="exit"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />

      {/* Example 1 */}
      <FlipingCard />
    </div>
  );
};

export default Main;
