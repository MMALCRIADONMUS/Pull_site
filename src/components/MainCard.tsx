"use client";

import { ReactNode, useEffect, useState } from "react";

interface MainCardProps {
    children: ReactNode;
}

export default function MainCard({ children }: MainCardProps) {
    const [isDownloadVisible, setIsDownloadVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsDownloadVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Trigger when 10% of the download section is visible
                rootMargin: "0px 0px -100px 0px" // Offset to trigger slightly before/after
            }
        );

        const downloadSection = document.getElementById("download");
        if (downloadSection) {
            observer.observe(downloadSection);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="main-card">
            <div className={`main-card-gradient ${isDownloadVisible ? 'active' : ''}`} />
            {children}
        </div>
    );
}
