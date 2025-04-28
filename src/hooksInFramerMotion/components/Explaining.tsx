import { useMotionValue, useMotionValueEvent, motion } from "framer-motion";

const Explaining = () => {
  const x = useMotionValue(200);

  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation start");
  });

  useMotionValueEvent(x, "change", (latest) => {
    console.log("values x changed to ", latest);
  });

  return (
    <div className="flex !space-x-5">
      <motion.div
        className="box circle"
        drag
        dragConstraints={{ left: 0, right: 100 }}
        style={{ x }}
      />
    </div>
  );
};

export default Explaining;
