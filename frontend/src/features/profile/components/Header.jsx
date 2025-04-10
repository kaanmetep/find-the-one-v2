import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "It all starts here",
  "Make your move",
  "Your story starts now",
  "Step into your love story",
];

function Header({ firstName }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <p className="text-gray-600 text-xl lg:text-2xl">
        Welcome{" "}
        <span className="font-bold text-gray-800">
          {firstName?.at(0).toUpperCase() + firstName?.slice(1)}!
        </span>
      </p>

      <div className="h-6 mt-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={messages[index]}
            className="text-gray-400 text-xs lg:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
