import { motion } from "framer-motion";
import { useState } from "react";

const PulsingButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCLick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <div>
      <motion.button
        initial={{ skew: 0 }}
        animate={{
          skew: isClicked ? [0, 20, -20, 0] : 0,
          scale: isClicked ? [1, 1.2, 1.1, 1] : 1,
        }}
        onClick={handleCLick}
        className="!px-4 !py-2 bg-yellow-400 rounded font-semibold"
      >
        Click to pulse
      </motion.button>
    </div>
  );
};

export default PulsingButton;
