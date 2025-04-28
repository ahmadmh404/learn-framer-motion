import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChangeEvent } from "react";

const RangeSlider = () => {
  // const scale = useMotionValue(1);
  const scaleX = useSpring(1);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    scaleX.set(+e.target.value);
  };

  return (
    <div>
      <motion.button className="box circle" style={{ scaleX }} />

      <div className="!mt-24">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.05}
          defaultValue={1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
