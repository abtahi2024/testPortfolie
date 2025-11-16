import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
      }}
      className="fixed top-0 left-0 z-50 h-6 w-6 rounded-full bg-indigo-500 mix-blend-difference pointer-events-none"
    />
  );
};

export default CustomCursor;
