"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HelpNavbar() {
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
        const sectionIds = ['faq', 'getting-started', 'features', 'troubleshooting', 'contact'];
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -70% 0px', // Adjusted to trigger when section is near top
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

        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
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
            {/* Layer 1: Low Z-Index (Z=1) - Background styling */}
            <nav className={`navbar navbar-mobile-override ${isScrolled ? 'navbar-scrolled' : ''}`} style={{ zIndex: 1, pointerEvents: 'none' }}>
                <Link href="/" className="navbar-logo" style={{ pointerEvents: 'auto' }}>
                    Pull
                </Link>
                {/* Invisible spacer to maintain layout */}
                <div className={`navbar-card ${isScrolled ? 'navbar-card-visible' : ''}`} style={{ opacity: 0, pointerEvents: 'none' }}>
                    <div className="navbar-links">
                        <Link href="#faq" className="navbar-link">FAQ</Link>
                        <Link href="#getting-started" className="navbar-link">Getting Started</Link>
                        <Link href="#features" className="navbar-link">Features</Link>
                        <Link href="#troubleshooting" className="navbar-link">Troubleshooting</Link>
                        <Link href="#contact" className="navbar-link">Contact</Link>
                    </div>
                </div>
                <div className="navbar-spacer" />
            </nav>

            {/* Layer 2: High Z-Index (Z=1002) - Interactive Links */}
            <nav className={`navbar navbar-mobile-override ${isScrolled ? 'navbar-scrolled' : ''}`} style={{ zIndex: 1002, pointerEvents: 'none' }}>
                {/* Invisible Logo spacer */}
                <div className="navbar-logo" style={{ opacity: 0 }}>
                    Pull
                </div>
                <div className={`navbar-card ${isScrolled ? 'navbar-card-visible' : ''}`} style={{ pointerEvents: 'auto' }}>
                    <div className="navbar-links">
                        <Link
                            href="#faq"
                            className={`navbar-link ${activeSection === 'faq' ? 'navbar-link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, '#faq')}
                        >
                            FAQ
                        </Link>
                        <Link
                            href="#getting-started"
                            className={`navbar-link ${activeSection === 'getting-started' ? 'navbar-link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, '#getting-started')}
                        >
                            Getting Started
                        </Link>
                        <Link
                            href="#features"
                            className={`navbar-link ${activeSection === 'features' ? 'navbar-link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, '#features')}
                        >
                            Features
                        </Link>
                        <Link
                            href="#troubleshooting"
                            className={`navbar-link ${activeSection === 'troubleshooting' ? 'navbar-link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, '#troubleshooting')}
                        >
                            Troubleshooting
                        </Link>
                        <Link
                            href="#contact"
                            className={`navbar-link ${activeSection === 'contact' ? 'navbar-link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, '#contact')}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="navbar-spacer" />
            </nav>
        </>
    );
}
