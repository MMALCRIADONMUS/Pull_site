"use client";

import { useEffect, useRef } from 'react';
import Grainient from "./Grainient";

export default function BackgroundEffect() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            // Directly pause animation on the DOM element to avoid React re-renders
            container.style.animationPlayState = 'paused';

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = setTimeout(() => {
                // Resume animation
                if (container) {
                    container.style.animationPlayState = 'running';
                }
            }, 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="background-effect-blob"
            style={{
                /* Apply base styles here if they differ from CSS, otherwise class handles it */
                /* The inline styles for mask/filter are fine here */
            }}
        >
            <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                filter: 'blur(80px)',
                maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                /* Remove transition/animation props from here as we handle state via ref above, 
                   but we need to ensure the parent .background-effect-blob is the one with the animation.
                   Wait, globals.css says .background-effect-blob has the animation.
                   So I should put the ref on the outer div.
                */
            }}>
                <Grainient
                    color1="#3E74F1"
                    color2="#1256E5"
                    color3="#FFFFFF"
                    timeSpeed={0.4}
                    zoom={0.85}
                    noiseScale={2.0}
                    warpStrength={3.0}
                    warpFrequency={6.0}
                    blendSoftness={0.3}
                    grainAnimated={true}
                    grainAmount={0.2}
                    contrast={1.4}
                    pauseOnScroll={true}
                />
            </div>
        </div>
    );
}
