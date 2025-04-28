import { useScroll, useTransform, motion } from "framer-motion";

const UseScrollEx2 = () => {
  const { scrollY } = useScroll();

  const borderRadius = useTransform(scrollY, [0, 1000], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0]);

  return (
    <div className="realtive h-screen overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1742943679521-f4736500a471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover "
        style={{ opacity, borderRadius }}
      />

      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <h1 className="text-white text-4xl">Scroll to animate</h1>
      </div>

      <div className="h-[200vh] w-full">
        <h2 className="text-white">Scroll down</h2>
      </div>
    </div>
  );
};

export default UseScrollEx2;
