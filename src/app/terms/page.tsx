import MainCard from "@/components/MainCard";
import Footer from "@/components/Footer";
import FooterScrim from "@/components/FooterScrim";
import BackgroundEffect from "@/components/BackgroundEffect";
import TermsNavbar from "@/components/TermsNavbar";
import ScrollToTop from "@/components/ScrollToTop";


export default function LegalPage() {
    return (
        <>
            <ScrollToTop />
            <TermsNavbar />
            <BackgroundEffect />
            <MainCard>
                <div className="content-section" style={{ flexDirection: 'column', alignItems: 'stretch', textAlign: 'left', minHeight: 'auto', paddingBottom: '60px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>

                        <section id="terms" style={{ marginBottom: '80px', scrollMarginTop: '120px' }}>
                            <h2 style={{ fontSize: '32px', marginBottom: '24px', fontWeight: '700' }}>Terms of Service</h2>
                            <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.5)', marginBottom: '24px' }}>Last Updated: February 7, 2026</p>
                            <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>1. Introduction and Acceptance of Terms</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    Welcome to Pull Notifications (&quot;Pull,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Pull Notifications governing your access to and use of the Pull Notifications mobile application (&quot;App&quot; or &quot;Service&quot;).
                                </p>
                                <p style={{ marginBottom: '16px' }}>
                                    By downloading, installing, accessing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must immediately discontinue use of the App and uninstall it from your device.
                                </p>
                                <p style={{ marginBottom: '16px' }}>
                                    We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting the updated Terms within the App or on our website. Your continued use of the App following any modifications constitutes your acceptance of the revised Terms.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>2. Description of Service</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    Pull Notifications is a mobile application designed for Android devices that provides notification management services. The App functions as an intermediary layer between your device&apos;s notification system and you, offering the following core functionalities:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Notification Centralization:</strong> Aggregation of all notifications from installed applications into a unified interface.</li>
                                    <li><strong>Intelligent Filtering:</strong> Automated categorization and prioritization of notifications based on relevance.</li>
                                    <li><strong>Summarization:</strong> Condensation of lengthy or repetitive notifications into concise summaries.</li>
                                    <li><strong>Notification History:</strong> Persistent access to previously received notifications.</li>
                                    <li><strong>Direct Actions:</strong> Ability to interact with notifications (archive, mark as important, quick replies) directly within the App.</li>
                                    <li><strong>User Control:</strong> Customizable settings for notification preferences, priorities, and display options.</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>3. Eligibility</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    To use the App, you must be at least thirteen (13) years of age. If you are under the age of majority in your jurisdiction, you may only use the App with the consent and supervision of a parent or legal guardian who agrees to be bound by these Terms.
                                </p>
                                <p style={{ marginBottom: '16px' }}>By using the App, you represent and warrant that:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>You have the legal capacity to enter into these Terms.</li>
                                    <li>Your use of the App will not violate any applicable law or regulation.</li>
                                    <li>You have not been previously suspended or removed from the Service.</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>4. Required Permissions</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    To provide its core functionality, Pull Notifications requires the following system permissions:
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>4.1 Notification Listener Service Permission</h4>
                                <p style={{ marginBottom: '16px' }}>The App requires access to the Android Notification Listener Service to:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Read notifications from other applications on your device.</li>
                                    <li>Process and organize notification content.</li>
                                    <li>Display notifications within the App interface.</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}>
                                    This permission is essential for the App to function. You must explicitly grant this permission through your device&apos;s Settings &gt; Apps &gt; Special Access &gt; Notification Access menu.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>4.2 Vibration Permission</h4>
                                <p style={{ marginBottom: '16px' }}>Used to provide haptic feedback for user interactions and alerts within the App.</p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>4.3 Internet Permission</h4>
                                <p style={{ marginBottom: '16px' }}>Used for:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Downloading updates and improvements to the App.</li>
                                    <li>Accessing optional cloud synchronization features (if enabled).</li>
                                    <li>Diagnostic and crash reporting to improve App stability.</li>
                                </ul>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>4.4 Package Usage Stats Permission</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    Used to access application usage statistics for intelligent notification prioritization and filtering.
                                </p>
                                <p style={{ marginBottom: '16px' }}>
                                    You may revoke any of these permissions at any time through your device&apos;s settings; however, doing so may limit or entirely disable the App&apos;s functionality.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>5. User Conduct and Responsibilities</h3>
                                <p style={{ marginBottom: '16px' }}>You agree that you will:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Use the App only for lawful purposes and in accordance with these Terms.</li>
                                    <li>Not attempt to circumvent, disable, or interfere with security features of the App.</li>
                                    <li>Not use the App to violate the privacy or rights of third parties.</li>
                                    <li>Not reverse engineer, decompile, disassemble, or attempt to derive the source code of the App.</li>
                                    <li>Not use automated systems, bots, or scripts to access or interact with the App.</li>
                                    <li>Not reproduce, distribute, modify, or create derivative works of the App.</li>
                                    <li>Not use the App for any commercial purpose without our prior written consent.</li>
                                    <li>Maintain the security and confidentiality of your device.</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>6. Intellectual Property Rights</h3>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>6.1 Ownership</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    Pull Notifications, including but not limited to its design, code, graphics, logos, user interface, features, and content, is owned by Pull Notifications and is protected by copyright, trademark, and other intellectual property laws.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>6.2 Limited License</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on a compatible device that you own or control, solely for your personal, non-commercial use.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>6.3 Restrictions</h4>
                                <p style={{ marginBottom: '16px' }}>You may not:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Copy, modify, or distribute the App or any part thereof.</li>
                                    <li>Sell, resell, rent, lease, or sublicense the App.</li>
                                    <li>Use Pull Notifications&apos; name, logo, or trademarks without prior written authorization.</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>7. Data Handling and Privacy</h3>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>7.1 Data Processing</h4>
                                <p style={{ marginBottom: '16px' }}>Pull Notifications processes notification data locally on your device. The App:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Stores notification data in local databases on your device.</li>
                                    <li>Does not transmit your notification content to external servers without your explicit consent.</li>
                                    <li>Does not share your personal notification data with third parties.</li>
                                </ul>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>7.2 Local Storage</h4>
                                <p style={{ marginBottom: '16px' }}>Notification data is stored locally on your device and is treated as temporary data. This data:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Is excluded from Android&apos;s automatic cloud backup system.</li>
                                    <li>Is not transferred during device-to-device migration.</li>
                                    <li>May be cleared when you uninstall the App or clear App data.</li>
                                </ul>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>7.3 Privacy Policy</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the App, you consent to the collection, use, and disclosure of information as described in our Privacy Policy.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>7.4 Third-Party Content</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    The App displays notification content from third-party applications. We are not responsible for the content, accuracy, or practices of these third-party applications. Your interaction with third-party content is subject to the terms and privacy policies of those third parties.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>8. Updates and Modifications</h3>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>8.1 App Updates</h4>
                                <p style={{ marginBottom: '16px' }}>We may release updates to the App from time to time. These updates may:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Add, modify, or remove features.</li>
                                    <li>Address bugs, security vulnerabilities, or performance issues.</li>
                                    <li>Require additional permissions.</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}>
                                    Your continued use of the App following any updates constitutes acceptance of the updated version.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>8.2 Service Modifications</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    We reserve the right to modify, suspend, or discontinue the App or any part thereof at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the App.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>9. Disclaimer of Warranties</h3>
                                <p style={{ marginBottom: '16px', fontWeight: '500' }}>
                                    THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY.
                                </p>
                                <p style={{ marginBottom: '16px' }}>
                                    To the fullest extent permitted by applicable law, we disclaim all warranties, including but not limited to:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Merchantability:</strong> We do not warrant that the App will meet your requirements or expectations.</li>
                                    <li><strong>Fitness for a Particular Purpose:</strong> We do not warrant that the App is suitable for any specific purpose.</li>
                                    <li><strong>Non-Infringement:</strong> We do not warrant that the App does not infringe the intellectual property rights of third parties.</li>
                                    <li><strong>Accuracy:</strong> We do not warrant the accuracy, completeness, or reliability of notification content displayed by the App.</li>
                                    <li><strong>Availability:</strong> We do not warrant uninterrupted, timely, secure, or error-free operation of the App.</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}>You acknowledge that:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>No system is perfectly secure, and we cannot guarantee the security of your data.</li>
                                    <li>Third-party notifications may contain errors, inaccuracies, or harmful content.</li>
                                    <li>The App may not capture, display, or process all notifications correctly in all circumstances.</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>10. Limitation of Liability</h3>
                                <p style={{ marginBottom: '16px', fontWeight: '500' }}>
                                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PULL NOTIFICATIONS, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Indirect, Incidental, Special, Consequential, or Punitive Damages:</strong> Including but not limited to loss of profits, data, use, goodwill, or other intangible losses.</li>
                                    <li><strong>Direct Damages Exceeding:</strong> The amount you have paid, if any, to use the App in the twelve (12) months preceding the claim, or one hundred US dollars ($100), whichever is greater.</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}><strong>Damages Arising From:</strong></p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Your use of or inability to use the App.</li>
                                    <li>Any errors, omissions, or inaccuracies in notification content.</li>
                                    <li>Unauthorized access to or alteration of your transmissions or data.</li>
                                    <li>Statements or conduct of any third party related to the App.</li>
                                    <li>Any interruption, suspension, or termination of the App.</li>
                                    <li>Any bugs, viruses, or malicious code that may be transmitted through the App.</li>
                                    <li>Missed, delayed, or incorrectly displayed notifications.</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}>
                                    This limitation applies regardless of the legal theory (contract, tort, strict liability, or otherwise) and even if we have been advised of the possibility of such damages.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>11. Indemnification</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    You agree to defend, indemnify, and hold harmless Pull Notifications, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Your violation of these Terms.</li>
                                    <li>Your use or misuse of the App.</li>
                                    <li>Your violation of any third-party rights, including intellectual property, privacy, or publicity rights.</li>
                                    <li>Your violation of any applicable laws, rules, or regulations.</li>
                                    <li>Any content you submit or transmit through the App.</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>12. Termination</h3>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>12.1 Your Right to Terminate</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    You may terminate this agreement at any time by uninstalling the App and discontinuing its use.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>12.2 Our Right to Terminate</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including but not limited to:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Breach of these Terms.</li>
                                    <li>Fraudulent, abusive, or illegal activity.</li>
                                    <li>Upon request by law enforcement or other government agencies.</li>
                                    <li>Extended periods of inactivity.</li>
                                    <li>Technical or security issues.</li>
                                </ul>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>12.3 Effect of Termination</h4>
                                <p style={{ marginBottom: '16px' }}>Upon termination:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>All rights and licenses granted to you will immediately cease.</li>
                                    <li>You must uninstall and cease all use of the App.</li>
                                    <li>Provisions that by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>13. Governing Law and Dispute Resolution</h3>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>13.1 Governing Law</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Pull Notifications is registered, without regard to its conflict of law principles.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>13.2 Dispute Resolution</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    Any dispute, controversy, or claim arising out of or relating to these Terms or the App shall first be attempted to be resolved through informal negotiation. If the dispute cannot be resolved informally within thirty (30) days, either party may pursue formal legal remedies as provided by applicable law.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>13.3 Waiver of Class Actions</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    To the fullest extent permitted by law, you agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>14. General Provisions</h3>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>14.1 Entire Agreement</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Pull Notifications regarding your use of the App.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>14.2 Severability</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>14.3 Waiver</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>14.4 Assignment</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may freely assign these Terms without restriction.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>14.5 Notices</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    Any notices or communications regarding these Terms may be provided within the App or through the email address associated with your account, if applicable.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>14.6 No Agency</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    No agency, partnership, joint venture, or employment relationship is created as a result of these Terms.
                                </p>
                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>14.7 Force Majeure</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    We shall not be liable for any failure to perform due to causes beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, natural disasters, government actions, or network failures.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>15. Contact Information</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    If you have any questions, concerns, or feedback regarding these Terms or the App, please contact us at:
                                </p>
                                <p style={{ marginBottom: '16px' }}>
                                    <strong>Pull Notifications</strong><br />
                                    Email: support@pullnotifications.com<br />
                                    Website: www.pullnotifications.com
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>16. Acknowledgment</h3>
                                <p style={{ marginBottom: '16px', fontWeight: '500' }}>
                                    BY USING THE PULL NOTIFICATIONS APP, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
                                </p>
                                <p style={{ marginBottom: '16px' }}>
                                    Pull Notifications reserves all rights not expressly granted in these Terms.
                                </p>
                            </div>
                        </section>

                        <div style={{ height: '1px', background: 'rgba(0,0,0,0.1)', marginBottom: '80px' }} />

                        <section id="privacy" style={{ scrollMarginTop: '120px' }}>
                            <h2 style={{ fontSize: '32px', marginBottom: '24px', fontWeight: '700' }}>Privacy Policy</h2>
                            <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.5)', marginBottom: '24px' }}>Last Updated: February 7, 2026 | Effective Date: February 7, 2026</p>
                            <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>1. Introduction</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    Welcome to Pull (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how Pull Notifications (&quot;Pull,&quot; &quot;the App&quot;) collects, uses, stores, and protects information when you use our mobile application available on Google Play.
                                </p>
                                <p style={{ marginBottom: '16px' }}>
                                    Pull is designed to give you control over your digital attention by intelligently filtering and organizing notifications from other applications on your device. We are committed to protecting your privacy and being transparent about our data practices.
                                </p>
                                <p style={{ marginBottom: '16px' }}>
                                    By downloading, installing, or using the App, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use the App.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>2. Information We Collect</h3>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>2.1 Notification Content</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    To provide our core service, Pull requires access to your device&apos;s notifications through Android&apos;s Notification Listener Service. This includes:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Notification metadata:</strong> Application name (package name), notification title, text content, sender information, channel ID, category, and timestamp</li>
                                    <li><strong>Notification style information:</strong> Whether the notification is from a group conversation, messaging style, or contains media attachments</li>
                                    <li><strong>Application icons:</strong> We extract and store app icons locally for display purposes</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}>
                                    <strong>Important:</strong> We access notifications solely to provide you with the ability to filter, organize, and manage them. We do not access the content of notifications from applications where you have not granted Pull access.
                                </p>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>2.2 Device Information</h4>
                                <p style={{ marginBottom: '16px' }}>We collect limited device information including:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Device Identifier:</strong> A randomly generated unique identifier used to distinguish your device for analytics and service improvement purposes</li>
                                    <li><strong>Android Version:</strong> The version of Android your device is running</li>
                                    <li><strong>App Usage Statistics:</strong> With your permission, we may access package usage statistics to understand which applications send you notifications (requires PACKAGE_USAGE_STATS permission)</li>
                                </ul>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>2.3 User Preferences and Rules</h4>
                                <p style={{ marginBottom: '16px' }}>We store locally on your device:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Notification filtering rules you create</li>
                                    <li>Your preferences and settings</li>
                                    <li>Historical record of notifications for your review</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>3. How We Use Your Information</h3>
                                <p style={{ marginBottom: '16px' }}>We use the information we collect for the following purposes:</p>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>3.1 Core Service Functionality</h4>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Notification Filtering:</strong> To analyze incoming notifications and apply your filtering rules to block unwanted notifications</li>
                                    <li><strong>Notification History:</strong> To maintain a local history of notifications for your reference</li>
                                    <li><strong>Rule Creation:</strong> To help you create blocking rules based on notification content and patterns</li>
                                </ul>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>3.2 Artificial Intelligence Analysis (Optional Feature)</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    When you use the AI-assisted rule creation feature (&quot;Pull on Device&quot;), the App may send limited notification data to our secure cloud-based AI service to:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Suggest appropriate blocking rules based on notification patterns</li>
                                    <li>Improve the accuracy of notification categorization</li>
                                    <li>Identify keywords and patterns for future blocking</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}><strong>Data sent to AI service includes:</strong></p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Device identifier (anonymized)</li>
                                    <li>Application package name</li>
                                    <li>Notification title and text content</li>
                                    <li>Sender information (if available)</li>
                                    <li>Channel and category information</li>
                                    <li>Whether the notification is from a group chat</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}><strong>Data NOT sent to AI service:</strong></p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Your personal identity information</li>
                                    <li>Your contacts</li>
                                    <li>Content of other applications</li>
                                    <li>Location data</li>
                                    <li>Financial information</li>
                                </ul>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>3.3 Service Improvement</h4>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>To synchronize dictionaries and filtering strategies from our servers to improve blocking accuracy</li>
                                    <li>To maintain and improve the App&apos;s performance and features</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>4. Data Storage and Retention</h3>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>4.1 Local Storage</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    All notification data and your filtering rules are stored <strong>locally on your device</strong> in an encrypted database. This includes:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Complete notification history</li>
                                    <li>Filtering rules you have created</li>
                                    <li>Application settings and preferences</li>
                                </ul>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>4.2 Cloud Storage</h4>
                                <p style={{ marginBottom: '16px' }}>We use Supabase as our cloud infrastructure provider. Our cloud services:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Do NOT store</strong> your notifications or personal data</li>
                                    <li><strong>Do NOT store</strong> notification content from your device</li>
                                    <li><strong>Do store</strong> general dictionaries and filtering strategies that are downloaded to all users&apos; devices</li>
                                    <li><strong>May temporarily process</strong> notification metadata through our AI service for rule suggestions (if you use this feature)</li>
                                </ul>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>4.3 Data Retention</h4>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Local data:</strong> Retained on your device until you uninstall the App or clear its data</li>
                                    <li><strong>AI processing data:</strong> Notification metadata sent for AI analysis is processed in real-time and is not persistently stored on our servers</li>
                                    <li><strong>Anonymized analytics:</strong> We may retain anonymized, aggregated usage statistics for service improvement</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>5. Data Sharing and Third Parties</h3>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>5.1 Third-Party Service Providers</h4>
                                <p style={{ marginBottom: '16px' }}>We use the following third-party services:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Supabase:</strong> Cloud infrastructure for data synchronization and AI processing</li>
                                    <li><strong>Google Gemini AI:</strong> Powers our AI-assisted rule suggestion feature (data processed via Supabase edge functions)</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}>
                                    These service providers are bound by their respective privacy policies and data processing agreements.
                                </p>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>5.2 We Do NOT</h4>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Sell your personal information to third parties</li>
                                    <li>Share your notification content with advertisers</li>
                                    <li>Use your data for targeted advertising</li>
                                    <li>Provide your data to data brokers</li>
                                    <li>Share identifiable information with any third parties except as described in this policy</li>
                                </ul>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>5.3 Legal Requirements</h4>
                                <p style={{ marginBottom: '16px' }}>
                                    We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>6. Permissions We Request</h3>
                                <p style={{ marginBottom: '16px' }}>Pull requires the following Android permissions to function:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Notification Access</strong> (BIND_NOTIFICATION_LISTENER_SERVICE): Core functionality to read and manage notifications from other apps</li>
                                    <li><strong>Internet</strong> (INTERNET): Sync filtering strategies and process AI rule suggestions</li>
                                    <li><strong>Post Notifications</strong> (POST_NOTIFICATIONS): Display feedback notifications when rules are created</li>
                                    <li><strong>Vibrate</strong> (VIBRATE): Provide haptic feedback for user interactions</li>
                                    <li><strong>Package Usage Stats</strong> (PACKAGE_USAGE_STATS): Understand which apps send you notifications</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}>
                                    You can revoke these permissions at any time through your device settings, though this may affect the App&apos;s functionality.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>7. Your Rights and Choices</h3>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>7.1 Access and Control</h4>
                                <p style={{ marginBottom: '16px' }}>You have the right to:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>View your data:</strong> Access all notifications and rules stored within the App</li>
                                    <li><strong>Delete your data:</strong> Clear all stored notifications and rules through the App settings</li>
                                    <li><strong>Disable AI features:</strong> Turn off the &quot;Pull on Device&quot; feature to prevent any notification data from being sent to our AI service</li>
                                    <li><strong>Uninstall the App:</strong> Remove all locally stored data by uninstalling the App</li>
                                </ul>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>7.2 Opt-Out Options</h4>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>AI Analysis:</strong> You can disable AI-assisted rule creation in the App settings. When disabled, no notification content is sent to external servers.</li>
                                    <li><strong>Notification Access:</strong> You can revoke notification access permission at any time through Android Settings &gt; Apps &gt; Pull &gt; Notifications.</li>
                                </ul>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>7.3 Data Deletion</h4>
                                <p style={{ marginBottom: '16px' }}>To delete all your data:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Go to Android Settings &gt; Apps &gt; Pull &gt; Storage</li>
                                    <li>Tap &quot;Clear Data&quot; to remove all locally stored information</li>
                                    <li>Alternatively, uninstall the App to remove all associated data</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>8. Data Security</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    We implement appropriate technical and organizational measures to protect your information:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Local encryption:</strong> Notification data is stored in an encrypted local database</li>
                                    <li><strong>Secure transmission:</strong> All data sent to our servers uses HTTPS encryption</li>
                                    <li><strong>Minimal data collection:</strong> We only collect data necessary to provide our services</li>
                                    <li><strong>No persistent cloud storage:</strong> Notification content is not stored on our servers</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>9. Children&apos;s Privacy</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    Pull is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>10. International Data Transfers</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    If you use the App outside of the country where our servers are located, your information may be transferred to, stored, and processed in countries other than your own. By using the App, you consent to this transfer, storage, and processing. We ensure that any international transfers comply with applicable data protection laws.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>11. Changes to This Privacy Policy</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Posting the new Privacy Policy within the App</li>
                                    <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}>
                                    We encourage you to review this Privacy Policy periodically for any changes. Changes are effective when posted.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>12. Contact Us</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                                </p>
                                <p style={{ marginBottom: '16px' }}>
                                    <strong>Pull Notifications</strong><br />
                                    Email: support@pullnotifications.com<br />
                                    Website: www.pullnotifications.com
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>13. Google Play Data Safety</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    In accordance with Google Play&apos;s Data Safety requirements, here is a summary of our data practices:
                                </p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Device ID:</strong> Collected for analytics and service functionality (not shared)</li>
                                    <li><strong>App interactions:</strong> Collected for app functionality (not shared)</li>
                                    <li><strong>Notification content:</strong> Collected for core functionality; metadata may be shared with our AI service provider for rule suggestions if you use this feature</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}>
                                    <strong>Data handling:</strong> Data is encrypted in transit. Data can be deleted by clearing app data or uninstalling.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>14. Compliance</h3>
                                <p style={{ marginBottom: '16px' }}>This Privacy Policy is designed to comply with:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Google Play Developer Program Policies</li>
                                    <li>Google Play Data Safety requirements</li>
                                    <li>General Data Protection Regulation (GDPR) principles</li>
                                    <li>California Consumer Privacy Act (CCPA) principles</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>15. Acknowledgment</h3>
                                <p style={{ marginBottom: '16px', fontWeight: '500' }}>
                                    BY USING PULL, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THIS PRIVACY POLICY.
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
