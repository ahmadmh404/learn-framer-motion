import { motion } from "framer-motion";
import { useState } from "react";

export const RotateOnDrag = () => {
  const [rotateDegree, setRotateDegree] = useState(0);

  const handleDrag = (_: any, info: any) => {
    const rotateDegree = Math.floor(info.offset.x);

    if (!rotateDegree) return;

    setRotateDegree(rotateDegree);
  };

  return (
    <motion.div
      className="box"
      animate={{ rotate: rotateDegree }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
      }}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      onDrag={handleDrag}
    />
  );
};
