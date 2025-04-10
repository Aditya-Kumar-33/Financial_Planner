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
      <div
        className="w-[85%] h-[80%] bg-[#121323]/99 p-5 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.7)]"
        onClick={(e) => e.stopPropagation()} // modal won't close when clicking inside
      >
        {children}
        <div className="flex justify-center">
        <button
          className="mt-3 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
        </div>
      </div>
    </div>
  );
}
