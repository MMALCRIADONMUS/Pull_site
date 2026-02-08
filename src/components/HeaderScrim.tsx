"use client";

import React from "react";

export default function HeaderScrim() {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100px", // Reduced again
                background: "linear-gradient(to bottom, #00379D 0%, rgba(0, 55, 157, 0) 100%)",
                zIndex: 90, // Above MainCard (10), below Navbar links (1002)
                pointerEvents: "none",
                opacity: 0.9,
            }}
        />
    );
}
