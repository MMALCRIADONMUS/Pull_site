import BackgroundEffect from "@/components/BackgroundEffect";
import Footer from "@/components/Footer";
import FooterScrim from "@/components/FooterScrim";
import MainCard from "@/components/MainCard";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import ScrollToTop from "@/components/ScrollToTop";
import TermsNavbar from "@/components/TermsNavbar";

export default function PrivacyPolicyPage() {
    return (
        <>
            <ScrollToTop />
            <TermsNavbar />
            <BackgroundEffect />
            <MainCard>
                <div className="content-section" style={{ flexDirection: "column", alignItems: "stretch", textAlign: "left", minHeight: "auto", paddingBottom: "60px" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
                        <PrivacyPolicyContent />
                    </div>
                </div>
            </MainCard>
            <Footer />
            <FooterScrim />
        </>
    );
}
