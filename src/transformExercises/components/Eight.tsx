import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

const Eight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initial = { opacity: 0, y: "-100%", zIndex: -100 };
  const animate = {
    opacity: isOpen ? 1 : 0,
    y: isOpen ? "0" : "100%",
    zIndex: isOpen ? 100 : -100,
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 h-full w-full bg-gray-900 opacity-50 flex flex-col items-center justify-center !bg-opacity-50"
        >
          <div>
            <h1 className="text-2xl font-bold"> Modal Heading</h1>
            <p className="text-gray-200 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, corporis!
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-5 text-gray-300"
          >
            <FaXmark className="size-5" />
          </button>
        </motion.div>
      </AnimatePresence>

      <button
        className="!px-4 !py-2 bg-blue-500 rounded cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
    </div>
  );
};

export default Eight;
