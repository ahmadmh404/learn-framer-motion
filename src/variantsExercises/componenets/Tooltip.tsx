import { motion } from "framer-motion";
import { useState } from "react";

const Tooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  const varaints = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="relative">
      <motion.div
        className="absolute w-full -top-12 left-1/2 -translate-x-1/2 !px-5 !py-2 rounded-xl bg-gray-100 text-gray-900"
        variants={varaints}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        <p className="text-gray-900 font-medium font-serif text-center">
          tooltip
        </p>
      </motion.div>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-2xl font-semibold"
      >
        Click on Me
      </button>
    </div>
  );
};

export default Tooltip;
