"use client";

import { useState } from "react";
import BlurText from "./BlurText";
import { supabase } from "@/lib/supabase";

export default function WaitlistSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [email, setEmail] = useState("");
    const [device, setDevice] = useState<"ios" | "android" | "">("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !device) return;
        
        setStatus("submitting");

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email, device, phone: phone || null }]);

            if (error) {
                console.error("Supabase Error:", error);
                alert("Oops! Something went wrong. Please try again.");
                setStatus("idle");
                return;
            }

            setStatus("success");
            setEmail("");
            setDevice("");
            setPhone("");
        } catch (err) {
            console.error("Unknown Error:", err);
            alert("Oops! Something went wrong. Please try again.");
            setStatus("idle");
        }
    };

    return (
        <section id="waitlist" className="content-section download-section-bottom" style={{ paddingBottom: '200px' }}>
            <div className="section-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', width: '100%', maxWidth: '640px' }}>
                <BlurText
                    text="The app is coming."
                    className="section-title download-section-title"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />
                
                <p style={{ fontSize: '1.25rem', color: 'rgba(0,0,0,0.7)', textAlign: 'center', marginTop: '-20px', lineHeight: '1.5' }}>
                    Drop your contact and we'll let you know the moment it launches — with a special deal for early members.
                </p>

                {status === "success" ? (
                    <div style={{ padding: '40px', background: '#f5fff7', borderRadius: '31px', width: '100%', textAlign: 'center', border: '1px solid #ccf0d4', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                        <h3 style={{ color: '#10b981', fontSize: '1.8rem', marginBottom: '16px', fontWeight: 700 }}>You're in!</h3>
                        <p style={{ color: '#065f46', fontSize: '1.1rem' }}>We'll reach out as soon as the app is live.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px', background: '#FCFCFC', padding: '40px', borderRadius: '31px', border: '1px solid #E5E5E5', boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                            <label htmlFor="email" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Email *</label>
                            <input 
                                type="email" 
                                id="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                style={{ padding: '16px 20px', borderRadius: '16px', border: '1px solid #DDD', fontSize: '1.05rem', width: '100%', outline: 'none', background: '#FFFFFF' }}
                            />
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
                            <label style={{ fontWeight: 600, fontSize: '0.95rem' }}>What's your device? *</label>
                            <div style={{ display: 'flex', gap: '24px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '1.05rem' }}>
                                    <input type="radio" value="ios" checked={device === "ios"} onChange={() => setDevice("ios")} required style={{ width: '18px', height: '18px', cursor: 'pointer' }}/> iOS
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '1.05rem' }}>
                                    <input type="radio" value="android" checked={device === "android"} onChange={() => setDevice("android")} required style={{ width: '18px', height: '18px', cursor: 'pointer' }}/> Android
                                </label>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                            <label htmlFor="phone" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Phone number</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+1 (555) 000-0000"
                                style={{ padding: '16px 20px', borderRadius: '16px', border: '1px solid #DDD', fontSize: '1.05rem', width: '100%', outline: 'none', background: '#FFFFFF' }}
                            />
                            <span style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.5)', marginTop: '4px' }}>Optional — only if you'd like a text when we launch.</span>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === "submitting"}
                            style={{ 
                                marginTop: '16px', 
                                padding: '18px', 
                                background: 'var(--color-download, #00379D)', 
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '40px', 
                                fontSize: '1.15rem', 
                                fontWeight: 600, 
                                cursor: 'pointer',
                                opacity: status === "submitting" ? 0.7 : 1,
                                transition: 'opacity 0.2s, transform 0.2s',
                                boxShadow: '0 4px 15px rgba(0, 55, 157, 0.3)'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
                            onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        >
                            {status === "submitting" ? "Please wait..." : "Notify Me at Launch"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
