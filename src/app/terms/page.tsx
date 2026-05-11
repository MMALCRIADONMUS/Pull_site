import Link from "next/link";
import MainCard from "@/components/MainCard";
import Footer from "@/components/Footer";
import FooterScrim from "@/components/FooterScrim";
import BackgroundEffect from "@/components/BackgroundEffect";
import TermsNavbar from "@/components/TermsNavbar";
import ScrollToTop from "@/components/ScrollToTop";

const sectionStyle = { fontSize: "20px", margin: "32px 0 16px", fontWeight: 600, color: "black" };
const subSectionStyle = { fontSize: "17px", margin: "20px 0 12px", fontWeight: 600, color: "rgba(0,0,0,0.8)" };
const paragraphStyle = { marginBottom: "16px" };
const listStyle = { paddingLeft: "24px", marginBottom: "16px" };
const legalLinkStyle = { color: "#0066cc", textDecoration: "underline" };

export default function LegalPage() {
    return (
        <>
            <ScrollToTop />
            <TermsNavbar />
            <BackgroundEffect />
            <MainCard>
                <div className="content-section" style={{ flexDirection: "column", alignItems: "stretch", textAlign: "left", minHeight: "auto", paddingBottom: "60px" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
                        <section id="terms" style={{ scrollMarginTop: "120px" }}>
                            <h2 style={{ fontSize: "32px", marginBottom: "24px", fontWeight: 700 }}>Terms of Service</h2>
                            <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)", marginBottom: "24px" }}>
                                Last Updated: May 11, 2026
                            </p>

                            <div style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
                                <h3 style={sectionStyle}>1. Introduction and Acceptance</h3>
                                <p style={paragraphStyle}>
                                    Welcome to Pull Notifications (&quot;Pull,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Pull Notifications Android application (&quot;App&quot; or &quot;Service&quot;).
                                </p>
                                <p style={paragraphStyle}>
                                    By downloading, installing, accessing, or using the App, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, you must stop using the App and uninstall it from your device.
                                </p>

                                <h3 style={sectionStyle}>2. Description of Service</h3>
                                <p style={paragraphStyle}>
                                    Pull is an Android notification management app that helps you filter, organize, review, and control notifications from other apps on your device.
                                </p>
                                <ul style={listStyle}>
                                    <li>Notification access and organization in a unified interface.</li>
                                    <li>Filtering rules for blocking or managing future notifications.</li>
                                    <li>Local notification history and rule management.</li>
                                    <li>Optional AI-assisted rule suggestions through the Pull on Device feature.</li>
                                    <li>Premium access and subscription-gated features where offered.</li>
                                </ul>

                                <h3 style={sectionStyle}>3. Eligibility</h3>
                                <p style={paragraphStyle}>
                                    You must be at least thirteen (13) years old to use Pull. If you are under the age of majority in your jurisdiction, you may use Pull only with consent and supervision from a parent or legal guardian.
                                </p>

                                <h3 style={sectionStyle}>4. Permissions and Device Access</h3>
                                <p style={paragraphStyle}>
                                    Pull depends on permissions that you grant through Android system settings. You can revoke permissions at any time, but revoking them may limit or disable app functionality.
                                </p>
                                <h4 style={subSectionStyle}>Notification Listener Service</h4>
                                <p style={paragraphStyle}>
                                    Pull uses Android Notification Access to read notification title, text, sender information, app metadata, channel, category, timestamp, and related notification metadata so it can filter, organize, display, and manage notifications.
                                </p>
                                <h4 style={subSectionStyle}>Package Usage Stats</h4>
                                <p style={paragraphStyle}>
                                    With your permission, Pull may access app usage statistics to understand app activity during onboarding and filtering setup.
                                </p>
                                <h4 style={subSectionStyle}>Internet, Post Notifications, and Vibration</h4>
                                <p style={paragraphStyle}>
                                    Pull uses internet access for service features such as syncing filtering strategies, analytics, subscriptions, and optional AI rule suggestions. Post Notifications may be used for app feedback and trial reminders. Vibration is used for haptic feedback.
                                </p>

                                <h3 style={sectionStyle}>5. User Responsibilities</h3>
                                <p style={paragraphStyle}>You agree that you will:</p>
                                <ul style={listStyle}>
                                    <li>Use Pull only for lawful purposes and in accordance with these Terms.</li>
                                    <li>Not attempt to bypass, disable, or interfere with security or subscription features.</li>
                                    <li>Not use Pull to violate another person&apos;s privacy, rights, or applicable law.</li>
                                    <li>Not reverse engineer, decompile, disassemble, or attempt to derive the source code of the App.</li>
                                    <li>Not reproduce, distribute, resell, lease, sublicense, or create derivative works from the App except as permitted by law.</li>
                                    <li>Maintain the security of your device and Google Play account.</li>
                                </ul>

                                <h3 style={sectionStyle}>6. Data Handling and Privacy</h3>
                                <p style={paragraphStyle}>
                                    Pull processes notification data, usage data, analytics events, device identifiers, diagnostics, subscription entitlement status, and optional AI-related data as described in our Privacy Policy.
                                </p>
                                <p style={paragraphStyle}>
                                    Your use of Pull is also governed by our <Link href="/privacy-policy" style={legalLinkStyle}>Privacy Policy</Link>, which is incorporated into these Terms by reference.
                                </p>

                                <h3 style={sectionStyle}>7. Optional AI Features</h3>
                                <p style={paragraphStyle}>
                                    If you use AI-assisted rule creation, Pull may send limited notification data and metadata to cloud services through Supabase Edge Functions and Google Gemini to suggest rules, categorize notifications, prevent abuse, and improve reliability. These features are described in more detail in the Privacy Policy.
                                </p>

                                <h3 style={sectionStyle}>8. Subscriptions, Trials, Renewal, and Cancellation</h3>
                                <p style={paragraphStyle}>
                                    Pull Premium is offered as an auto-renewing subscription through Google Play. Available plans, prices, billing periods, free trial availability, and introductory offers are shown before purchase and confirmed by Google Play during checkout.
                                </p>
                                <p style={paragraphStyle}>
                                    If you start a free trial, Google Play may verify your payment method before the trial starts. After the trial period ends, your subscription automatically renews and Google Play charges the selected plan price unless you cancel before the end of the trial.
                                </p>
                                <p style={paragraphStyle}>
                                    You can cancel anytime through Google Play: open Google Play, tap your profile icon, tap Payments &amp; subscriptions, tap Subscriptions, select Pull, and tap Cancel subscription. Cancellation stops future renewal; access normally continues until the end of the current paid period or trial.
                                </p>
                                <p style={paragraphStyle}>
                                    Purchases, renewals, cancellations, payment handling, and refund requests are handled by Google Play under Google Play policies. Pull uses RevenueCat and Google Play entitlement status to unlock Premium features and does not receive or store your full payment card details.
                                </p>

                                <h3 style={sectionStyle}>9. Third-Party Services</h3>
                                <p style={paragraphStyle}>
                                    Pull may rely on third-party providers for app infrastructure, analytics, subscriptions, advertising measurement, and optional AI functionality, including Supabase, Google Gemini, Google Play, RevenueCat, Meta/Facebook SDK, and Mixpanel. Your use of these features may also be subject to the providers&apos; applicable terms and policies.
                                </p>

                                <h3 style={sectionStyle}>10. Intellectual Property</h3>
                                <p style={paragraphStyle}>
                                    Pull, including its software, design, features, names, logos, and related materials, is owned by Pull Notifications or its licensors and is protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes in accordance with these Terms.
                                </p>

                                <h3 style={sectionStyle}>11. Updates and Service Changes</h3>
                                <p style={paragraphStyle}>
                                    We may update, modify, suspend, or discontinue features of the App at any time. Updates may add, modify, or remove features; address bugs or security issues; or require additional permissions.
                                </p>

                                <h3 style={sectionStyle}>12. Disclaimers</h3>
                                <p style={{ ...paragraphStyle, fontWeight: 500 }}>
                                    THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY.
                                </p>
                                <p style={paragraphStyle}>
                                    Pull may not capture, display, filter, summarize, or process every notification correctly in every circumstance. Third-party notifications may contain errors, sensitive information, or content controlled by those third-party apps, and Pull is not responsible for that third-party content.
                                </p>

                                <h3 style={sectionStyle}>13. Limitation of Liability</h3>
                                <p style={paragraphStyle}>
                                    To the maximum extent permitted by applicable law, Pull Notifications and its affiliates, service providers, and personnel will not be liable for indirect, incidental, special, consequential, punitive, or similar damages, including lost profits, lost data, missed notifications, delayed notifications, or interruption of service.
                                </p>

                                <h3 style={sectionStyle}>14. Termination</h3>
                                <p style={paragraphStyle}>
                                    You may terminate these Terms at any time by uninstalling Pull and discontinuing use. We may suspend or terminate access to the App or features if we believe you violated these Terms, used the App fraudulently or unlawfully, created security risk, or if required by law.
                                </p>

                                <h3 style={sectionStyle}>15. Governing Law and Dispute Resolution</h3>
                                <p style={paragraphStyle}>
                                    These Terms are governed by applicable law in the jurisdiction where Pull Notifications is registered, without regard to conflict-of-law principles. Disputes should first be attempted through informal negotiation. If informal resolution is not possible, either party may pursue remedies available under applicable law.
                                </p>

                                <h3 style={sectionStyle}>16. Changes to These Terms</h3>
                                <p style={paragraphStyle}>
                                    We may update these Terms from time to time by posting the updated Terms in the App or on our website and updating the Last Updated date. Your continued use of Pull after the updated Terms are posted means you accept the changes.
                                </p>

                                <h3 style={sectionStyle}>17. Contact Information</h3>
                                <p style={paragraphStyle}>
                                    Pull Notifications<br />
                                    Email: support.pull@gmail.com<br />
                                    Website: pullnotifications.app
                                </p>

                                <h3 style={sectionStyle}>18. Acknowledgment</h3>
                                <p style={{ ...paragraphStyle, fontWeight: 500 }}>
                                    BY USING THE PULL NOTIFICATIONS APP, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
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
