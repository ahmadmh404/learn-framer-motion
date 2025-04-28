import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  front: { rotateZ: 0 },
  back: { rotateZ: 180 },
};

const FlipingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="perspective-distant"
      onClick={() => setIsFlipped((prev) => !prev)}
      variants={variants}
      initial={variants.front}
      animate={isFlipped ? variants.back : variants.front}
    >
      <motion.div className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d">
        <div className="absolute w-full h-full inset-0 bg-blue-500 rotate-y-180 flex items-center justify-center text-lg font-bold">
          Back Side
        </div>
        <div className="absolute w-full h-full inset-0 bg-gray-50 text-gray-800 flex items-center justify-center text-lg font-bold">
          Front Side
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipingCard;
