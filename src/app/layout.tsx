import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Pull: AI Notification Blocker for Android | Reclaim Your Focus",
  description: "Stop drowning in notifications. Pull uses on-device AI to filter spam and low-priority alerts, letting you focus on what matters. Your data stays private.",
  keywords: [
    "notification blocker",
    "focus app",
    "attention",
    "productivity",
    "Android",
    "AI notification blocker",
    "notification manager",
    "reduce screen time",
    "digital well-being",
    "distraction blocker",
    "smart notification management",
    "Pull app",
    "notification cleaner",
    "quiet mode",
    "manage notifications",
    "filter notifications",
  ],
  openGraph: {
    title: "Pull: AI Notification Blocker for Android | Reclaim Your Focus",
    description: "Stop drowning in notifications. Pull uses on-device AI to filter spam and low-priority alerts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.className} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
