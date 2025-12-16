import React, { useEffect, useRef } from 'react';

const SnowEffect = () => {
    const canvasRef = useRef(null);
    const snowflakes = useRef([]);
    const animationFrameId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Ultra-lightweight Snowflake class
        class Snowflake {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * -canvas.height;
                this.radius = Math.random() * 2 + 1; // 1-3px (reduced)
                this.speed = Math.random() * 0.8 + 0.4; // 0.4-1.2px
                this.drift = Math.random() * 0.3 - 0.15;
                this.opacity = Math.random() * 0.4 + 0.4; // 0.4-0.8 (simplified)
            }

            update() {
                this.y += this.speed;
                this.x += this.drift;

                // Reset when out of bounds
                if (this.y > canvas.height) {
                    this.reset();
                }
                if (this.x > canvas.width || this.x < 0) {
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                // Simple solid circle - no gradients for performance
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // DRASTICALLY reduced count for performance (70% less)
        const isMobile = window.innerWidth < 768;
        const snowflakeCount = isMobile
            ? Math.floor((canvas.width * canvas.height) / 35000) // Mobile: very few
            : Math.floor((canvas.width * canvas.height) / 25000); // Desktop: still conservative

        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.current.push(new Snowflake());
        }

        // Optimized animation loop
        const animate = () => {
            // Clear canvas efficiently
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw in single loop
            for (let i = 0; i < snowflakes.current.length; i++) {
                snowflakes.current[i].update();
                snowflakes.current[i].draw();
            }

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            snowflakes.current = [];
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[100]"
            style={{
                opacity: 0.7 // Slightly more subtle
            }}
        />
    );
};

export default SnowEffect;
