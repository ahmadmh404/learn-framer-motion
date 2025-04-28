import { motion } from "framer-motion";

const TExtComponent = () => {
  return (
    <motion.h1
      className="text-2xl font-bold"
      initial={{ x: 0 }}
      animate={{ x: [0, "50vh", "85vh"] }}
      transition={{ duration: 2 }}
    >
      SLide the text
    </motion.h1>
  );
};

export default TExtComponent;
