import React from "react";
import { motion } from "framer-motion";

const CalculateButton = ({text=''}) => {
  return (
    <motion.button
      className="px-2 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg"
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0, 0, 255, 0.5)" }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {text}
    </motion.button>
  );
};

export default CalculateButton;
