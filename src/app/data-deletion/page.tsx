import Link from "next/link";
import MainCard from "@/components/MainCard";
import Footer from "@/components/Footer";
import FooterScrim from "@/components/FooterScrim";
import BackgroundEffect from "@/components/BackgroundEffect";
import TermsNavbar from "@/components/TermsNavbar";
import ScrollToTop from "@/components/ScrollToTop";

const sectionStyle = { margin: "32px 0 16px", fontWeight: 600, color: "black" };
const paragraphStyle = { marginBottom: "16px" };
const listStyle = { paddingLeft: "24px", marginBottom: "16px" };
const legalLinkStyle = { color: "#0066cc", textDecoration: "underline" };

export default function DataDeletionPage() {
    return (
        <>
            <ScrollToTop />
            <TermsNavbar />
            <BackgroundEffect />
            <MainCard>
                <div className="content-section" style={{ flexDirection: "column", alignItems: "stretch", textAlign: "left", minHeight: "auto", paddingBottom: "60px" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
                        <section id="data-deletion" style={{ scrollMarginTop: "120px" }}>
                            <h2 style={{ fontSize: "32px", marginBottom: "24px", fontWeight: 700 }}>Data Deletion Request</h2>
                            <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)", marginBottom: "24px" }}>
                                Pull Notifications | Last Updated: May 11, 2026
                            </p>

                            <div style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
                                <h3 style={sectionStyle}>How to Request Data Deletion</h3>
                                <p style={paragraphStyle}>
                                    Pull Notifications users can request deletion of data associated with the Pull app by emailing us at{" "}
                                    <a href="mailto:support.pull@gmail.com" style={legalLinkStyle}>support.pull@gmail.com</a>.
                                </p>
                                <p style={paragraphStyle}>Please include:</p>
                                <ul style={listStyle}>
                                    <li>The subject line: Pull Data Deletion Request.</li>
                                    <li>The email address you want us to use for follow-up.</li>
                                    <li>A short statement that you want data associated with Pull Notifications deleted.</li>
                                    <li>If available, your device or installation identifier from the app settings or support screen.</li>
                                </ul>

                                <h3 style={sectionStyle}>Data Deleted From Your Device</h3>
                                <p style={paragraphStyle}>
                                    Most Pull data is stored locally on your device. You can delete local data immediately by uninstalling Pull or by opening Android Settings, selecting Apps, selecting Pull, opening Storage, and tapping Clear Data.
                                </p>
                                <p style={paragraphStyle}>This deletes local app data such as:</p>
                                <ul style={listStyle}>
                                    <li>Notification history stored by Pull on your device.</li>
                                    <li>Filtering rules and app preferences stored locally.</li>
                                    <li>Local onboarding, settings, and app state.</li>
                                </ul>

                                <h3 style={sectionStyle}>Data We Delete After a Request</h3>
                                <p style={paragraphStyle}>
                                    After receiving a valid deletion request, we will delete or de-identify data that can reasonably be associated with your Pull installation, including installation tokens, AI rate-limit records, support request context, and optional AI-derived records stored for service improvement, debugging, abuse prevention, or model and rule quality review.
                                </p>

                                <h3 style={sectionStyle}>Data That May Be Retained</h3>
                                <p style={paragraphStyle}>
                                    Some records may be retained when required for legal, security, fraud prevention, accounting, dispute resolution, or compliance purposes. Subscription purchases, renewals, cancellations, refunds, and payment records are handled by Google Play and RevenueCat under their own policies. We do not receive or store your full payment card details.
                                </p>
                                <p style={paragraphStyle}>
                                    Aggregated, anonymized, or de-identified analytics may be retained when it can no longer reasonably identify a user or device.
                                </p>

                                <h3 style={sectionStyle}>Processing Time</h3>
                                <p style={paragraphStyle}>
                                    We aim to respond to deletion requests within 30 days. If we need more information to locate the relevant records, we will contact you using the email address provided in your request.
                                </p>

                                <h3 style={sectionStyle}>Privacy Policy</h3>
                                <p style={paragraphStyle}>
                                    For more information about Pull Notifications data practices, please read our{" "}
                                    <Link href="/privacy-policy" style={legalLinkStyle}>Privacy Policy</Link>.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </MainCard>
            <Footer />
            <FooterScrim />
        </>
    );
}
