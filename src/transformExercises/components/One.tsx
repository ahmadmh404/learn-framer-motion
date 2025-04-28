import { motion } from "framer-motion";

const One = () => {
  return (
    <div className="!p-20">
      <motion.div
        initial={{
          x: 0,
        }}
        animate={{
          x: 1500,
        }}
        transition={{
          duration: 4,
        }}
        className="box circle"
      />
    </div>
  );
};

export default One;
