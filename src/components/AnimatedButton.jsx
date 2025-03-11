import React, { useState, useRef, useEffect } from "react";

const AnimatedButton = ({ children, text, color, color2, text1, text2, border, ...props }) => {
    const [hovered, setHovered] = useState(false);
    const [textWidth, setTextWidth] = useState(0);
    const ref = useRef(null);

    // Get text width for proper animation
    useEffect(() => {
        if (ref.current) {
            setTextWidth(ref.current.offsetWidth);
        }
    }, [hovered]);

    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative flex items-center px-4 py-2 cursor-pointer rounded-lg text-white transition-all duration-500 ease-out ${border ? border : ""}  ${hovered ? `${color2 ? color2 : "bg-transparent"}` : `${color ? `${color}` : "bg-transparent"}` } `}
            {...props}
        >
            {/* Static Text */}
            <span ref={ref} className= {`transition-all`}>
                {text}
            </span>

            {/* Sliding Icon (Children) */}
            <div
                className= {`transition-all ${hovered ? "opacity-100 ml-2" : "opacity-0" } duration-300 ease-out`}
            >
                {children}
            </div>
        </button>
    );
};

export default AnimatedButton;
