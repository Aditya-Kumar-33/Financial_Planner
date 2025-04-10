import { X } from "lucide-react";
import React, { useEffect } from "react";

export default function Modal({ open, setOpen, children }) {
  if (!open) return null;

  //Escape key close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setOpen]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] z-20"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-hidden={!open}
    >
      <button
          className="absolute top-[3%] right-[4%] bg-red-500 text-white p-2 rounded-full hover:bg-red-600 hover:scale-105 hover:cursor-pointer duration-300"
          onClick={() => setOpen(false)}
        >
          <X/>
        </button>
      <div
        className="w-[85%] h-[80%] bg-[#121323]/99 p-5 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.7)]"
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>
  );
}
