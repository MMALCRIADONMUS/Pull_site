'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        category: "General Questions",
        items: [
            {
                question: "Is Pull free to use?",
                answer: "Pull is free to download, but you'll need a paid plan to use its core features."
            },
            {
                question: "Does Pull work with all apps?",
                answer: "Pull works with any app that sends notifications through Android's notification system."
            },
            {
                question: "Does Pull work without internet?",
                answer: "Yes, core filtering features work offline. Internet is only needed for AI-assisted features and syncing filtering strategies."
            },
            {
                question: "Can Pull read my private messages?",
                answer: "Pull can read notification content from apps that send notifications. However, this data stays on your device unless you use AI-powered features (which only sends anonymized metadata)."
            }
        ]
    },
    {
        category: "Privacy Questions",
        items: [
            {
                question: "Does Pull sell my data?",
                answer: "No, we never sell your personal information to third parties."
            },
            {
                question: "Is my notification data encrypted?",
                answer: "Yes, all notification data stored on your device is encrypted. All data transmitted to our servers (when using AI features) uses HTTPS encryption."
            },
            {
                question: "Can I use Pull without the AI features?",
                answer: "Yes, AI features are optional. You can disable them in Settings and still use all manual filtering capabilities."
            },
            {
                question: "What happens to my data if I uninstall Pull?",
                answer: "All locally stored data is deleted when you uninstall the app."
            }
        ]
    },
    {
        category: "Feature Questions",
        items: [
            {
                question: "Can I recover deleted notifications?",
                answer: "No, once a notification is deleted from history, it cannot be recovered."
            },
            {
                question: "Will Pull work after I restart my phone?",
                answer: "Yes, Pull runs as a background service and automatically starts when your device boots."
            },
            {
                question: "Can I export my filtering rules?",
                answer: "This feature is planned for a future update."
            },
            {
                question: "Does Pull support multiple languages?",
                answer: "Currently, Pull supports English. Additional languages may be added in future updates."
            }
        ]
    },
    {
        category: "Technical Questions",
        items: [
            {
                question: "Why does Pull need \"Notification Access\"?",
                answer: "This permission allows Pull to read notifications from other apps. It's essential for the app to function."
            },
            {
                question: "Does Pull drain my battery?",
                answer: "Pull is optimized for minimal battery usage. Background processing is lightweight and efficient."
            },
            {
                question: "Is Pull compatible with my device?",
                answer: "Pull is compatible with Android 8.0 (Oreo) and above."
            }
        ]
    }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            marginBottom: '12px',
            borderRadius: '31px',
            background: '#FCFCFC',
            border: '2px solid #FFFFFF',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.01)',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: 'none',
                    background: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px'
                }}
            >
                <span style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: isOpen ? '#00379D' : 'rgba(0,0,0,0.8)',
                    transition: 'color 0.3s ease',
                    flex: 1
                }}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    style={{ flexShrink: 0 }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke={isOpen ? '#00379D' : 'rgba(0,0,0,0.4)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div style={{
                            padding: '0 24px 20px',
                            fontSize: '15px',
                            lineHeight: '1.6',
                            color: 'rgba(0,0,0,0.6)'
                        }}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = ({ customItems, simple = false }: { customItems?: { question: string; answer: string }[]; simple?: boolean }) => {
    if (simple && customItems) {
        return (
            <div style={{
                margin: '0',
                padding: '80px 20px 0px', // Reduced bottom padding
                background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--color-background) 20%, var(--color-background) 100%)',
                position: 'relative',
                zIndex: 10,
                marginTop: '-40px' // Pull up slightly to blend
            }}>
                <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <h2 style={{
                        fontSize: '28px',
                        fontWeight: '800',
                        marginBottom: '32px',
                        textAlign: 'center', // Center align for simple mode
                        background: 'linear-gradient(135deg, #000 0%, #666 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.02em'
                    }}>
                        Frequently Asked Questions
                    </h2>
                    <div>
                        {customItems.map((item, idx) => (
                            <FAQItem key={idx} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                    <div style={{ textAlign: 'right', marginTop: '24px', marginRight: '8px' }}>
                        <a href="/help" style={{ color: 'rgba(0, 0, 0, 0.4)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                            All
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ margin: '48px 0' }}>
            <h2 style={{
                fontSize: '28px',
                fontWeight: '800',
                marginBottom: '32px',
                textAlign: 'left',
                background: 'linear-gradient(135deg, #000 0%, #666 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
            }}>
                Frequently Asked Questions
            </h2>

            {faqData.map((category, idx) => (
                <div key={idx} style={{ marginBottom: '40px' }}>
                    <h3 style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'rgba(0,0,0,0.4)',
                        marginBottom: '16px',
                        paddingLeft: '4px'
                    }}>
                        {category.category}
                    </h3>
                    <div>
                        {category.items.map((item, itemIdx) => (
                            <FAQItem key={itemIdx} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
