"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 10);
                ticking = false;
            });
        };

        // Intersection Observer for section highlighting
        const sections = document.querySelectorAll('.content-section, .hero');
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    setActiveSection(id);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            if (section.id) {
                observer.observe(section);
            }
        });

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            {/* Layer 1: Low Z-Index (Z=1) - Contains the "Pull" Logo which should be covered by scrolling content (Z=10) */}
            <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} style={{ zIndex: 1, pointerEvents: 'none' }}>
                <Link href="/" className="navbar-logo" style={{ pointerEvents: 'auto' }}>
                    Pull
                </Link>
                {/* Invisible spacer to maintain layout */}
                <div className={`navbar-card ${isScrolled ? 'navbar-card-visible' : ''} ${activeSection === 'download' ? 'navbar-card--hidden' : ''}`} style={{ opacity: 0, pointerEvents: 'none' }}>
                    <div className="navbar-links">
                        <Link href="#manifesto" className="navbar-link">Manifesto</Link>
                        <Link href="#how-it-works" className="navbar-link">How it Works</Link>
                        <Link href="#" className="navbar-link navbar-link--download">Download</Link>
                    </div>
                </div>
                <div className="navbar-spacer" />
            </nav>

            {/* Layer 2: High Z-Index (Z=1002) - Contains the Links Card which should float above scrolling content */}
            <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} style={{ zIndex: 1002, pointerEvents: 'none' }}>
                {/* Invisible Logo spacer */}
                <div className="navbar-logo" style={{ opacity: 0 }}>
                    Pull
                </div>
                <div className={`navbar-card ${isScrolled ? 'navbar-card-visible' : ''} ${activeSection === 'download' ? 'navbar-card--hidden' : ''}`} style={{ pointerEvents: 'auto' }}>
                    <div className="navbar-links">
                        <Link
                            href="#manifesto"
                            className={`navbar-link ${activeSection === 'manifesto' ? 'navbar-link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, '#manifesto')}
                        >
                            Manifesto
                        </Link>
                        <Link
                            href="#how-it-works"
                            className={`navbar-link ${activeSection === 'how-it-works' ? 'navbar-link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, '#how-it-works')}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.pull.notifications"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar-link navbar-link--download"
                        >
                            Download
                        </Link>
                    </div>
                </div>
                <div className="navbar-spacer" />
            </nav>
        </>
    );
}
