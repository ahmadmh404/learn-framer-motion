import { motion } from "framer-motion";

const Main = () => {
  return (
    <div>
      <motion.div
        className="box circle"
        initial={{ x: 0 }}
        animate={{ y: 30 }}
        transition={{ delay: 1 }}
      />
      <motion.div
        className="box circle"
        initial={{ x: 0 }}
        animate={{ y: 30 }}
        transition={{ delay: 2, duration: 0.5 }}
      />
      <motion.div
        className="box circle"
        initial={{ x: 0 }}
        animate={{ y: 30 }}
        transition={{ delay: 2, duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Main;
