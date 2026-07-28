<template>
  <div class="min-h-screen bg-paper font-sans text-ink antialiased">
    <SiteNav />

    <header class="border-b border-ink/10 px-5 py-14 sm:px-8 sm:py-20">
      <div class="mx-auto max-w-3xl">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
          Legal
        </p>
        <h1 class="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
          Terms of Use
        </h1>
        <p class="mt-5 font-mono text-xs text-ink/45">
          Last updated {{ updated }} · Effective {{ updated }}
        </p>
      </div>
    </header>

    <main class="px-5 py-14 sm:px-8 sm:py-16">
      <div class="mx-auto max-w-3xl">
        <!-- Plain-English summary first, same as the privacy policy -->
        <section class="rounded-2xl border border-kindred/30 bg-kindred/[0.06] p-7 sm:p-9">
          <h2 class="font-display text-2xl font-medium">The short version</h2>
          <p class="mt-3 text-ink/75">
            Nobody reads terms of use. Here is what these actually say:
          </p>
          <ul class="mt-6 space-y-3">
            <li v-for="point in summary" :key="point" class="flex gap-3 text-ink/75">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-kindred" aria-hidden="true"></span>
              <span>{{ point }}</span>
            </li>
          </ul>
          <p class="mt-6 text-ink/70">The full terms are below.</p>
        </section>

        <!-- Contents -->
        <nav class="mt-12 rounded-2xl border border-ink/10 p-6 sm:p-7" aria-label="Contents">
          <h2 class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink/45">
            Contents
          </h2>
          <ol class="mt-4 grid gap-2 sm:grid-cols-2">
            <li v-for="(s, i) in sections" :key="s.id">
              <a
                :href="`#${s.id}`"
                class="text-sm text-ink/70 transition-colors hover:text-kindred"
              >
                {{ i + 1 }}. {{ s.title }}
              </a>
            </li>
          </ol>
        </nav>

        <!-- Terms -->
        <section
          v-for="(s, i) in sections"
          :id="s.id"
          :key="s.id"
          class="mt-14 scroll-mt-24"
        >
          <h2 class="font-display text-2xl font-medium leading-snug">
            {{ i + 1 }}. {{ s.title }}
          </h2>
          <div class="mt-4 space-y-4">
            <p v-for="(p, j) in s.body" :key="j" class="leading-relaxed text-ink/75">
              {{ p }}
            </p>
          </div>
          <ul v-if="s.list" class="mt-4 space-y-2.5">
            <li v-for="item in s.list" :key="item" class="flex gap-3 text-ink/75">
              <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden="true"></span>
              <span class="leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </section>

        <section class="mt-16 rounded-2xl border border-ink/10 bg-white p-7 sm:p-8">
          <h2 class="font-display text-xl font-medium">Questions about these terms</h2>
          <p class="mt-3 leading-relaxed text-ink/70">
            Email
            <a
              href="mailto:trykindredapp@gmail.com"
              class="text-kindred underline underline-offset-4"
            >trykindredapp@gmail.com</a>
            and a person will answer. If something here is unclear or seems
            unfair, we would rather hear it than have you agree to it uneasily.
          </p>
          <router-link
            to="/privacy"
            class="mt-6 inline-block text-sm text-ink/60 transition-colors hover:text-kindred"
          >
            Read the Privacy Policy →
          </router-link>
        </section>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { watchEffect } from 'vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const updated = '28 July 2026'

watchEffect(() => {
  document.title = 'Terms of Use — Kindred'
})

const summary = [
  'Use Kindred for your own relationships. Do not use it to harvest, scrape or spam people.',
  'Your data stays yours. You can export it or delete it whenever you want.',
  'Paid plans renew until you cancel, and you cancel through the app store you bought them from.',
  'Kindred reminds you about people — it does not guarantee outcomes, and it is not a substitute for actually calling them.',
  'If we ever need to change these terms materially, we will tell you before they take effect.',
]

const sections = [
  {
    id: 'acceptance',
    title: 'Accepting these terms',
    body: [
      'By creating a Kindred account or using the app, you agree to these terms. If you do not agree with them, please do not use Kindred.',
      'You need to be at least 16 years old to use Kindred. If you are using it on behalf of an organisation, you confirm you are authorised to accept these terms for that organisation.',
    ],
  },
  {
    id: 'account',
    title: 'Your account',
    body: [
      'You are responsible for keeping your login credentials secure and for activity that happens under your account. Tell us promptly if you believe someone else has accessed it.',
      'Provide accurate information when you sign up, and keep it current so we can reach you about things that matter, like a security issue or a change to these terms.',
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: [
      'Kindred exists to help you maintain your own relationships. Some uses are not acceptable, and we will suspend accounts that engage in them:',
    ],
    list: [
      'Scraping, harvesting or bulk-collecting contact information about people you do not have a relationship with',
      'Using Kindred to send unsolicited bulk messages, or to support any spam or cold-outreach operation',
      'Uploading data you do not have the right to hold, or that breaches another agreement you are under',
      'Attempting to breach, probe or overload our systems, or to access another user’s data',
      'Reselling or redistributing access to Kindred without our written agreement',
    ],
  },
  {
    id: 'your-content',
    title: 'Your content',
    body: [
      'The contacts, notes, interactions and other information you put into Kindred are yours. You keep all rights to them.',
      'You grant us the limited permission needed to actually operate the service — storing your data, backing it up, transmitting it between your devices and our servers, and processing it to produce the features you asked for, such as reminders and relationship insights.',
      'That permission exists only to run Kindred for you. It does not let us sell your data, use it to advertise to you, or share it with anyone else. The Privacy Policy sets out precisely what we do with it.',
      'You are responsible for the information you record about other people. Record it as you would expect someone to record it about you.',
    ],
  },
  {
    id: 'subscriptions',
    title: 'Plans, billing and cancellation',
    body: [
      'Kindred has a free plan and paid plans. Paid plans are billed in advance and renew automatically until you cancel.',
      'Where you bought your subscription through an app store, that store handles billing, renewals, cancellations and refunds under its own terms. Cancelling there stops future charges; it does not retroactively refund the current period unless the store’s policy says otherwise.',
      'We may change prices for future billing periods. If we do, we will give you notice before the change applies to you, and you can cancel before it takes effect.',
      'If a payment fails or a subscription lapses, your account moves to the free plan. Your data is not deleted because you stopped paying.',
    ],
  },
  {
    id: 'availability',
    title: 'Availability and changes to the service',
    body: [
      'We work to keep Kindred running, but we do not promise uninterrupted or error-free service. Maintenance, outages and third-party failures happen.',
      'We may add, change or remove features over time. If we remove something you depend on, we will give reasonable notice where we can, and you will always be able to export your data.',
    ],
  },
  {
    id: 'no-guarantees',
    title: 'What Kindred does and does not promise',
    body: [
      'Kindred surfaces the people you may want to contact and gives you context to do it well. It does not promise any particular outcome — not a deal, not a job, not a repaired friendship. Those depend on you and on the other person.',
      'Relationship insights, strength scores and suggested cadences are estimates produced from the data you enter. Treat them as prompts for your own judgement, not as facts.',
      'Kindred is not a substitute for professional advice of any kind, and it is not an emergency service.',
    ],
  },
  {
    id: 'termination',
    title: 'Ending your use of Kindred',
    body: [
      'You can stop using Kindred and delete your account at any time from within the app. Deleting your account deletes your data as described in the Privacy Policy.',
      'We may suspend or close an account that breaches these terms, particularly the acceptable use section. Where circumstances allow, we will explain why and give you a chance to export your data first.',
    ],
  },
  {
    id: 'liability',
    title: 'Liability',
    body: [
      'To the fullest extent the law allows, Kindred is provided as-is, and we are not liable for indirect or consequential losses — including lost profits, lost opportunities or lost business relationships — arising from your use of the service.',
      'Where liability cannot be excluded, it is limited to the amount you paid us in the twelve months before the claim arose.',
      'Nothing in these terms limits liability for fraud, or for anything else that cannot lawfully be limited. Some jurisdictions do not allow certain exclusions, so parts of this section may not apply to you.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: [
      'We may update these terms as Kindred changes. For minor corrections we will update the date at the top of this page. For material changes we will notify you in the app or by email before they take effect.',
      'Continuing to use Kindred after a change takes effect means you accept the updated terms. If you do not accept them, you can export your data and close your account.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    body: [
      'These terms are between you and Kindred. For any question about them, including which law applies to your account, email trykindredapp@gmail.com and we will answer.',
    ],
  },
]
</script>
