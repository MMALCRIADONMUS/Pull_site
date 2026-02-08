"use client";

import { motion } from "framer-motion";
import "./HowItWorks.css";

// SVG Icons for How It Works cards
const SwipeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hiw-icon hiw-icon-blue">
        <path d="M18 8L22 12L18 16" />
        <path d="M2 12H22" />
        <path d="M6 8L2 12L6 16" />
    </svg>
);

const BlockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hiw-icon hiw-icon-red">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
);

const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hiw-icon hiw-icon-green">
        <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" />
        <path d="M19 15L20 17L22 18L20 19L19 21L18 19L16 18L18 17L19 15Z" />
        <path d="M5 17L6 19L8 20L6 21L5 23L4 21L2 20L4 19L5 17Z" />
    </svg>
);

const steps = [
    {
        icon: <SwipeIcon />,
        title: "Swipe",
        description: "Drag any notification you don't want. That's it — no menus, no settings."
    },
    {
        icon: <BlockIcon />,
        title: "Block",
        description: "Pull instantly creates a rule. All notifications like that one are blocked forever."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hiw-icon hiw-icon-green">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Privacy First",
        description: "Your data stays on your device. We don't sell your attention; we protect it."
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="content-section">
            <div className="section-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Just One Simple Step</h2>
                </motion.div>

                <div className="how-it-works-cards">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="hiw-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="hiw-icon-container">
                                {step.icon}
                            </div>
                            <h3 className="hiw-title">{step.title}</h3>
                            <p className="hiw-description">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
