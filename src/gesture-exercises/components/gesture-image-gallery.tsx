import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const GestureImageGallery = () => {
  const [index, setIndex] = useState(0);

  const handleDrag = (_: any, info: any) => {
    if (info.offset.x > 100) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.x < -100) {
      setIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <AnimatePresence mode="sync">
      <motion.img
        src={images[index]}
        className="w-[300px] h-[300px] object-cover rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDrag}
      />
    </AnimatePresence>
  );
};
