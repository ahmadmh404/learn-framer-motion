import { useState } from "react";
import { motion } from "framer-motion";
import { galleryChilfrenVariants, galleryParentVariants } from "../../variants";

const galleryImages = [
  "https://plus.unsplash.com/premium_photo-1670537995192-c0b562f5c7ba?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1670537995391-c8dc4da967ad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1670537994838-29fb149b47e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1670537995287-6dfadc8e57df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
];

const Advanceed = () => {
  const [showImages, setShowImages] = useState(false);

  const handleClick = () => setShowImages((prev) => !prev);

  return (
    <div>
      <button
        className="!py-2 !px-4 rounded-lg bg-yellow-300 font-bold cursor-pointer !mb-5 "
        onClick={handleClick}
      >
        {!showImages ? "Show images" : "Hide images"}
      </button>

      <motion.div
        className="flex gap-4"
        variants={galleryParentVariants}
        initial={"hidden"}
        animate={showImages ? "visible" : "hidden"}
      >
        {galleryImages.map((img, ind) => (
          <motion.img
            variants={galleryChilfrenVariants}
            key={ind}
            src={img}
            alt={`gallery_img_${ind}`}
            className="w-[100px] rounded-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Advanceed;
