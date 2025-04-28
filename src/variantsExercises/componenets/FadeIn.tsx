import { motion } from "framer-motion";
import { useState } from "react";

const FadeIn = () => {
  const [isViewed, setIsViewed] = useState(false);

  const vairnats = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleCLick = () => {
    setIsViewed((prev) => !prev);
  };

  return (
    <div className="!space-y-3">
      <motion.div
        className="box"
        variants={vairnats}
        initial={"hidden"}
        animate={isViewed ? "visible" : "hidden"}
      />

      <button
        className="!px-4 !py-2 bg-yellow-500 rounded"
        onClick={handleCLick}
      >
        Click me
      </button>
    </div>
  );
};

export default FadeIn;
