import { motion } from "framer-motion";
import { useState } from "react";

const Eleven = () => {
  const [isViewed, setIsViewed] = useState(false);

  const showToast = () => {
    setIsViewed(true);

    setTimeout(() => {
      setIsViewed(false);
    }, 3000);
  };

  return (
    <div className="relative w-full flex items-cneter justify-center">
      <button className="!px-4 !py-2 bg-blue-500 rounded" onClick={showToast}>
        {isViewed ? "Hide" : "Send"} notification
      </button>

      <motion.div
        initial={{ x: 500 }}
        animate={{ x: isViewed ? 0 : 500 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 70,
        }}
        className="fixed w-[12rem] top-5 right-5 !px-4 !py-2 bg-gray-100 rounded border-b-2 border-green-500"
      >
        <p className="text-green-500 font-semibold">Notification</p>
      </motion.div>
    </div>
  );
};

export default Eleven;
