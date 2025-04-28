import { motion } from "framer-motion";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const navbarItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "Main Content" },
  { id: 3, title: "Contact" },
  { id: 4, title: "About" },
];

const SlideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: {
      left: "-100vw",
      zIndex: -999,
      transition: { duration: 0.5 },
    },
    visible: {
      left: isOpen ? 0 : -999,
      zIndex: isOpen ? 999 : -999,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full h-screen">
      <motion.nav
        className="absolute top-0 left-0 h-full w-52 bg-slate-700/20 !p-5 shadow-lg shadow-gray-700/80"
        variants={variants}
        initial={"hidden"}
        animate={"visible"}
      >
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaXmark size={18} className="absolute right-5 top-5" />
        </button>

        <ul>
          {navbarItems.map(({ title }, idx) => (
            <li
              className="!py-2 border-b border-b-gray-700 font-semibold hover:underline hover:text-blue-500/70 transition-colors"
              key={idx}
            >
              {title}
            </li>
          ))}
        </ul>
      </motion.nav>

      <div className="w-full h-full !p-5 flex items-center justify-center">
        <button
          className="!px-4 !py-2 bg-blue-500/50 rounded-sm cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "Close" : "Open"} the sidebar
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;
