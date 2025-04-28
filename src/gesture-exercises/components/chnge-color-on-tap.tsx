import { motion } from "framer-motion";
import { useState } from "react";

const colors = ["bg-red-500", "bg-green-500", "bg-blue-500"];

export const ChangeColorOnTap = () => {
  const [index, setIndex] = useState(0);

  const handleChangeColor = () =>
    setIndex((prev) => (prev + 1) % colors.length);

  console.log("color: ", colors[index]);

  return (
    <motion.div
      className={`w-32 h-32 rounded-2xl ${colors[index]}`}
      onTap={handleChangeColor}
    />
  );
};
