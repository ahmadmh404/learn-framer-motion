import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  normal: { skew: 0 },
  skewed: {
    skew: 20,
    transition: { duration: 0.5, type: "spring", stiffness: 300 },
  },
};

const Four = () => {
  const [isSkewed, setIsSkewed] = useState(false);

  return (
    <motion.div
      initial="normal"
      animate={isSkewed ? "skewed" : "normal"}
      variants={variants}
      className="box"
      onClick={() => setIsSkewed((prev) => !prev)}
    />
  );
};

export default Four;
