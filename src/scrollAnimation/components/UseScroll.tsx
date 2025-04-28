import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const UseScroll = () => {
  const { scrollY } = useScroll();

  // console.log("first: ", scroll);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("apge progress: ", latest);
  });

  return (
    <div>
      <h1 className="text-bold text-3xl text-white">HEllo</h1>

      <ul className="h-screen">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <ul className="h-screen">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default UseScroll;
