import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);

  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;

        ringRef.current.style.left = `${clientX}px`;
        ringRef.current.style.top = `${clientY}px`;
      }
    };

    const addHoverEffect = (e) => {
      ringRef.current.classList.add("hovered");
      setCursorText("");
    };

    const removeHoverEffect = (e) => {
      ringRef.current.classList.remove("hovered");
      setCursorText("");
    };

    document.addEventListener("mousemove", moveCursor);

    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      {/* Inside Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-1.5 h-1.5 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 transition duration-75 ease-out"
      ></div>

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-7 h-7 border border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out flex items-center justify-center"
      >
        <span
          ref={textRef}
          className="text-xs font-medium text-black transition-colors duration-200"
        >
          {cursorText}
        </span>
      </div>
    </>
  );
};

export default CustomCursor;
