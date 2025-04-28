import { motion } from "framer-motion";
import PulsingButton from "../Keyframes/components/PulsingButton";
import BouncingLoader from "../Keyframes/components/BouncingLoader";

const Main = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <motion.div className="box circle" animate={{ y: 30 }} />
      <motion.div className="box" animate={{ rotate: 20 }} />
      <motion.div className="box" animate={{ scaleY: 2 }} />
      <motion.div className="box" animate={{ skew: 40 }} />

      {/* Example 1 */}
      <PulsingButton />

      {/* Example 2 */}
      <BouncingLoader />
    </div>
  );
};

export default Main;
