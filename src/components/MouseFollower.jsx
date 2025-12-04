import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="hidden md:block"> {/* Hide on mobile via CSS */}
      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 mix-blend-multiply opacity-30"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, rgba(5, 150, 105, 0.4) 0%, rgba(5, 150, 105, 0) 70%)"
        }}
      />
      {/* Visible Core Dot Removed as per request */}
    </div>
  );
};

export default MouseFollower;
