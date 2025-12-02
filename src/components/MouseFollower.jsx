import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with a fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsVisible(mediaQuery.matches);

    const handleResize = () => setIsVisible(mediaQuery.matches);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
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
      {/* Visible Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-secondary rounded-full pointer-events-none z-50 shadow-sm"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%"
        }}
      />
    </>
  );
};

export default MouseFollower;
