import { motion, useScroll, useTransform } from "framer-motion";

const UseScrollEx1 = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        className="flex items-center justify-center bg-blue-500 w-32 h-32 rounded-lg shadow-lg font-bold text-2xl !p-5"
        style={{ scale, opacity }}
      >
        Hello
      </motion.div>
      <div className="w-full h-[180vh]"></div>
    </div>
  );
};

export default UseScrollEx1;
