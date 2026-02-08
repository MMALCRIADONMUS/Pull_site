"use client";

import { useEffect, useState } from "react";
import GradualBlur from "./GradualBlur";

export default function FooterScrim() {
    const [isVisible, setIsVisible] = useState(true);
    const [isBlurVisible, setIsBlurVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const scrollPosition = scrollY + window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const bottomThreshold = 50;

                setIsVisible(scrollPosition < documentHeight - bottomThreshold);
                setIsBlurVisible(scrollY > 10);
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`footer-scrim-container ${!isVisible ? "footer-scrim--hidden" : ""}`}
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                pointerEvents: 'none',
                transition: 'opacity 0.5s ease',
            }}
        >
            {/* Simple Scrim (Always visible until bottom) */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2.1rem',
                    background: 'linear-gradient(to top, rgba(227, 231, 241, 1) 0%, rgba(227, 231, 241, 0) 100%)',
                    transition: 'opacity 0.5s ease',
                }}
            />

            {/* Gradual Blur (Visible only on scroll) */}
            <div style={{ opacity: isBlurVisible ? 1 : 0, transition: 'opacity 0.5s ease' }}>
                <GradualBlur
                    position="bottom"
                    height="2.1rem"
                    strength={0.2}
                    divCount={8}
                    curve="linear"
                    exponential={true}
                    opacity={1}
                    className="footer-blur"
                    style={{}}
                />
            </div>
        </div>
    );
}
