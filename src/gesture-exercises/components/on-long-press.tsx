import { motion } from "framer-motion";
import { useState } from "react";

export const OnLongPress = () => {
  const [isLongPress, setIsLongPress] = useState(false);

  const handleLongPressStart = () => setIsLongPress(true);

  const handleLongPressEnd = () => setIsLongPress(false);

  return (
    <motion.div
      onTap={handleLongPressEnd}
      onTapStart={handleLongPressStart}
      onTapCancel={handleLongPressEnd}
      animate={{
        width: isLongPress ? "150px" : "100px",
        height: isLongPress ? "150px" : "100px",
        borderRadius: isLongPress ? "50%" : "",
      }}
      className="w-[100px] h-[100px] bg-yellow-500 cursor-pointer flex items-center justify-center"
    >
      Long press
    </motion.div>
  );
};
