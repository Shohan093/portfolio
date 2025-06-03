import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

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
    };

    const removeHoverEffect = (e) => {
      ringRef.current.classList.remove("hovered");
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
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-0.5 h-0.5 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 transition duration-75 ease-out"
      ></div>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-6 h-6 border border-black rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
      ></div>
    </>
  );
};

export default CustomCursor;
