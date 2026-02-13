"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BackgroundEffect from "./BackgroundEffect";

import ShinyText from "./ShinyText";

export default function Hero() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const { scrollY } = useScroll();

    const xMove = useTransform(scrollY, [0, 500], [0, 500]); // Moves right 500px by 500px scroll
    const opacityFade = useTransform(scrollY, [0, 300], [1, 0]); // Fades out by 300px scroll
    const rotateCard = useTransform(scrollY, [0, 500], [0, 15]); // Slight rotation
    const textOffset = useTransform(scrollY, [0, 1000], ["65%", "75%"]); // Moves text along curve


    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        // Create audio element for notification sound
        audioRef.current = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgqMbVsHxMNiltkruznGc9LTdqqcPNpmI0KS5jlbXGqGxAMzFlnrzNqnFEMTJqm7nErHZHNDRonbfDpnVFMjFknrnBq3ZIODdqobnCq3hHNzVmobm+rHlJODhnn7q+rHxJODlnobq/rn5LOjtpoLy/sH9MOzppor+/sn9POzxrpL/Bs4FQPT5spsDDtIRSPz9up8HEtoVUP0BvqMLFuIdWQEFwqsPHuYlXQkJxq8TIu4tZQ0NyrMXJvYxaREVzrsbLvo1cRUZ0r8fMwI5eRkd1sMjNwZBfR0h2scnOw5FhSEl3ssnPxJJiSUp4s8rQxpRkSkx5tMvSx5VlS016tcvTyJdnTE57tszbyphmTU99uszTyppqTlF+uM3b0JlrT1F/uM7c0ZttT1J/uc7c0pxuUFOAuc/c05xwUFOAu8/bz5xxUVSBu9Db");

        // Trigger animation after a short delay
        const timer = setTimeout(() => {
            // Play notification sound
            if (audioRef.current) {
                audioRef.current.volume = 0.3;
                audioRef.current.play().catch(() => { });
            }
        }, 800);

        const handleFirstScroll = () => {
            if (videoRef.current) {
                videoRef.current.play().catch((error) => {
                    console.log("Video play failed on scroll:", error);
                });
                // Remove listener after first attempt
                window.removeEventListener('scroll', handleFirstScroll);
            }
        };

        window.addEventListener('scroll', handleFirstScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleFirstScroll);
        };
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="headline-container">
                <h1 className="headline-main">
                    Recover Your <ShinyText text="Attention" disabled={false} speed={6} className="custom-class" color="#000000" shineColor="#a0a0a0" />
                </h1>
                <p className="headline-sub">& Free Your Mind</p>
            </div>

            <div className="hero-content">
                <motion.div
                    className="notification-card"
                    initial={{ y: -100, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.4 }}
                    style={{ x: xMove, opacity: opacityFade, rotate: rotateCard }}
                >
                    <div className="notification-icon">
                        <Image
                            src="/pull-icon.png"
                            alt="Pull"
                            width={48}
                            height={48}
                            style={{ borderRadius: '12px', pointerEvents: 'none' }}
                            draggable={false}
                        />
                    </div>
                    <div className="notification-inner">
                        <p className="notification-text">
                            We learn from your <span className="text-blue">swipes</span> to <strong>block</strong> unwanted <span className="text-green">notifications</span>
                        </p>
                    </div>
                </motion.div>

                <div className="download-section">
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.pull.notifications"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="google-play-button"
                        id="hero-google-play-btn"
                    >
                        <Image
                            src="/google-play-icon.png"
                            alt="Google Play"
                            width={32}
                            height={32}
                            className="google-play-icon"
                        />
                        <div className="google-play-text">
                            <span>Download on</span>
                            <span>Google Play</span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Ellipse cutout inside Hero - visible in initial viewport */}
            {/* Ellipse cutout inside Hero - visible in initial viewport */}
            <div className="cutout-container">
                <div
                    className="curved-text-container"
                >
                    <svg viewBox="0 0 1014 898" className="curved-text-svg">
                        <defs>
                            <path
                                id="curve-path"
                                d="M -28, 449 A 535, 475 0 0 1 1042, 449"
                                fill="transparent"
                            />
                        </defs>
                        <text className="curved-text-content">
                            <motion.textPath
                                href="#curve-path"
                                startOffset={textOffset}
                                textAnchor="middle"
                            >
                                Eliminate 40% of daily notifications, all distractions     *     Average of 7,000 fewer notifications annually
                            </motion.textPath>
                        </text>
                    </svg>
                </div>

                <div className="cutout-ellipse">
                    <div className="ellipse-screen-image-container" style={{
                        width: '411px',
                        position: 'relative',
                        zIndex: 10,
                        // Clean implementation without masks or clipping
                    }}>
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                objectFit: 'contain',
                            }}
                        >
                            <source src="/assets/appvideo_prores_alpha.mov" type='video/mp4; codecs="hvc1"' />
                            <source src="/assets/appvideo.webm" type="video/webm" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
