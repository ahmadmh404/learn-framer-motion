import { motion } from "framer-motion";
import { useState } from "react";
import { CiBurger } from "react-icons/ci";

const Seven = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <button onClick={() => setIsOpen((prev) => !prev)} className="!m-5">
        <CiBurger className="size-6" />
      </button>

      <motion.aside
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: isOpen ? "0%" : "-100%", opacity: 1 }}
        transition={{
          duration: 0.3,
        }}
        className="absolute w-[20rem] h-screen !p-5 left-0 top-0 bg-gray-700"
      >
        <h1 className="text-2xl text-white font-bold">Aniamted Sidebar</h1>
      </motion.aside>
    </div>
  );
};

export default Seven;
