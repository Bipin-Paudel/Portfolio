"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Particle {
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
    opacity: number;
    hue: number;
    life: number;
    maxLife: number;
}

export default function CanvasCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    const isDark = resolvedTheme === 'dark';
    const baseHue = 215; // Primary blue

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const createParticle = (x: number, y: number) => {
            // Professional color palette: restricted variation
            const hue = baseHue + (Math.random() * 40 - 20);
            const angle = Math.random() * Math.PI * 2;
            const force = Math.random() * 1.2 + 0.4;

            particles.current.push({
                x,
                y,
                size: isDark ? (Math.random() * 2.5 + 1.5) : (Math.random() * 3 + 2), // Slightly larger in light mode
                vx: Math.cos(angle) * force,
                vy: Math.sin(angle) * force,
                opacity: isDark ? 0.6 : 0.8, // More opaque in light mode for visibility
                hue,
                life: 0,
                maxLife: Math.random() * 40 + 60,
            });
        };

        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
            if (dist > 6) {
                const count = Math.min(Math.floor(dist / 12), 3);
                for (let i = 0; i < count; i++) {
                    const interX = lastX + (e.clientX - lastX) * (i / count);
                    const interY = lastY + (e.clientY - lastY) * (i / count);
                    createParticle(interX, interY);
                }
                lastX = e.clientX;
                lastY = e.clientY;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY } as any);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove, { passive: true });

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.current.length; i++) {
                const p = particles.current[i];

                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.985;
                p.vy *= 0.985;
                p.life++;

                const progress = p.life / p.maxLife;
                const currentOpacity = p.opacity * (1 - progress);
                p.size *= 0.99;

                if (p.life >= p.maxLife || currentOpacity <= 0 || p.size <= 0.2) {
                    particles.current.splice(i, 1);
                    i--;
                    continue;
                }

                // Draw particle with theme-optimized colors
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);

                if (isDark) {
                    // Dark mode: Bright, glowing centers
                    gradient.addColorStop(0, `hsla(${p.hue}, 85%, 75%, ${currentOpacity})`);
                    gradient.addColorStop(0.5, `hsla(${p.hue}, 75%, 65%, ${currentOpacity * 0.3})`);
                    gradient.addColorStop(1, `hsla(${p.hue}, 65%, 55%, 0)`);
                } else {
                    // Light mode: Deep, rich colors with more contrast
                    // Using 50% lightness for better punch against white
                    gradient.addColorStop(0, `hsla(${p.hue}, 90%, 50%, ${currentOpacity})`);
                    gradient.addColorStop(0.4, `hsla(${p.hue}, 85%, 60%, ${currentOpacity * 0.5})`);
                    gradient.addColorStop(1, `hsla(${p.hue}, 80%, 70%, 0)`);
                }

                ctx.fillStyle = gradient;
                ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
                ctx.fill();

                // Connection lines - darker/more visible in light mode
                for (let j = i + 1; j < Math.min(i + 3, particles.current.length); j++) {
                    const p2 = particles.current[j];
                    const d = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (d < 60) {
                        ctx.beginPath();
                        const lineOpacity = isDark ? 0.1 : 0.25;
                        ctx.strokeStyle = `hsla(${p.hue}, 80%, ${isDark ? 80 : 40}%, ${currentOpacity * lineOpacity * (1 - d / 60)})`;
                        ctx.lineWidth = isDark ? 0.5 : 0.8;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            cancelAnimationFrame(animationId);
        };
    }, [mounted, resolvedTheme, isDark]);

    if (!mounted) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
            style={{
                // Mix blend modes are tricky on white. 'multiply' or 'normal' (default) is best.
                mixBlendMode: isDark ? 'screen' : 'multiply',
                opacity: isDark ? 0.8 : 1.0 // Full opacity in light mode for maximum contrast
            }}
        />
    );
}
