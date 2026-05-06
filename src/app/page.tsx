import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import MainCard from "@/components/MainCard";
import Hero from "@/components/Hero";
import HeaderScrim from "@/components/HeaderScrim";
import FooterScrim from "@/components/FooterScrim";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";
import FAQ from "@/components/FAQ";



// Lazy load below-the-fold components
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => null,
});
const Manifesto = dynamic(() => import("@/components/Manifesto"), {
  loading: () => null,
});
const DownloadSection = dynamic(() => import("@/components/DownloadSection"), {
  loading: () => null,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderScrim />
      <BackgroundEffect />
      <MainCard>
        <Hero />
        <div className="ellipse-spacer" />
        <Manifesto />
        <HowItWorks />
        <DownloadSection />
      </MainCard>
      <FAQ
        simple
        customItems={[
          {
            question: "Can Pull read my private messages?",
            answer: "Pull can read notification content from apps that send notifications. However, this data stays on your device unless you use AI-powered features (which only sends anonymized metadata)."
          },
          {
            question: "Does Pull work with all apps?",
            answer: "Pull works with any app that sends notifications through Android's notification system."
          },
          {
            question: "Does Pull drain my battery?",
            answer: "Pull is optimized for minimal battery usage. Background processing is lightweight and efficient."
          }
        ]}
      />
      <Footer />
      <FooterScrim />
    </>
  );
}
