const sectionStyle = { margin: "32px 0 16px", fontWeight: 600, color: "black" };
const subSectionStyle = { margin: "20px 0 12px", fontWeight: 600, color: "rgba(0,0,0,0.8)" };
const listStyle = { paddingLeft: "24px", marginBottom: "16px" };
const paragraphStyle = { marginBottom: "16px" };

export default function PrivacyPolicyContent() {
    return (
        <section id="privacy" style={{ scrollMarginTop: "120px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "24px", fontWeight: 700 }}>Privacy Policy</h2>
            <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)", marginBottom: "24px" }}>
                Last Updated: May 11, 2026 | Effective Date: May 11, 2026
            </p>

            <div style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
                <h3 style={sectionStyle}>Introduction</h3>
                <p style={paragraphStyle}>
                    Welcome to Pull (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how Pull Notifications (&quot;Pull,&quot; &quot;the App&quot;) collects, uses, stores, and protects information when you use our mobile application available on Google Play.
                </p>
                <p style={paragraphStyle}>
                    Pull is designed to give you control over your digital attention by intelligently filtering and organizing notifications from other applications on your device. We are committed to protecting your privacy and being transparent about our data practices.
                </p>

                <h3 style={sectionStyle}>Information We Collect</h3>
                <h4 style={subSectionStyle}>Notification Content</h4>
                <p style={paragraphStyle}>
                    To provide our core service, Pull requires access to your device&apos;s notifications through Android&apos;s Notification Listener Service. This includes notification title, text content, sender information, application name or package name, channel ID, category, timestamp, notification style information, and app icons used for display.
                </p>
                <p style={paragraphStyle}>
                    We access notifications solely to provide filtering, organization, history, and rule-creation features. Complete notification history and user-created rules are stored locally on your device.
                </p>

                <h4 style={subSectionStyle}>Device, Usage, Analytics, and Subscription Data</h4>
                <ul style={listStyle}>
                    <li>Device or installation identifiers used for app functionality, analytics, abuse prevention, AI rate limiting, and service improvement.</li>
                    <li>Android version, app version, operating system information, diagnostics, and similar technical metadata.</li>
                    <li>Package usage statistics, with your permission, to understand app activity during onboarding and filtering setup.</li>
                    <li>App interactions and events, such as app opens, onboarding progress, paywall views, trial starts, purchase or restore outcomes, settings actions, and feature usage.</li>
                    <li>Subscription entitlement status needed to unlock Premium features.</li>
                    <li>Advertising measurement identifiers when enabled by the Meta/Facebook SDK and allowed by your device settings.</li>
                </ul>

                <h3 style={sectionStyle}>How We Use Your Information</h3>
                <ul style={listStyle}>
                    <li>To analyze incoming notifications and apply your filtering rules.</li>
                    <li>To maintain a local notification history for your review.</li>
                    <li>To help create blocking rules based on notification content and patterns.</li>
                    <li>To synchronize dictionaries and filtering strategies from our servers.</li>
                    <li>To measure app usage, onboarding, subscription, paywall performance, and service reliability.</li>
                    <li>To protect AI-backed services from abuse and enforce rate limits.</li>
                </ul>

                <h3 style={sectionStyle}>Optional AI Analysis</h3>
                <p style={paragraphStyle}>
                    When you use the AI-assisted rule creation feature (&quot;Pull on Device&quot;), the App may send limited notification data to our secure cloud-based AI service through Supabase Edge Functions and Google Gemini.
                </p>
                <p style={paragraphStyle}>Data sent to AI services may include:</p>
                <ul style={listStyle}>
                    <li>Device identifier or installation identifier.</li>
                    <li>Application package name.</li>
                    <li>Notification title and text content.</li>
                    <li>Sender information, if available.</li>
                    <li>Channel, category, notification key, template, and other notification metadata.</li>
                    <li>Whether the notification is from a group chat.</li>
                </ul>
                <p style={paragraphStyle}>
                    We do not send your personal identity information, contacts, location data, financial information, or content from applications where you have not granted Pull notification access.
                </p>

                <h3 style={sectionStyle}>Data Storage and Retention</h3>
                <h4 style={subSectionStyle}>Local Storage</h4>
                <p style={paragraphStyle}>
                    Complete notification history, filtering rules, application settings, and preferences are stored locally on your device in an encrypted database and remain there until you uninstall the App or clear its data.
                </p>
                <h4 style={subSectionStyle}>Cloud Storage and Processing</h4>
                <ul style={listStyle}>
                    <li>We use Supabase to store general dictionaries and filtering strategies downloaded to user devices.</li>
                    <li>We store installation tokens and rate-limit counters used to protect AI-backed features from abuse.</li>
                    <li>Optional AI features may process notification title, text, sender, package name, channel, category, notification key, template, and related metadata through Supabase Edge Functions and Google Gemini.</li>
                    <li>We may persist AI-derived records in Supabase for service improvement, quality review, debugging, abuse prevention, and future model or rule improvement.</li>
                    <li>We do not store your complete notification history in cloud storage.</li>
                </ul>

                <h3 style={sectionStyle}>Third-Party Service Providers</h3>
                <ul style={listStyle}>
                    <li>Supabase: cloud infrastructure, data synchronization, AI processing, installation tokens, and rate limits.</li>
                    <li>Google Gemini AI: AI-assisted rule suggestions, accessed through Supabase Edge Functions.</li>
                    <li>Google Play and RevenueCat: purchases, renewals, cancellations, and subscription entitlement status.</li>
                    <li>Meta/Facebook SDK: app events, installation and onboarding measurement, paywall and trial events, and advertising campaign effectiveness.</li>
                    <li>Mixpanel: product analytics for app interactions, onboarding, settings, paywall/subscription flow, feature usage, and service improvement.</li>
                </ul>
                <p style={paragraphStyle}>
                    We do not sell your personal information, share notification title or text with Meta/Facebook or Mixpanel, use notification title or text for targeted advertising, or provide your data to data brokers.
                </p>

                <h3 style={sectionStyle}>Permissions We Request</h3>
                <ul style={listStyle}>
                    <li>Notification Access: read and manage notifications from other apps for core filtering functionality.</li>
                    <li>Internet: sync filtering strategies and process optional AI rule suggestions.</li>
                    <li>Post Notifications: display feedback notifications when rules are created.</li>
                    <li>Vibrate: provide haptic feedback for user interactions.</li>
                    <li>Package Usage Stats: understand which apps send notifications and support onboarding insights.</li>
                </ul>

                <h3 style={sectionStyle}>Your Rights and Choices</h3>
                <ul style={listStyle}>
                    <li>You can view notifications and rules stored in the App.</li>
                    <li>You can delete local app data by clearing app storage or uninstalling Pull.</li>
                    <li>You can disable AI-assisted rule creation to prevent notification content from being sent to our AI service.</li>
                    <li>You can revoke Notification Access and Usage Access through Android Settings.</li>
                </ul>

                <h3 style={sectionStyle}>Subscriptions and Cancellation</h3>
                <p style={paragraphStyle}>
                    Pull Premium subscriptions are purchased, renewed, and cancelled through Google Play. Pull does not receive or store your full payment card details. You can cancel by opening Google Play, tapping your profile icon, selecting Payments &amp; subscriptions, choosing Subscriptions, selecting Pull, and tapping Cancel subscription.
                </p>

                <h3 style={sectionStyle}>Data Security</h3>
                <ul style={listStyle}>
                    <li>Local notification data is stored in an encrypted local database.</li>
                    <li>Data sent to our servers uses HTTPS encryption.</li>
                    <li>We collect only data needed to provide and improve the App.</li>
                    <li>Complete notification history remains local; optional AI features may persist anonymized or AI-derived records as described above.</li>
                </ul>

                <h3 style={sectionStyle}>Children&apos;s Privacy</h3>
                <p style={paragraphStyle}>
                    Pull is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
                </p>

                <h3 style={sectionStyle}>International Data Transfers</h3>
                <p style={paragraphStyle}>
                    If you use the App outside of the country where our servers are located, your information may be transferred to, stored, and processed in countries other than your own.
                </p>

                <h3 style={sectionStyle}>Google Play Data Safety Summary</h3>
                <ul style={listStyle}>
                    <li>Device or other IDs: collected for app functionality, analytics, AI rate limiting, abuse prevention, and advertising measurement.</li>
                    <li>App activity and app interactions: collected for app functionality, analytics, onboarding, subscription flow measurement, and service improvement.</li>
                    <li>App usage statistics: collected with permission for filtering suggestions, onboarding insights, and AI-assisted setup if used.</li>
                    <li>Notification content and metadata: used for core local functionality and optional AI suggestions.</li>
                    <li>Purchase history or subscription status: used for Premium entitlement management through Google Play and RevenueCat.</li>
                    <li>Diagnostics and performance metadata: used for reliability, debugging, and service improvement.</li>
                </ul>
                <p style={paragraphStyle}>
                    Data is encrypted in transit. Data can be deleted by clearing app data or uninstalling Pull. Pull has not completed an independent security review.
                </p>

                <h3 style={sectionStyle}>Changes to This Privacy Policy</h3>
                <p style={paragraphStyle}>
                    We may update this Privacy Policy from time to time by posting the new Privacy Policy within the App or on our website and updating the Last Updated date.
                </p>

                <h3 style={sectionStyle}>Contact Us</h3>
                <p style={paragraphStyle}>
                    Email: support.pull@gmail.com<br />
                    Developer: Pull Notifications<br />
                    Contact method: Please contact us by email for privacy, data, and support inquiries.
                </p>
            </div>
        </section>
    );
}
