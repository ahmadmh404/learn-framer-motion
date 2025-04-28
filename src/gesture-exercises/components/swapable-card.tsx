import { motion } from "framer-motion";
import { useState } from "react";

export const SwappableCard = () => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleDrag = (_: any, info: any) => {
    console.log(info.offset);
    if (info.offset.x > 100) setIsRemoved(true);
    else if (info.offset.x < -100) setIsRemoved(true);
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ right: 100, left: -100 }}
      onDragEnd={handleDrag}
      className={`w-[300px] h-[400px] bg-sky-500 rounded-2xl flex items-center justify-center !p-5 ${
        isRemoved ? "hidden" : ""
      }`}
    >
      <p className="text-center font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quae.
      </p>
    </motion.div>
  );
};
