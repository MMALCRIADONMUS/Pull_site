"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqData = [
    {
        question: "Does Pull read my messages?",
        answer: "No. Pull runs locally on your device. It only sees notifications to block them. Your personal data never leaves your phone."
    },
    {
        question: "Will it drain my battery?",
        answer: "Pull is designed to be extremely lightweight. It only wakes up when a notification arrives, processing it in milliseconds."
    },
    {
        question: "Does it work with WhatsApp?",
        answer: "Yes, Pull works with any app that sends notifications, including WhatsApp, Instagram, Telegram, and more."
    }
];

export default function HomeFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="content-section home-faq-section" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.5rem', opacity: 0.9 }}>
                Common Questions
            </h2>
            <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="faq-item"
                        style={{
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            paddingBottom: '15px'
                        }}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--color-text-primary)',
                                fontSize: '1.1rem',
                                padding: '10px 0',
                                cursor: 'pointer',
                                textAlign: 'left'
                            }}
                        >
                            <span style={{ fontWeight: 500 }}>{item.question}</span>
                            <span style={{
                                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                opacity: 0.7
                            }}>
                                ▼
                            </span>
                        </button>

                        <motion.div
                            initial={false}
                            animate={{
                                height: openIndex === index ? 'auto' : 0,
                                opacity: openIndex === index ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                        >
                            <p style={{
                                padding: '5px 0 10px',
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.95rem',
                                lineHeight: 1.6
                            }}>
                                {item.answer}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <a href="/help" style={{ color: 'var(--color-primary, #3b82f6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                    View all FAQs →
                </a>
            </div>
        </section>
    );
}
