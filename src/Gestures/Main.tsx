import { motion } from "framer-motion";

const Main = () => {
  return (
    // whileHover
    // <motion.div
    //   className="box"
    //   whileHover={{
    //     scale: 1.2,
    //     rotate: 20,
    //   }}
    //   transition={{
    //     ease: "backIn",
    //     type: "spring",
    //     stiffness: 300,
    //   }}
    // ></motion.div>

    // whileTap
    // <motion.div
    //   className="box"
    //   whileTap={{
    //     scale: 0.5,
    //     backgroundColor: "#2f2f2f",
    //   }}
    //   transition={{
    //     type: "spring",
    //     stiffness: 300,
    //   }}
    // ></motion.div>

    // whileDrag
    <motion.div
      className="box"
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
    />
  );
};

export default Main;
