import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link href="/help" className="footer-link">
                    Help
                </Link>
                <span className="footer-separator">•</span>
                <Link href="/terms" className="footer-link">
                    Terms of Service & Privacy Policy
                </Link>
            </div>
            <p className="footer-copyright">
                © {new Date().getFullYear()} Pull
            </p>
        </footer>
    );
}
