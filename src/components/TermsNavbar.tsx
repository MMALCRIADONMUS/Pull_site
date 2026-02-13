"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TermsNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        // Intersection Observer for section highlighting
        const sections = document.querySelectorAll('section[id]');
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

        window.addEventListener('scroll', handleScroll);

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
            <nav className={`navbar navbar-mobile-override ${isScrolled ? 'navbar-scrolled' : ''}`} style={{ zIndex: 1, pointerEvents: 'none' }}>
                <Link href="/" className="navbar-logo" style={{ pointerEvents: 'auto' }}>
                    Pull
                </Link>
                {/* Invisible spacer to maintain layout */}
                <div className={`navbar-card ${isScrolled ? 'navbar-card-visible' : ''}`} style={{ opacity: 0, pointerEvents: 'none' }}>
                    <div className="navbar-links">
                        <Link href="#terms" className="navbar-link">Terms of Service</Link>
                        <Link href="#privacy" className="navbar-link">Privacy Policy</Link>
                    </div>
                </div>
                <div className="navbar-spacer" />
            </nav>

            {/* Layer 2: High Z-Index (Z=1002) - Contains the Links Card which should float above scrolling content */}
            <nav className={`navbar navbar-mobile-override ${isScrolled ? 'navbar-scrolled' : ''}`} style={{ zIndex: 1002, pointerEvents: 'none' }}>
                {/* Invisible Logo spacer */}
                <div className="navbar-logo" style={{ opacity: 0 }}>
                    Pull
                </div>
                <div className={`navbar-card ${isScrolled ? 'navbar-card-visible' : ''}`} style={{ pointerEvents: 'auto' }}>
                    <div className="navbar-links">
                        <Link
                            href="#terms"
                            className={`navbar-link ${activeSection === 'terms' ? 'navbar-link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, '#terms')}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#privacy"
                            className={`navbar-link ${activeSection === 'privacy' ? 'navbar-link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, '#privacy')}
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className="navbar-spacer" />
            </nav>
        </>
    );
}
