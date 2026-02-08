"use client";

import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import RotatingText, { RotatingTextRef } from "./RotatingText";

export default function Manifesto() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Animation control
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { amount: 0.5, once: false });

    const [theyComplete, setTheyComplete] = useState(false);
    const [youComplete, setYouComplete] = useState(false);

    const theyRef = useRef<RotatingTextRef>(null);
    const youRef = useRef<RotatingTextRef>(null);

    // Reset when scrolling out of view
    useEffect(() => {
        if (!isInView) {
            setTheyComplete(false);
            setYouComplete(false);
            theyRef.current?.reset();
            youRef.current?.reset();
        }
    }, [isInView]);

    return (
        <section id="manifesto" className="content-section">
            <div className="manifesto-card">
                {/* Collapsed Header - Always Visible */}
                <div className="manifesto-header" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 ref={containerRef} className="manifesto-title" style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'clamp(32px, 6vw, 76px)',
                        lineHeight: 1.1,
                        width: '100%',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        whiteSpace: 'nowrap'
                    }}>
                        {/* Group 1: They [rotating] */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '45%' }}>
                            <span>They</span>
                            <div style={{ width: '3.5em', display: 'flex', justifyContent: 'flex-start', marginLeft: '0.2em' }}>
                                <RotatingText
                                    ref={theyRef}
                                    texts={['push', 'invade', 'control', 'disrupt']}
                                    mainClassName="text-push"
                                    staggerDuration={0.025}
                                    rotationInterval={4500}
                                    transition={{ type: "spring", damping: 40, stiffness: 60 }}
                                    animatePresenceMode="popLayout"
                                    auto={isInView && !theyComplete}
                                    onNext={(index) => {
                                        if (index === 0) setTheyComplete(true);
                                    }}
                                />
                            </div>
                        </div>

                        {/* Spacer/Gap can be adjusted here if needed */}

                        {/* Group 2: You [rotating] */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '45%', marginLeft: '0.5em' }}>
                            <span>You</span>
                            <div style={{ width: '3.5em', display: 'flex', justifyContent: 'flex-start', marginLeft: '0.2em' }}>
                                <RotatingText
                                    ref={youRef}
                                    texts={['pull', 'intend', 'choose', 'focus']}
                                    mainClassName="text-pull"
                                    staggerDuration={0.025}
                                    rotationInterval={4500}
                                    transition={{ type: "spring", damping: 40, stiffness: 60 }}
                                    initial={{ y: '-100%', opacity: 0 }}
                                    exit={{ y: '120%', opacity: 0 }}
                                    startDelay={2000}
                                    animatePresenceMode="popLayout"
                                    auto={isInView && !youComplete}
                                    onNext={(index) => {
                                        if (index === 0) setYouComplete(true);
                                    }}
                                />
                            </div>
                        </div>
                    </h2>

                    <p className="manifesto-intro" style={{
                        marginTop: '40px',
                        maxWidth: '800px',
                        textAlign: 'center',
                        color: 'var(--color-text-secondary)',
                        fontSize: '1.1rem',
                        lineHeight: 1.6
                    }}>
                        Your attention has been hijacked. Every push-notification is an invasion—systems designed
                        to capture your focus and profit from your distraction. You didn't choose this. They chose you as their product.
                    </p>
                </div>

                {/* Expanded Content */}
                <div className={`manifesto-content ${isExpanded ? 'expanded' : ''}`}>
                    <div className="manifesto-section">
                        <h3>The Attention Economy Is Breaking You</h3>
                        <p>
                            Meta. Google. TikTok. X. They don't sell products—they sell <em>you</em>.
                            Your eyes. Your time. Your interrupted thoughts. Your ability to be present.
                        </p>
                        <p>
                            You pay for it with fragmented concentration, silent anxiety at every vibration,
                            abandoned conversations, and the inability to simply... <em>be</em>.
                        </p>
                        <blockquote>
                            <p>"Never before in history have 50 designers at three Silicon Valley companies
                                been able to capture the attention of 2 billion people."</p>
                            <cite>— Tristan Harris, former Google engineer</cite>
                        </blockquote>
                    </div>

                    <div className="manifesto-section">
                        <h3>They Know The Poison</h3>
                        <p>
                            Silicon Valley executives ban phones at their children's schools.
                            Bill Gates didn't give his kids phones until age 14.
                            They know what they built—and they don't let their own families drink the poison.
                        </p>
                        <p className="manifesto-truth">
                            <strong>Less is freedom. Silence is power. Choice is dignity.</strong>
                        </p>
                    </div>

                    <div className="manifesto-section">
                        <h3>The Resistance Starts Now</h3>
                        <p>
                            Pull isn't just an app. It's a movement. We exist because you have the right to
                            decide when you want to be interrupted, choose what deserves your attention,
                            and reclaim the control that was stolen from you.
                        </p>
                        <p className="manifesto-cta">
                            <strong>Your attention is yours. Stop giving it away for free.</strong>
                        </p>
                    </div>
                </div>

                {/* Toggle Button */}
                <button
                    className="manifesto-toggle"
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? (
                        <>
                            <span>Read Less</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15 12.5L10 7.5L5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </>
                    ) : (
                        <>
                            <span>Read Full</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </>
                    )}
                </button>
            </div>
        </section>
    );
}
