import { motion } from "framer-motion";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const items = [
  { title: "item 1", content: "thsi is the content of the item 1" },
  { title: "item 2", content: "thsi is the content of the item 2" },
  { title: "item 3", content: "thsi is the content of the item 3" },
  { title: "item 4", content: "thsi is the content of the item 4" },
];

const Ten = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="!space-y-2">
      {items.map((item, idx) => (
        <div
          className="relative overflow-hidden w-md max-w-lg bg-gray-900 text-white !p-4"
          key={idx}
        >
          <div className="header flex items-center justify-between">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <button
              type="button"
              className="cursor-pointer"
              onClick={() =>
                setOpenIndex((prev) => (prev === idx ? null : idx))
              }
            >
              {openIndex === idx ? (
                <BiMinus className="size-5" />
              ) : (
                <BiPlus className="size-5" />
              )}
            </button>
          </div>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: openIndex === idx ? "auto" : 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden !mt-3"
          >
            <p className="text-gray-300">{item.content}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Ten;
