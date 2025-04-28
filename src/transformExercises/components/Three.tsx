import { motion } from "framer-motion";
import { BsEmojiLaughingFill } from "react-icons/bs";

const initial = { rotate: 0 };
const animate = { rotate: [0, -70, 0] };
const transition = { duration: 1, ease: "easeOut", repeat: Infinity };

const Three = () => {
  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      <BsEmojiLaughingFill className="fill-yellow-500 size-20" />
    </motion.div>
  );
};

export default Three;
