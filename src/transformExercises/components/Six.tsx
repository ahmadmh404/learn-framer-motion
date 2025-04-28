import { motion } from "framer-motion";
import { useState } from "react";

const vairants = {
  faded: { opacity: 0, y: 20, z: 0 },
  visible: {
    opacity: 1,
    y: 0,
    z: -10,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
};

const Six = () => {
  const [isFaded, setIsFaded] = useState(false);

  return (
    <div>
      <motion.div
        className="box circle !mb-5"
        variants={vairants}
        initial="visible"
        animate={!isFaded ? "visible" : "faded"}
      />

      <button
        onClick={() => setIsFaded((prev) => !prev)}
        className="!px-4 !py-2 bg-white text-gray-800 rounded-md text-semibold"
      >
        Toggle Circle
      </button>
    </div>
  );
};

export default Six;
