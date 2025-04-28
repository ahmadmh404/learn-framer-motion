import { motion } from "framer-motion";
const images = [
  "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const parentVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
      type: "spring",
      stiffness: 300,
    },
  },
};

const childrenVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const StaggeredImageGallery = () => {
  return (
    <motion.div
      className="flex gap-x-5"
      initial="initial"
      animate="animate"
      variants={parentVariants}
    >
      {images.map((img, idx) => (
        <motion.img
          key={idx}
          src={img}
          className="w-40 rounded-2xl"
          variants={childrenVariants}
        />
      ))}
    </motion.div>
  );
};
