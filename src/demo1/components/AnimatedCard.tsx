import { motion } from "framer-motion";

const initial = {
  scale: 1,
  rotate: 0,
};

const onHover = {
  scale: 1.05,
};

const onTap = {
  scale: 0.85,
};

const dragConst = {
  top: -20,
  left: -20,
  right: 20,
  bottom: 20,
};

const AnimatedCard = () => {
  return (
    <motion.div
      initial={initial}
      whileHover={onHover}
      whileTap={onTap}
      drag
      dragConstraints={dragConst}
      className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
    >
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1728044849242-516700295875?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt=""
      />

      <div className="!p-5">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Card Title</h2>
        <p className="text-gray-700 !mb-4">
          This is a simple card example with framer motion and tailwindcss for
          styling
        </p>

        <button className="!px-4 !py-2 text-white bg-gray-800">
          Learn more..
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
