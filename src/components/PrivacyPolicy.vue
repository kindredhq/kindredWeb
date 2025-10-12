<template>
  <div class="min-h-screen bg-white">
    <!-- Header with Logo and Back -->
    <header class="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex items-center justify-between mb-6">
          <router-link to="/" class="flex items-center text-slate-600 hover:text-kindred transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Home
          </router-link>
          <img :src="kindredLogo" alt="Kindred" class="h-10 w-10" />
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p class="text-slate-600">
          <strong>Last Updated:</strong> October 1, 2025 | <strong>Effective Date:</strong> October 1, 2025
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- The Honest Version -->
      <section class="mb-12 p-8 bg-gradient-to-br from-kindred-50 to-purple-50 rounded-2xl border-2 border-kindred-200">
        <h2 class="text-3xl font-bold text-slate-900 mb-4">The Honest Version (Then the Legal Version)</h2>
        <p class="text-lg font-semibold text-slate-900 mb-6">We know nobody reads privacy policies. So here's the TL;DR:</p>

        <div class="space-y-3 text-slate-700">
          <p class="flex items-start">
            <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
            <span><strong>Your relationship data is YOURS.</strong> We store it securely on Google Cloud, but you own it.</span>
          </p>
          <p class="flex items-start">
            <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
            <span><strong>We'll never sell your data.</strong> Your contacts, notes, and interactions stay private.</span>
          </p>
          <p class="flex items-start">
            <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
            <span><strong>You can delete everything anytime.</strong> Hard delete = gone forever. Soft delete = 60 days, then gone forever.</span>
          </p>
          <p class="flex items-start">
            <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
            <span><strong>We use anonymized patterns to improve the AI.</strong> We learn from usage patterns, never from your actual conversations or personal notes.</span>
          </p>
          <p class="flex items-start">
            <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
            <span><strong>We encrypt everything.</strong> Your data is protected both in storage and in transmission.</span>
          </p>
          <p class="flex items-start">
            <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
            <span><strong>You can export your data.</strong> Premium users can do it in-app. Free users can email us.</span>
          </p>
        </div>

        <p class="mt-6 text-slate-700 font-medium">If you want the legal details, keep reading.</p>
      </section>

      <!-- Table of Contents -->
      <nav class="mb-12 p-6 bg-slate-50 rounded-xl">
        <h3 class="text-xl font-bold text-slate-900 mb-4">Quick Navigation</h3>
        <div class="grid sm:grid-cols-2 gap-2 text-sm">
          <a href="#section-1" class="text-kindred hover:underline">1. Information We Collect</a>
          <a href="#section-2" class="text-kindred hover:underline">2. How We Use Your Information</a>
          <a href="#section-3" class="text-kindred hover:underline">3. How We Share Your Information</a>
          <a href="#section-4" class="text-kindred hover:underline">4. Data Security</a>
          <a href="#section-5" class="text-kindred hover:underline">5. Your Rights & Control</a>
          <a href="#section-6" class="text-kindred hover:underline">6. Data Retention</a>
          <a href="#section-7" class="text-kindred hover:underline">7. International Data Transfers</a>
          <a href="#section-8" class="text-kindred hover:underline">8. Children's Privacy</a>
          <a href="#section-9" class="text-kindred hover:underline">9. Third-Party Links</a>
          <a href="#section-10" class="text-kindred hover:underline">10. Cookies & Tracking</a>
          <a href="#section-11" class="text-kindred hover:underline">11. Policy Changes</a>
          <a href="#section-12" class="text-kindred hover:underline">12. Contact Us</a>
          <a href="#section-13" class="text-kindred hover:underline">13. California Rights (CCPA)</a>
          <a href="#section-14" class="text-kindred hover:underline">14. European Rights (GDPR)</a>
          <a href="#section-15" class="text-kindred hover:underline">15. Data Breach Notification</a>
        </div>
      </nav>

      <!-- Policy Content -->
      <div class="prose prose-slate max-w-none">

        <!-- Section 1 -->
        <section id="section-1" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">1. Information We Collect</h2>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Information You Provide Directly:</h3>
          <p class="text-slate-700 mb-4">When you use Kindred, you provide us with:</p>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li><strong>Account Information:</strong> Name, email address, phone number, profile photo</li>
            <li><strong>Contact Information:</strong> Names, phone numbers, emails, addresses, companies, and other details about people in your network</li>
            <li><strong>Relationship Data:</strong> Notes about contacts, relationship categories/circles, important dates (birthdays, anniversaries, work anniversaries)</li>
            <li><strong>Interaction History:</strong> Logs of calls, messages, emails, and meetings including date, time, duration, type, and any notes you add</li>
            <li><strong>Events & Meetings:</strong> Calendar events, meeting locations, attendees, event descriptions</li>
            <li><strong>Voice Notes:</strong> If you use voice input to log interactions, we transcribe and store them as text</li>
            <li><strong>Conversation Context:</strong> Summaries and context you provide about your relationships and interactions</li>
          </ul>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Information We Collect Automatically:</h3>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li><strong>Device Information:</strong> Device type, operating system version, app version, unique device identifiers</li>
            <li><strong>Usage Data:</strong> Features you use, time spent in app, actions taken, interaction patterns</li>
            <li><strong>Log Data:</strong> Error logs, crash reports, performance data, diagnostic information</li>
            <li><strong>Location Data:</strong> Approximate location for local events (only if you grant permission)</li>
          </ul>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Information from Third-Party Integrations:</h3>
          <p class="text-slate-700 mb-4">With your explicit permission, we may import data from:</p>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li><strong>Google Services:</strong> Google Contacts, Google Calendar, Gmail metadata (sender, recipient, timestamp - NOT email content)</li>
            <li><strong>Apple Services:</strong> iOS Contacts, Apple Calendar</li>
            <li><strong>Other Calendar Services:</strong> Microsoft Outlook, other calendar providers you connect</li>
          </ul>

          <div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p class="text-blue-900"><strong>Important:</strong> We only access metadata (who, when, event titles) from your email and calendar. We never read the content of your emails or private calendar notes unless you explicitly provide them to us within Kindred.</p>
          </div>
        </section>

        <!-- Section 2 -->
        <section id="section-2" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">2. How We Use Your Information</h2>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Provide Core Services:</h3>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>Store and organize your professional and personal relationships</li>
            <li>Generate smart reminders based on your interaction patterns and relationship history</li>
            <li>Track relationship health and engagement over time</li>
            <li>Provide AI-powered suggestions for when and why to reach out</li>
            <li>Create timelines of your relationship history</li>
            <li>Help you search and find contacts quickly</li>
            <li>Suggest optimal communication timing based on your patterns</li>
          </ul>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Improve Kindred (The AI Training Part):</h3>

          <div class="p-6 bg-green-50 border-2 border-green-200 rounded-xl mb-4">
            <p class="font-semibold text-green-900 mb-2">Here's exactly what we DO:</p>
            <ul class="list-disc pl-6 space-y-1 text-green-800">
              <li>Analyze <strong>anonymized, aggregated patterns</strong> across all users to improve our AI</li>
              <li>Train models on relationship timing patterns, interaction frequency patterns, and reminder effectiveness</li>
              <li>Improve our AI's ability to suggest relevant reminder timing</li>
            </ul>
          </div>

          <div class="p-6 bg-red-50 border-2 border-red-200 rounded-xl mb-6">
            <p class="font-semibold text-red-900 mb-2">Here's exactly what we DON'T do:</p>
            <ul class="list-disc pl-6 space-y-1 text-red-800">
              <li>We do NOT read your specific notes about people</li>
              <li>We do NOT access the content of your conversations or what you wrote about anyone</li>
              <li>We do NOT use actual names, phone numbers, email addresses, or any personally identifiable information in AI training</li>
              <li>We do NOT share individual relationship data with anyone, ever</li>
            </ul>
          </div>

          <div class="p-4 bg-slate-100 border-l-4 border-slate-500 rounded mb-6">
            <p class="text-slate-700"><strong>Example:</strong> We might learn "users who set quarterly reminders for investors tend to maintain stronger relationships" from anonymized usage patterns, but we will never know that <em>you</em> specifically need to call <em>Sarah</em> about <em>your Series A fundraise</em>.</p>
          </div>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Communications:</h3>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>Send you important product updates and security notifications</li>
            <li>Notify you about features you've requested or changes to features you use</li>
            <li>Respond to your support requests and questions</li>
            <li>Send optional tips, best practices, and product education (you can opt out anytime)</li>
          </ul>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Legal & Safety:</h3>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>Comply with applicable legal requirements</li>
            <li>Prevent fraud, abuse, or misuse of our services</li>
            <li>Enforce our Terms of Service</li>
            <li>Protect the security and integrity of our services</li>
          </ul>
        </section>

        <!-- Section 3 -->
        <section id="section-3" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">3. How We Share Your Information</h2>

          <div class="p-6 bg-red-100 border-2 border-red-400 rounded-xl mb-6">
            <h3 class="text-2xl font-bold text-red-900 mb-2">We Do NOT Sell Your Data. Period.</h3>
            <p class="text-red-800">Your relationship data is private and will never be sold to advertisers, data brokers, marketing companies, or any third parties for any reason.</p>
          </div>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">We May Share Information Only In These Limited Cases:</h3>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Service Providers:</h4>
            <p class="text-slate-700 mb-3">We use trusted third-party services to operate Kindred:</p>
            <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-3">
              <li><strong>Cloud Infrastructure:</strong> Google Cloud Platform (US region) to securely store your data</li>
              <li><strong>Database:</strong> Google Cloud SQL with encryption and security controls</li>
              <li><strong>AI Processing:</strong> For AI features, data is anonymized and processed without storing personal identifiers</li>
            </ul>
            <p class="text-slate-700 font-medium">All service providers are bound by strict confidentiality agreements and cannot use your data for their own purposes.</p>
          </div>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Legal Requirements:</h4>
            <p class="text-slate-700 mb-2">We may disclose information only if required by:</p>
            <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-3">
              <li>Valid court order or subpoena</li>
              <li>Legal obligation under applicable law</li>
              <li>Government or regulatory request where legally required</li>
            </ul>
            <p class="text-slate-700">We will notify you of such requests unless prohibited by law.</p>
          </div>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Business Transfers:</h4>
            <p class="text-slate-700">If Kindred is acquired, merged, or undergoes a business transition, your data may transfer to the new entity. The same privacy protections will continue to apply, and you'll be notified of any changes.</p>
          </div>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">With Your Explicit Consent:</h4>
            <p class="text-slate-700">We'll ask your permission before sharing data in any other way not described here.</p>
          </div>
        </section>

        <!-- Section 4 -->
        <section id="section-4" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">4. Data Security</h2>
          <p class="text-slate-700 mb-6">We take security seriously:</p>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Infrastructure Security:</h3>
          <div class="space-y-3 mb-6">
            <p class="flex items-start text-slate-700">
              <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
              <span><strong>Secure Cloud Storage:</strong> All data is stored on Google Cloud Platform in secure US data centers (us-central1 region)</span>
            </p>
            <p class="flex items-start text-slate-700">
              <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
              <span><strong>Database Security:</strong> Google Cloud SQL with security configurations, firewall rules, and access controls</span>
            </p>
            <p class="flex items-start text-slate-700">
              <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
              <span><strong>Data Encryption in Transit:</strong> All data transmitted between your device and our servers is encrypted using TLS 1.3</span>
            </p>
            <p class="flex items-start text-slate-700">
              <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
              <span><strong>Data Encryption at Rest:</strong> All stored data is encrypted using AES-256 encryption</span>
            </p>
            <p class="flex items-start text-slate-700">
              <span class="text-green-600 mr-3 text-xl flex-shrink-0">✅</span>
              <span><strong>Secure Backups:</strong> Regular encrypted backups with restricted access</span>
            </p>
          </div>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Access Controls:</h3>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>Role-based access control (RBAC) - only authorized personnel can access systems</li>
            <li>Two-factor authentication (2FA) required for all administrative access</li>
            <li>Principle of least privilege - team members only access what they need for their role</li>
            <li>We never access your personal relationship data unless you explicitly request support assistance</li>
          </ul>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Monitoring & Testing:</h3>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>Continuous security monitoring and logging</li>
            <li>Regular security updates and patches</li>
            <li>Ongoing security assessments</li>
          </ul>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">Compliance:</h3>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>Working toward SOC 2 Type II certification</li>
            <li>GDPR compliant for EU users</li>
            <li>CCPA compliant for California users</li>
          </ul>

          <div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <p class="text-yellow-900"><strong>However,</strong> no system is 100% secure. While we implement industry-standard security measures, we cannot guarantee absolute security against all possible threats.</p>
          </div>
        </section>

        <!-- Section 5 -->
        <section id="section-5" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">5. Your Rights & Control</h2>

          <h3 class="text-2xl font-semibold text-slate-900 mb-4">You Own Your Data:</h3>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Delete Your Data:</h4>
            <p class="text-slate-700 mb-3">You have two deletion options:</p>
            <ul class="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Soft Delete:</strong> When you delete contacts, interactions, or notes in the app, they're moved to a "deleted" state for 60 days (in case you change your mind), then permanently erased</li>
              <li><strong>Hard Delete:</strong> When you delete your entire account (Settings → Account → Delete Account), ALL your data is immediately and permanently removed from our servers with no recovery option</li>
            </ul>
          </div>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Export Your Data:</h4>
            <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-3">
              <li><strong>Premium users:</strong> Export all your data directly from the app in industry-standard formats (CSV, JSON) via Settings → Data Export</li>
              <li><strong>Free users:</strong> Email us at <a href="mailto:privacy@trykindredapp.com" class="text-kindred hover:underline">privacy@trykindredapp.com</a> and we'll send you a complete data export within 7 business days</li>
            </ul>
            <p class="text-slate-700">Your export includes: all contacts, interaction history, notes, relationship data, events, and account information.</p>
          </div>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Access Your Data:</h4>
            <ul class="list-disc pl-6 space-y-2 text-slate-700">
              <li>View all data we have about you directly in your account</li>
              <li>Request a detailed report of all collected data by emailing <a href="mailto:privacy@trykindredapp.com" class="text-kindred hover:underline">privacy@trykindredapp.com</a></li>
            </ul>
          </div>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Correct Your Data:</h4>
            <ul class="list-disc pl-6 space-y-2 text-slate-700">
              <li>Update any information directly in the app anytime</li>
              <li>Contact us at <a href="mailto:privacy@trykindredapp.com" class="text-kindred hover:underline">privacy@trykindredapp.com</a> if you need assistance correcting data</li>
            </ul>
          </div>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Control Integrations:</h4>
            <ul class="list-disc pl-6 space-y-2 text-slate-700">
              <li>Enable/disable specific integrations (Google Contacts, Calendar, etc.) in Settings</li>
              <li>Revoke permissions at the device level anytime through your device settings</li>
              <li>Disconnect third-party services without losing your core Kindred data</li>
            </ul>
          </div>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Opt-Out of Communications:</h4>
            <ul class="list-disc pl-6 space-y-2 text-slate-700">
              <li>Unsubscribe from marketing and educational emails anytime (link at bottom of every email)</li>
              <li>You'll still receive critical account, security, and transactional notifications</li>
              <li>Manage notification preferences in Settings → Notifications</li>
            </ul>
          </div>
        </section>

        <!-- Section 6 -->
        <section id="section-6" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">6. Data Retention</h2>

          <div class="space-y-4 text-slate-700">
            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-2">Active Accounts:</h4>
              <p>We retain your data as long as your account is active and you continue using Kindred.</p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-2">Soft-Deleted Data:</h4>
              <p>When you soft-delete items (contacts, interactions, notes) within the app, they're retained for <strong>60 days</strong> then permanently erased. This allows you to recover accidentally deleted data.</p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-2">Hard-Deleted Accounts:</h4>
              <p>When you permanently delete your account, ALL personal data is immediately and irreversibly erased from our servers. There is no recovery period.</p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-2">Legal Retention:</h4>
              <p>We may retain certain anonymized data if required by law (e.g., anonymized financial transaction records for tax compliance).</p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-2">Anonymized Analytics:</h4>
              <p>Anonymized, aggregated usage patterns (with no personal identifiers) may be retained indefinitely for product improvement.</p>
            </div>
          </div>
        </section>

        <!-- Section 7 -->
        <section id="section-7" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">7. International Data Transfers</h2>
          <p class="text-slate-700 mb-6">Kindred operates globally but stores data in the United States (Google Cloud us-central1 region).</p>

          <div class="space-y-6">
            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-3">For International Users:</h4>
              <p class="text-slate-700">If you're using Kindred from outside the United States, your data will be transferred to and stored in the US. By using Kindred, you consent to this transfer.</p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-3">For EU Users (GDPR):</h4>
              <p class="text-slate-700 mb-2">We comply with GDPR requirements for international data transfers:</p>
              <ul class="list-disc pl-6 space-y-2 text-slate-700">
                <li>We use Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>We implement appropriate technical and organizational security measures</li>
                <li>You have specific rights detailed in the "European Privacy Rights" section below</li>
              </ul>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-3">For UK Users:</h4>
              <p class="text-slate-700">We comply with UK GDPR requirements using similar safeguards as EU transfers.</p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-3">For California Users (CCPA):</h4>
              <p class="text-slate-700">You have specific rights under California law - see "Your California Privacy Rights" section below.</p>
            </div>
          </div>
        </section>

        <!-- Section 8 -->
        <section id="section-8" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">8. Children's Privacy</h2>
          <p class="text-slate-700 mb-4">Kindred is intended for users <strong>13 years of age and older</strong>.</p>
          <p class="text-slate-700 mb-4">We do not knowingly collect personal information from children under 13. If we discover we've collected data from a child under 13, we will delete that information immediately.</p>
          <p class="text-slate-700 mb-4">If you're a parent or guardian and believe your child under 13 has provided us with personal information, please contact us immediately at <a href="mailto:privacy@trykindredapp.com" class="text-kindred hover:underline">privacy@trykindredapp.com</a>.</p>
          <p class="text-slate-700"><strong>For EU Users:</strong> The minimum age is 16 in certain EU countries. Please check your local requirements.</p>
        </section>

        <!-- Section 9 -->
        <section id="section-9" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">9. Third-Party Links & Integrations</h2>
          <p class="text-slate-700 mb-4">Kindred may contain links to third-party websites or integrate with third-party services (Google, Apple, Microsoft, etc.).</p>
          <p class="text-slate-700 mb-4"><strong>We are not responsible for the privacy practices of third parties.</strong> Please review their privacy policies separately.</p>
          <p class="text-slate-700 mb-3">When you authorize integrations (e.g., Google Calendar, Google Contacts), you are also subject to their terms of service and privacy policies. We recommend reviewing:</p>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-4">
            <li>Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-kindred hover:underline">https://policies.google.com/privacy</a></li>
            <li>Apple Privacy Policy: <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" class="text-kindred hover:underline">https://www.apple.com/legal/privacy/</a></li>
            <li>Microsoft Privacy Policy: <a href="https://privacy.microsoft.com/" target="_blank" rel="noopener noreferrer" class="text-kindred hover:underline">https://privacy.microsoft.com/</a></li>
          </ul>
          <p class="text-slate-700">We only request the minimum permissions necessary to provide Kindred's functionality.</p>
        </section>

        <!-- Section 10 -->
        <section id="section-10" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">10. Cookies & Tracking Technologies</h2>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Mobile App:</h4>
            <p class="text-slate-700 mb-3">Our mobile app does not use cookies but may use similar technologies:</p>
            <ul class="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Local Storage:</strong> To store app preferences and cache data for offline functionality</li>
              <li><strong>Device Identifiers:</strong> To identify your device for security and support purposes</li>
              <li><strong>Analytics:</strong> To understand app usage and improve performance (anonymized)</li>
            </ul>
          </div>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Website:</h4>
            <p class="text-slate-700 mb-3">Our website (trykindredapp.com) uses:</p>
            <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-3">
              <li><strong>Essential Cookies:</strong> Required for website functionality (login, preferences)</li>
              <li><strong>Analytics Cookies:</strong> To understand website traffic and usage (anonymized via Google Analytics)</li>
            </ul>
            <p class="text-slate-700">You can control cookie preferences through your browser settings.</p>
          </div>
        </section>

        <!-- Section 11 -->
        <section id="section-11" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">11. Changes to This Privacy Policy</h2>
          <p class="text-slate-700 mb-4">We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>

          <h4 class="text-xl font-semibold text-slate-900 mb-3">We'll notify you of material changes by:</h4>
          <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-4">
            <li>Email notification to your registered email address</li>
            <li>In-app notification when you next open Kindred</li>
            <li>Posting the updated policy on our website with a new "Last Updated" date</li>
          </ul>

          <p class="text-slate-700 mb-4"><strong>Continued use of Kindred after changes take effect means you accept the updated policy.</strong></p>
          <p class="text-slate-700">We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
        </section>

        <!-- Section 12 -->
        <section id="section-12" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">12. Contact Us</h2>
          <p class="text-slate-700 mb-6">Questions? Concerns? Data requests? We're here to help.</p>

          <div class="grid sm:grid-cols-2 gap-6">
            <div class="p-6 bg-slate-50 rounded-xl">
              <h4 class="text-lg font-semibold text-slate-900 mb-2">General Privacy Inquiries:</h4>
              <p class="text-slate-700 mb-1">Email: <a href="mailto:privacy@trykindredapp.com" class="text-kindred hover:underline">privacy@trykindredapp.com</a></p>
              <p class="text-sm text-slate-600">Response time: Within 7 business days</p>
            </div>

            <div class="p-6 bg-slate-50 rounded-xl">
              <h4 class="text-lg font-semibold text-slate-900 mb-2">Founder Contact:</h4>
              <p class="text-slate-700 mb-1">Email: <a href="mailto:thinksenpai@gmail.com" class="text-kindred hover:underline">thinksenpai@gmail.com</a></p>
              <p class="text-sm text-slate-600">For urgent privacy concerns or direct questions</p>
            </div>
          </div>

          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <p class="text-slate-700"><strong>Website:</strong> <a href="http://www.trykindredapp.com/privacy" class="text-kindred hover:underline">www.trykindredapp.com/privacy</a></p>
          </div>
        </section>

        <!-- Section 13 - CCPA -->
        <section id="section-13" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">13. Your California Privacy Rights (CCPA)</h2>
          <p class="text-slate-700 mb-6">If you're a California resident, you have these additional rights under the California Consumer Privacy Act (CCPA):</p>

          <div class="space-y-6">
            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-3">Right to Know:</h4>
              <p class="text-slate-700 mb-2">Request disclosure of:</p>
              <ul class="list-disc pl-6 space-y-2 text-slate-700">
                <li>Categories of personal information we collect</li>
                <li>Sources of that information</li>
                <li>Business purpose for collecting it</li>
                <li>Categories of third parties we share it with</li>
                <li>Specific pieces of personal information we have about you</li>
              </ul>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-3">Right to Delete:</h4>
              <p class="text-slate-700">Request deletion of your personal information (subject to certain exceptions)</p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-3">Right to Opt-Out:</h4>
              <p class="text-slate-700">Opt-out of "sale" of personal information<br><em>(Note: We do NOT sell personal information, but you can still exercise this right)</em></p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-slate-900 mb-3">Right to Non-Discrimination:</h4>
              <p class="text-slate-700 mb-2">We will not discriminate against you for exercising your CCPA rights by:</p>
              <ul class="list-disc pl-6 space-y-2 text-slate-700">
                <li>Denying goods or services</li>
                <li>Charging different prices</li>
                <li>Providing different quality of service</li>
              </ul>
            </div>

            <div class="p-6 bg-purple-50 border-2 border-purple-200 rounded-xl">
              <h4 class="text-xl font-semibold text-purple-900 mb-3">How to Exercise Your Rights:</h4>
              <ul class="list-disc pl-6 space-y-2 text-purple-800">
                <li>Email: <a href="mailto:privacy@trykindredapp.com" class="text-kindred hover:underline">privacy@trykindredapp.com</a></li>
                <li>Subject line: "CCPA Request"</li>
                <li>Include: Your name, email, and specific request</li>
              </ul>
              <p class="mt-3 text-purple-800"><strong>Response Time:</strong> We'll respond within 45 days (can extend by 45 days for complex requests with notice).</p>
            </div>
          </div>
        </section>

        <!-- Section 14 - GDPR -->
        <section id="section-14" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">14. European Privacy Rights (GDPR)</h2>
          <p class="text-slate-700 mb-6">If you're in the European Economic Area (EEA), United Kingdom, or Switzerland, you have these rights under GDPR:</p>

          <div class="grid sm:grid-cols-2 gap-4 mb-6">
            <div class="p-4 bg-slate-50 rounded-lg">
              <h4 class="font-semibold text-slate-900 mb-2">Right of Access</h4>
              <p class="text-sm text-slate-700">Request a copy of the personal data we hold about you</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-lg">
              <h4 class="font-semibold text-slate-900 mb-2">Right to Rectification</h4>
              <p class="text-sm text-slate-700">Request correction of inaccurate or incomplete personal data</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-lg">
              <h4 class="font-semibold text-slate-900 mb-2">Right to Erasure</h4>
              <p class="text-sm text-slate-700">Request deletion of your personal data in certain circumstances</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-lg">
              <h4 class="font-semibold text-slate-900 mb-2">Right to Restrict Processing</h4>
              <p class="text-sm text-slate-700">Request limitation on how we process your data</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-lg">
              <h4 class="font-semibold text-slate-900 mb-2">Right to Data Portability</h4>
              <p class="text-sm text-slate-700">Receive your personal data in a structured, machine-readable format</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-lg">
              <h4 class="font-semibold text-slate-900 mb-2">Right to Object</h4>
              <p class="text-sm text-slate-700">Object to processing of your personal data based on legitimate interests</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-lg">
              <h4 class="font-semibold text-slate-900 mb-2">Right to Withdraw Consent</h4>
              <p class="text-sm text-slate-700">Withdraw consent at any time where we rely on consent</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-lg">
              <h4 class="font-semibold text-slate-900 mb-2">Right to Lodge a Complaint</h4>
              <p class="text-sm text-slate-700">File a complaint with your local data protection authority</p>
            </div>
          </div>

          <div class="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl mb-6">
            <h4 class="text-xl font-semibold text-blue-900 mb-3">How to Exercise Your Rights:</h4>
            <ul class="list-disc pl-6 space-y-2 text-blue-800">
              <li>Email: <a href="mailto:privacy@trykindredapp.com" class="text-kindred hover:underline">privacy@trykindredapp.com</a></li>
              <li>Subject line: "GDPR Request"</li>
              <li>Include: Your name, email, country of residence, and specific request</li>
            </ul>
            <p class="mt-3 text-blue-800"><strong>Response Time:</strong> We'll respond within 30 days of your request.</p>
          </div>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">Legal Basis for Processing:</h4>
            <p class="text-slate-700 mb-2">We process your data based on:</p>
            <ul class="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Contract Performance:</strong> To provide Kindred's services</li>
              <li><strong>Legitimate Interests:</strong> To improve our services and prevent fraud</li>
              <li><strong>Consent:</strong> For optional features and marketing communications</li>
              <li><strong>Legal Obligations:</strong> To comply with applicable laws</li>
            </ul>
          </div>
        </section>

        <!-- Section 15 -->
        <section id="section-15" class="mb-12">
          <h2 class="text-3xl font-bold text-slate-900 mb-6">15. Data Breach Notification</h2>
          <p class="text-slate-700 mb-6">In the unlikely event of a data breach that affects your personal information:</p>

          <div class="mb-6">
            <h4 class="text-xl font-semibold text-slate-900 mb-3">We will:</h4>
            <ul class="list-disc pl-6 space-y-2 text-slate-700">
              <li>Investigate the breach immediately</li>
              <li>Notify affected users within 72 hours of discovery (or as required by law)</li>
              <li>Notify relevant authorities as legally required</li>
              <li>Provide clear information about what happened and what data was affected</li>
              <li>Offer guidance on steps you can take to protect yourself</li>
              <li>Take immediate action to secure our systems and prevent future breaches</li>
            </ul>
          </div>

          <div>
            <h4 class="text-xl font-semibold text-slate-900 mb-3">You will receive notification via:</h4>
            <ul class="list-disc pl-6 space-y-2 text-slate-700">
              <li>Email to your registered email address</li>
              <li>In-app notification</li>
              <li>Website notice (for widespread breaches)</li>
            </ul>
          </div>
        </section>

        <!-- Founder's Note -->
        <section class="mb-12 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white">
          <h2 class="text-3xl font-bold mb-4">The Bottom Line (From the Founder)</h2>
          <p class="mb-4 text-slate-200">I built Kindred because I kept losing important relationships and opportunities, not because I wanted to build a data collection machine.</p>
          <p class="mb-4 text-slate-200">Your relationship data is personal and sacred. We protect it like it's our own (because honestly, I use Kindred too and my data is in the same systems as yours).</p>

          <div class="mb-4">
            <p class="font-semibold text-white mb-2">Here's my personal promise:</p>
            <ul class="list-disc pl-6 space-y-1 text-slate-200">
              <li>We'll never sell your data</li>
              <li>We'll never snoop through your notes about people</li>
              <li>We'll use AI to help you, not to exploit your relationships</li>
              <li>We'll be transparent when things change</li>
              <li>We'll fix problems quickly when they arise</li>
            </ul>
          </div>

          <p class="mb-4 text-slate-200">If you have questions, concerns, or just want to chat about privacy - email me directly at <a href="mailto:thinksenpai@gmail.com" class="text-kindred-300 hover:underline">thinksenpai@gmail.com</a>. I read every email.</p>

          <p class="text-slate-300 font-semibold">
            Henry Ikoh<br>
            Founder, Kindred
          </p>
        </section>

        <!-- Footer Info -->
        <div class="text-center text-sm text-slate-500 py-8 border-t border-slate-200">
          <p class="mb-2"><em>This privacy policy was last updated on October 1, 2025 and is effective as of October 1, 2025.</em></p>
          <p><strong>Version 1.0</strong></p>
        </div>
      </div>
    </main>

    <!-- Back to Top Button -->
    <div class="fixed bottom-8 right-8">
      <button
        @click="scrollToTop"
        class="bg-kindred text-white p-4 rounded-full shadow-lg hover:bg-kindred-600 transition-all duration-300 hover:shadow-xl"
        aria-label="Back to top"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import kindredLogo from '@/assets/kindred.svg'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Link styling */
a {
  transition: color 0.2s ease;
}
</style>
