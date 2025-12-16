import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ text, className = "" }) => {
    // Split text into words
    const words = text.split(" ");

    // Container variants
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
        }),
    };

    // Child variants (Word animation)
    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h2
            className={`flex flex-wrap justify-center md:justify-start overflow-visible ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em", display: "inline-block" }}
                    key={index}
                    className="hover:scale-110 transition-transform duration-300 origin-bottom cursor-default" // Micro-interaction
                >
                    {word}
                </motion.span>
            ))}
        </motion.h2>
    );
};

export default AnimatedTitle;
