import { motion, useMotionValue } from "framer-motion";

const Magnetic = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) / 4);
        y.set((e.clientY - rect.top - rect.height / 2) / 4);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
