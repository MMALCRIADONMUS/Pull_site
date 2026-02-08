"use client";

import Image from "next/image";
import Link from "next/link";
import BlurText from "./BlurText";

export default function DownloadSection() {
    return (
        <section id="download" className="content-section download-section-bottom" style={{ paddingBottom: '200px' }}>
            <div className="section-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', width: '100%' }}>
                <BlurText
                    text="They decided long enough. Your turn."
                    className="section-title download-section-title"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />

                <Link
                    href="https://play.google.com/store/apps/details?id=com.pull.notifications"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-play-button"
                >
                    <Image
                        src="/google-play-icon.png"
                        alt="Google Play"
                        width={32}
                        height={32}
                        className="google-play-icon"
                    />
                    <div className="google-play-text">
                        <span>GET IT ON</span>
                        <span>Google Play</span>
                    </div>
                </Link>

                <div className="social-proof-container" style={{ marginTop: '10px', textAlign: 'center' }}>
                    <div className="stars" style={{ display: 'flex', justifyContent: 'center', gap: '2px', color: '#000000', marginBottom: '8px' }}>
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                        Join <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>10,000+</span> people reclaiming their focus
                    </p>
                </div>
            </div>
        </section>
    );
}
