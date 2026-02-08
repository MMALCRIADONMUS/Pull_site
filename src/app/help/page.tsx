import MainCard from "@/components/MainCard";
import Footer from "@/components/Footer";
import FooterScrim from "@/components/FooterScrim";
import BackgroundEffect from "@/components/BackgroundEffect";
import ScrollToTop from "@/components/ScrollToTop";
import FAQ from "@/components/FAQ";
import HelpNavbar from "@/components/HelpNavbar";

export default function HelpPage() {
    return (
        <>
            <ScrollToTop />
            <HelpNavbar />
            <BackgroundEffect />
            <MainCard>
                <div className="content-section" style={{ flexDirection: 'column', alignItems: 'stretch', textAlign: 'left', minHeight: 'auto', paddingBottom: '60px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                        <section id="help-center" style={{ marginBottom: '80px', scrollMarginTop: '120px' }}>
                            <h1 style={{ fontSize: '32px', marginBottom: '24px', fontWeight: '700' }}>Help Center</h1>
                            <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.5)', marginBottom: '24px' }}>Last Updated: February 7, 2026</p>

                            <div id="faq" style={{ scrollMarginTop: '100px' }}>
                                <FAQ />
                            </div>

                            {/* About Pull */}
                            <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>About Pull</h2>
                            <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>What is Pull?</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    Pull is a notification management app designed to help you <strong>reclaim control over your digital attention</strong>. Instead of being constantly interrupted by endless notifications, Pull acts as an intelligent layer between your apps and you, filtering, organizing, and summarizing notifications so you only see what truly matters.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Our Mission</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    In today&apos;s digital world, your attention is constantly being pulled in multiple directions. Pull exists to give you back your <strong>freedom and focus</strong>. We believe you should decide what deserves your attention—not the apps on your phone.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Key Benefits</h3>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Reduce distractions</strong> by filtering out unwanted notifications</li>
                                    <li><strong>Stay organized</strong> with a centralized notification hub</li>
                                    <li><strong>Save time</strong> with intelligent summaries and categorization</li>
                                    <li><strong>Maintain control</strong> over which notifications reach you and when</li>
                                    <li><strong>Access history</strong> to review past notifications at any time</li>
                                </ul>
                            </div>

                            {/* Getting Started */}
                            <section id="getting-started" style={{ scrollMarginTop: '100px' }}>
                                <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>Getting Started</h2>
                                <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Step 1: Download and Install</h3>
                                    <p style={{ marginBottom: '16px' }}>
                                        Download Pull from the Google Play Store and install it on your Android device.
                                    </p>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Step 2: Grant Notification Access</h3>
                                    <p style={{ marginBottom: '16px' }}>
                                        After opening Pull for the first time, you&apos;ll be prompted to grant notification access. This is essential for Pull to work.
                                    </p>
                                    <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Tap &quot;Open Settings&quot; when prompted</li>
                                        <li>Find &quot;Pull&quot; in the list of apps</li>
                                        <li>Toggle &quot;Allow notification access&quot; to ON</li>
                                        <li>Confirm your choice</li>
                                    </ol>
                                    <p style={{ marginBottom: '16px' }}>
                                        <strong>Why is this needed?</strong> Pull requires notification access to read, filter, and organize notifications from your other apps. Without this permission, Pull cannot function.
                                    </p>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Step 3: Explore the Interface</h3>
                                    <p style={{ marginBottom: '16px' }}>Once set up, Pull will begin capturing notifications. You&apos;ll see:</p>
                                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li><strong>Home Screen:</strong> Your organized notification inbox</li>
                                        <li><strong>History:</strong> Complete log of all past notifications</li>
                                        <li><strong>Rules:</strong> Your custom filtering preferences</li>
                                        <li><strong>Settings:</strong> App configuration options</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Features & How It Works */}
                            <section id="features" style={{ scrollMarginTop: '100px' }}>
                                <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>Features &amp; How It Works</h2>
                                <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Notification Centralization</h3>
                                    <p style={{ marginBottom: '16px' }}>All notifications from your installed apps are collected in one place. This includes:</p>
                                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Messages and communications</li>
                                        <li>Social media updates</li>
                                        <li>App alerts and reminders</li>
                                        <li>System notifications</li>
                                    </ul>
                                    <p style={{ marginBottom: '16px' }}>
                                        You can browse, search, and interact with all your notifications without switching between apps.
                                    </p>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Intelligent Filtering</h3>
                                    <p style={{ marginBottom: '16px' }}>Pull distinguishes between important notifications and low-priority ones using:</p>
                                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li><strong>App-based rules:</strong> Filter notifications by specific apps</li>
                                        <li><strong>Keyword matching:</strong> Block or prioritize based on content</li>
                                        <li><strong>Time-based rules:</strong> Different behavior for different times of day</li>
                                        <li><strong>Category detection:</strong> Automatic categorization of notification types</li>
                                    </ul>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Summary &amp; Organization</h3>
                                    <p style={{ marginBottom: '16px' }}>
                                        Long or repetitive notifications are condensed into clear summaries, allowing you to quickly understand the essence of each alert. Notifications can be organized by:
                                    </p>
                                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Application source</li>
                                        <li>Category (messages, social, alerts, etc.)</li>
                                        <li>Priority level</li>
                                        <li>Time received</li>
                                    </ul>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Quick Actions</h3>
                                    <p style={{ marginBottom: '16px' }}>Interact with notifications directly within Pull:</p>
                                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li><strong>Swipe right:</strong> Mark as useful/important</li>
                                        <li><strong>Swipe left:</strong> Dismiss or mark as unwanted</li>
                                        <li><strong>Tap:</strong> Open the source app</li>
                                        <li><strong>Long press:</strong> Access more options</li>
                                    </ul>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Complete History</h3>
                                    <p style={{ marginBottom: '16px' }}>Every notification ever received is stored and accessible. You can:</p>
                                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Search past notifications</li>
                                        <li>Review old messages</li>
                                        <li>Access notifications you may have missed</li>
                                        <li>Track notification patterns over time</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Permissions Explained */}
                            <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>Permissions Explained</h2>
                            <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                <p style={{ marginBottom: '16px' }}>Pull requires certain permissions to function properly. Here&apos;s what each permission does and why it&apos;s needed:</p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Notification Access (Required)</h3>
                                <p style={{ marginBottom: '8px' }}><strong>Permission:</strong> Notification Listener Service</p>
                                <p style={{ marginBottom: '8px' }}><strong>Why needed:</strong> This is the core permission that allows Pull to read and manage notifications from your other apps. Without this, Pull cannot access your notifications.</p>
                                <p style={{ marginBottom: '8px' }}><strong>What it does:</strong></p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Reads notification content (title, text, app name)</li>
                                    <li>Allows Pull to organize and filter notifications</li>
                                    <li>Enables notification history features</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Internet Access</h3>
                                <p style={{ marginBottom: '8px' }}><strong>Why needed:</strong> Required for:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Syncing filtering strategies from our servers</li>
                                    <li>AI-powered rule suggestions (optional feature)</li>
                                    <li>Downloading updated dictionaries for better filtering</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}>
                                    <strong>What it does NOT do:</strong> Does not upload your personal notifications to any server (except when using AI features with your consent).
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Post Notifications</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    <strong>Why needed:</strong> Allows Pull to send you feedback notifications, such as confirmation when a rule is created, status updates about blocked notifications, and important app alerts.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Vibrate</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    <strong>Why needed:</strong> Provides haptic feedback when you interact with notifications (swipes, taps, etc.)
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Package Usage Stats (Optional)</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    <strong>Why needed:</strong> Helps Pull understand which apps send you the most notifications, improving filtering suggestions.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Managing Permissions</h3>
                                <p style={{ marginBottom: '16px' }}>You can manage all permissions at any time:</p>
                                <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Go to <strong>Android Settings</strong> &gt; <strong>Apps</strong> &gt; <strong>Pull</strong></li>
                                    <li>Tap <strong>Permissions</strong></li>
                                    <li>Enable or disable individual permissions</li>
                                </ol>
                                <p style={{ marginBottom: '16px' }}>
                                    <em>Note: Disabling notification access will prevent Pull from functioning.</em>
                                </p>
                            </div>

                            {/* Managing Your Notifications */}
                            <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>Managing Your Notifications</h2>
                            <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Viewing Notifications</h3>
                                <p style={{ marginBottom: '16px' }}>Your main inbox displays all captured notifications. Each notification shows:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>App icon and name</li>
                                    <li>Notification title and preview</li>
                                    <li>Time received</li>
                                    <li>Priority indicator (if applicable)</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Filtering Your View</h3>
                                <p style={{ marginBottom: '16px' }}>Use the filter options to:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Show only specific apps</li>
                                    <li>Sort by time, priority, or app</li>
                                    <li>Search for specific content</li>
                                    <li>View blocked vs. allowed notifications</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Taking Action</h3>
                                <p style={{ marginBottom: '16px' }}><strong>Mark as Important:</strong> Swipe right or tap the star icon to mark a notification as important. Pull will learn from this feedback.</p>
                                <p style={{ marginBottom: '16px' }}><strong>Dismiss:</strong> Swipe left to dismiss a notification. Repeated dismissals of similar notifications help Pull learn your preferences.</p>
                                <p style={{ marginBottom: '16px' }}><strong>Open Source App:</strong> Tap any notification to open the original app.</p>
                                <p style={{ marginBottom: '16px' }}><strong>Delete:</strong> Long press and select &quot;Delete&quot; to remove a notification from history.</p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Batch Operations</h3>
                                <p style={{ marginBottom: '16px' }}>Select multiple notifications to:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Mark all as read</li>
                                    <li>Delete selection</li>
                                    <li>Block sender</li>
                                    <li>Create a filtering rule</li>
                                </ul>
                            </div>

                            {/* Creating Filtering Rules */}
                            <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>Creating Filtering Rules</h2>
                            <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                <p style={{ marginBottom: '16px' }}>Rules are the heart of Pull&apos;s filtering system. They tell Pull what to do with specific types of notifications.</p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Types of Rules</h3>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>App Rules</h4>
                                <p style={{ marginBottom: '16px' }}>Block or prioritize all notifications from a specific app.</p>
                                <p style={{ marginBottom: '16px' }}><em>Example: Block all notifications from a shopping app.</em></p>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>Keyword Rules</h4>
                                <p style={{ marginBottom: '16px' }}>Filter based on words in the notification content.</p>
                                <p style={{ marginBottom: '16px' }}><em>Example: Block notifications containing &quot;sale&quot; or &quot;discount&quot;.</em></p>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>Sender Rules</h4>
                                <p style={{ marginBottom: '16px' }}>Filter messages from specific contacts or senders.</p>
                                <p style={{ marginBottom: '16px' }}><em>Example: Always prioritize notifications from &quot;Boss&quot; or &quot;Family&quot;.</em></p>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>Time Rules</h4>
                                <p style={{ marginBottom: '16px' }}>Apply different filtering behavior at different times.</p>
                                <p style={{ marginBottom: '16px' }}><em>Example: Block social media notifications during work hours (9 AM - 5 PM).</em></p>

                                <h4 style={{ fontSize: '17px', margin: '20px 0 12px', fontWeight: '600', color: 'rgba(0,0,0,0.8)' }}>Category Rules</h4>
                                <p style={{ marginBottom: '16px' }}>Filter by notification category (promotions, messages, updates, etc.).</p>
                                <p style={{ marginBottom: '16px' }}><em>Example: Block all promotional notifications.</em></p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Creating a Rule Manually</h3>
                                <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Go to <strong>Rules</strong> in the main menu</li>
                                    <li>Tap the <strong>+</strong> button</li>
                                    <li>Choose the rule type</li>
                                    <li>Configure the conditions</li>
                                    <li>Select the action (block, prioritize, etc.)</li>
                                    <li>Save the rule</li>
                                </ol>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Automatic Rule Suggestions</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    When you dismiss or interact with notifications, Pull may suggest relevant rules based on your behavior. You can accept, modify, or reject these suggestions.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Managing Existing Rules</h3>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Enable/Disable:</strong> Toggle rules on or off without deleting them</li>
                                    <li><strong>Edit:</strong> Modify conditions or actions</li>
                                    <li><strong>Delete:</strong> Remove rules permanently</li>
                                    <li><strong>Reorder:</strong> Set priority when multiple rules could apply</li>
                                </ul>
                            </div>

                            {/* AI-Powered Features */}
                            <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>AI-Powered Features</h2>
                            <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>What is &quot;Pull on Device&quot;?</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    Pull on Device is our optional AI-powered feature that helps create smarter filtering rules. When enabled, it analyzes notification patterns to suggest optimal blocking and prioritization rules.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>How It Works</h3>
                                <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>You encounter a notification you want to filter</li>
                                    <li>Pull sends limited notification data to our secure AI service</li>
                                    <li>The AI analyzes patterns and suggests appropriate rules</li>
                                    <li>You review and approve the suggested rules</li>
                                </ol>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>What Data is Sent?</h3>
                                <p style={{ marginBottom: '16px' }}>When using AI features, the following data may be processed:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>App package name (e.g., &quot;com.example.app&quot;)</li>
                                    <li>Notification title and text</li>
                                    <li>Channel and category information</li>
                                    <li>Anonymous device identifier</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}><strong>What is NOT sent:</strong></p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Your personal contacts</li>
                                    <li>Your location</li>
                                    <li>Financial information</li>
                                    <li>Content from apps where Pull doesn&apos;t have access</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Disabling AI Features</h3>
                                <p style={{ marginBottom: '16px' }}>If you prefer not to use AI-powered features:</p>
                                <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Go to <strong>Settings</strong> &gt; <strong>Privacy</strong></li>
                                    <li>Toggle off &quot;AI-Assisted Rules&quot;</li>
                                    <li>No notification data will be sent to external servers</li>
                                </ol>
                                <p style={{ marginBottom: '16px' }}>
                                    You can still create rules manually without AI assistance.
                                </p>
                            </div>

                            {/* Privacy & Data */}
                            <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>Privacy &amp; Data</h2>
                            <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Our Privacy Commitment</h3>
                                <p style={{ marginBottom: '16px' }}>Pull is designed with privacy in mind:</p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li><strong>Local First:</strong> All notification data is stored locally on your device</li>
                                    <li><strong>No Ads:</strong> We don&apos;t use your data for advertising</li>
                                    <li><strong>No Selling:</strong> We never sell your information to third parties</li>
                                    <li><strong>Transparency:</strong> We clearly explain all data practices</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Data Storage</h3>
                                <p style={{ marginBottom: '16px' }}><strong>On Your Device:</strong></p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Complete notification history</li>
                                    <li>Your filtering rules</li>
                                    <li>App settings and preferences</li>
                                </ul>
                                <p style={{ marginBottom: '16px' }}><strong>In the Cloud (if using AI features):</strong></p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Temporary processing of anonymized notification metadata</li>
                                    <li>No persistent storage of your personal data</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Deleting Your Data</h3>
                                <p style={{ marginBottom: '16px' }}>To delete all data associated with Pull:</p>
                                <p style={{ marginBottom: '8px' }}><strong>1. Clear App Data:</strong></p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Go to Android Settings &gt; Apps &gt; Pull &gt; Storage</li>
                                    <li>Tap &quot;Clear Data&quot;</li>
                                </ul>
                                <p style={{ marginBottom: '8px' }}><strong>2. Uninstall:</strong></p>
                                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                    <li>Uninstalling Pull removes all locally stored data</li>
                                </ul>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Full Privacy Policy</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    For complete details about our data practices, please read our <a href="/terms#privacy" style={{ color: '#0066cc', textDecoration: 'underline' }}>Privacy Policy</a>.
                                </p>
                            </div>

                            {/* Troubleshooting */}
                            {/* Troubleshooting */}
                            <section id="troubleshooting" style={{ scrollMarginTop: '100px' }}>
                                <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>Troubleshooting</h2>
                                <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Pull is not capturing notifications</h3>
                                    <p style={{ marginBottom: '16px' }}><strong>Solution:</strong></p>
                                    <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Verify notification access is enabled: Go to Android Settings &gt; Apps &gt; Special access &gt; Notification access</li>
                                        <li>Ensure Pull is enabled</li>
                                        <li>Restart your device</li>
                                        <li>Open Pull and check if notifications appear</li>
                                    </ol>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Notifications are still appearing on my phone</h3>
                                    <p style={{ marginBottom: '16px' }}><strong>Understanding:</strong> Pull filters notifications but may not remove them from your status bar (depending on your settings).</p>
                                    <p style={{ marginBottom: '16px' }}><strong>Solution:</strong></p>
                                    <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Go to Pull Settings &gt; Notification Handling</li>
                                        <li>Enable &quot;Auto-dismiss blocked notifications&quot;</li>
                                        <li>This will remove blocked notifications from your status bar</li>
                                    </ol>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Rules are not working</h3>
                                    <p style={{ marginBottom: '16px' }}><strong>Solutions:</strong></p>
                                    <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Verify the rule is enabled (toggle is ON)</li>
                                        <li>Check if the rule conditions match the notification</li>
                                        <li>Review rule priority if multiple rules conflict</li>
                                        <li>Try recreating the rule with updated conditions</li>
                                    </ol>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>App is using too much battery</h3>
                                    <p style={{ marginBottom: '16px' }}><strong>Solutions:</strong></p>
                                    <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Go to Settings &gt; Battery Optimization</li>
                                        <li>Ensure you&apos;re using the &quot;Optimized&quot; setting</li>
                                        <li>Avoid using &quot;Unrestricted&quot; background access unless necessary</li>
                                        <li>Reduce the frequency of AI-assisted suggestions</li>
                                    </ol>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Notifications are delayed</h3>
                                    <p style={{ marginBottom: '16px' }}><em>Note: There may be a slight delay while Pull processes notifications.</em></p>
                                    <p style={{ marginBottom: '16px' }}><strong>Solutions:</strong></p>
                                    <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Check battery optimization settings</li>
                                        <li>Ensure Pull is not being killed by your device&apos;s battery saver</li>
                                        <li>Exclude Pull from any third-party battery/cleaner apps</li>
                                    </ol>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>How to reset Pull to default settings</h3>
                                    <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Go to Pull Settings &gt; Advanced</li>
                                        <li>Tap &quot;Reset to Defaults&quot;</li>
                                        <li>Confirm your choice</li>
                                    </ol>
                                </div>
                            </section>

                            {/* Contact & Support */}
                            <section id="contact" style={{ scrollMarginTop: '100px' }}>
                                <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>Contact &amp; Support</h2>
                                <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Need Help?</h3>
                                    <p style={{ marginBottom: '16px' }}>If you have questions, issues, or suggestions, we&apos;re here to help!</p>
                                    <p style={{ marginBottom: '16px' }}>
                                        <strong>Email Support:</strong><br />
                                        <a href="mailto:pull.notifications.app@gmail.com" style={{ color: '#0066cc', textDecoration: 'underline' }}>pull.notifications.app@gmail.com</a>
                                    </p>
                                    <p style={{ marginBottom: '16px' }}>We aim to respond to all inquiries within 48 hours.</p>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Feedback</h3>
                                    <p style={{ marginBottom: '16px' }}>We love hearing from our users! Send us your:</p>
                                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Feature requests</li>
                                        <li>Bug reports</li>
                                        <li>General feedback</li>
                                        <li>Success stories</li>
                                    </ul>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Report a Bug</h3>
                                    <p style={{ marginBottom: '16px' }}>When reporting a bug, please include:</p>
                                    <ol style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Description of the issue</li>
                                        <li>Steps to reproduce (if possible)</li>
                                        <li>Your device model and Android version</li>
                                        <li>Screenshot (if applicable)</li>
                                    </ol>

                                    <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Community</h3>
                                    <p style={{ marginBottom: '16px' }}>Join the conversation:</p>
                                    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                                        <li>Rate us on the Google Play Store</li>
                                        <li>Share Pull with friends who need help managing notifications</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Legal Information */}
                            <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>Legal Information</h2>
                            <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Terms of Service</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    By using Pull, you agree to our <a href="/terms" style={{ color: '#0066cc', textDecoration: 'underline' }}>Terms of Service</a>.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Privacy Policy</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    Read our complete <a href="/terms#privacy" style={{ color: '#0066cc', textDecoration: 'underline' }}>Privacy Policy</a> to understand how we handle your data.
                                </p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Age Restrictions</h3>
                                <p style={{ marginBottom: '16px' }}>Pull is not intended for children under 13 years of age.</p>

                                <h3 style={{ fontSize: '20px', margin: '32px 0 16px', fontWeight: '600', color: 'black' }}>Disclaimer</h3>
                                <p style={{ marginBottom: '16px' }}>
                                    Pull is a notification management tool. While we strive to filter notifications accurately, we cannot guarantee that all unwanted notifications will be blocked or that all important notifications will be preserved. Users are responsible for reviewing their notification history and adjusting rules as needed.
                                </p>
                            </div>

                            {/* Quick Reference Card */}
                            <h2 style={{ fontSize: '24px', margin: '48px 0 24px', fontWeight: '700', color: 'black' }}>Quick Reference Card</h2>
                            <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(0,0,0,0.7)' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.1)' }}>
                                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600', color: 'black' }}>Action</th>
                                            <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600', color: 'black' }}>How To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                            <td style={{ padding: '12px 16px' }}>Grant notification access</td>
                                            <td style={{ padding: '12px 16px' }}>Settings &gt; Apps &gt; Special access &gt; Notification access &gt; Pull</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                            <td style={{ padding: '12px 16px' }}>Create a rule</td>
                                            <td style={{ padding: '12px 16px' }}>Rules tab &gt; + button &gt; Configure and save</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                            <td style={{ padding: '12px 16px' }}>Block an app</td>
                                            <td style={{ padding: '12px 16px' }}>Swipe left on notification &gt; &quot;Block this app&quot;</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                            <td style={{ padding: '12px 16px' }}>View history</td>
                                            <td style={{ padding: '12px 16px' }}>History tab in main navigation</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                            <td style={{ padding: '12px 16px' }}>Delete all data</td>
                                            <td style={{ padding: '12px 16px' }}>Android Settings &gt; Apps &gt; Pull &gt; Storage &gt; Clear Data</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                            <td style={{ padding: '12px 16px' }}>Disable AI features</td>
                                            <td style={{ padding: '12px 16px' }}>Settings &gt; Privacy &gt; Toggle off &quot;AI-Assisted Rules&quot;</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                            <td style={{ padding: '12px 16px' }}>Contact support</td>
                                            <td style={{ padding: '12px 16px' }}>Email: pull.notifications.app@gmail.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Closing */}
                            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '32px', marginTop: '48px' }}>
                                <p style={{ fontSize: '16px', fontStyle: 'italic', textAlign: 'center', color: 'rgba(0,0,0,0.7)' }}>
                                    Thank you for choosing Pull. Together, let&apos;s reclaim your attention and free your mind.
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
