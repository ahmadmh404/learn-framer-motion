import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export const DraggableBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [position, setPosition] = useState({
    x: "0",
    y: "0",
  });

  useMotionValueEvent(x, "change", (x) => {
    setPosition((prev) => ({ ...prev, x: x.toFixed(2) }));
  });

  useMotionValueEvent(y, "change", (y) => {
    setPosition((prev) => ({ ...prev, y: y.toFixed(2) }));
  });

  return (
    <div className="!space-y-5">
      <motion.div
        className="box"
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        style={{ x, y }}
      />

      <p className="text-xl">
        Position: ({position.x}, {position.y})
      </p>
    </div>
  );
};
