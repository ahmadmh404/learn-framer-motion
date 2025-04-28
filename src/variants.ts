const shapeTransition = { duration: 0.3, type: "spring", stiffness: 300 };

// Gestures
export const shapeVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    skew: 1,
    borderRadius: "0%",
    transition: shapeTransition,
  },
  hover: {
    scale: 0.8,
    rotate: 180,
    skew: 10,
    borderRadius: "50%",
    transition: shapeTransition,
  },
  click: {
    scale: 1.1,
    rotate: -180,
    skew: -10,
    borderRadius: "20%",
    transition: shapeTransition,
  },
};

// Stagger Animations
export const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      type: "spring",
      stiffness: 200,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Animated Gallery

export const galleryParentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      staggerDirection: 1,
    },
  },
};

export const galleryChilfrenVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
