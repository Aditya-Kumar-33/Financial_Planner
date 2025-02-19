import React, { useState } from "react";
import { motion } from "framer-motion";

const InputBoxNum = ({label='',placeholder=''}) => {
  const [amount, setAmount] = useState("");

  const handleNumber = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setAmount(value);
  };

  return (
    <>
        <div className="flex items-center gap-4 p-2 rounded-lg w-full max-w-md">
      <span className="text-lg font-medium mr-2">{label}</span>
      <motion.input
        type="text"
        value={amount ? `₹ ${amount}` : ""}
        placeholder={placeholder}
        className="flex-1 p-2 border rounded-lg outline-none"
        onChange={handleNumber}
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
    </div>
    </>
  );
};

export default InputBoxNum;
