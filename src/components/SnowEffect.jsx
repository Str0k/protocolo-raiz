import React, { useEffect, useRef } from 'react';

const SnowEffect = () => {
    const canvasRef = useRef(null);
    const snowflakes = useRef([]);
    const animationFrameId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Snowflake class with premium properties
        class Snowflake {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * -canvas.height;
                this.radius = Math.random() * 3 + 1; // 1-4px
                this.speed = Math.random() * 1 + 0.5; // 0.5-1.5px per frame
                this.drift = Math.random() * 0.5 - 0.25; // Horizontal drift
                this.opacity = Math.random() * 0.6 + 0.3; // 0.3-0.9 opacity
                this.twinkle = Math.random() * 0.02 + 0.01; // Twinkling effect
                this.twinkleDirection = 1;
            }

            update() {
                this.y += this.speed;
                this.x += this.drift;

                // Twinkling effect
                this.opacity += this.twinkle * this.twinkleDirection;
                if (this.opacity >= 0.9 || this.opacity <= 0.3) {
                    this.twinkleDirection *= -1;
                }

                // Reset when out of bounds
                if (this.y > canvas.height) {
                    this.reset();
                }
                if (this.x > canvas.width || this.x < 0) {
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                ctx.beginPath();

                // Create gradient for each snowflake (premium glow effect)
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.radius * 2
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity * 0.5})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
                ctx.fill();

                // Inner bright core
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.arc(this.x, this.y, this.radius * 0.7, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create snowflakes (dense but not overwhelming)
        const snowflakeCount = Math.floor((canvas.width * canvas.height) / 8000); // Responsive density
        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.current.push(new Snowflake());
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Optional: Add subtle background blur effect
            ctx.filter = 'blur(0.5px)';

            snowflakes.current.forEach(snowflake => {
                snowflake.update();
                snowflake.draw();
            });

            ctx.filter = 'none';

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
                mixBlendMode: 'screen',
                opacity: 0.85
            }}
        />
    );
};

export default SnowEffect;
