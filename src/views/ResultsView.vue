<template>
  <div class="min-h-screen bg-paper">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="text-center space-y-6">
        <div class="relative">
          <div class="animate-spin rounded-full h-20 w-20 border-b-4 border-kindred mx-auto"></div>

        </div>
        <div>
          <p class="font-display text-xl font-medium text-ink mb-2">Working out your results…</p>
          <p class="text-ink/60">This takes a moment</p>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen px-4">
      <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h2 class="font-display text-2xl font-medium text-ink mb-2">Unable to Load Results</h2>
        <p class="text-ink/60 mb-6">{{ error }}</p>
        <router-link
          to="/assess"
          class="inline-block px-6 py-3 bg-kindred text-white font-semibold rounded-xl hover:bg-kindred-600 transition-all"
        >
          Take Assessment Again
        </router-link>
      </div>
    </div>

    <!-- Results Display -->
    <div v-else-if="results" class="pb-20">
      <!-- Header -->
      <header class="bg-white border-b border-ink/12 sticky top-0 z-50 shadow-sm">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <router-link to="/" class="flex items-center text-ink hover:text-kindred transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span class="font-semibold">Home</span>
          </router-link>
          <button
            @click="shareResults"
            class="flex items-center text-ink/60 hover:text-kindred transition-colors font-medium"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            <span class="hidden sm:inline">Share</span>
          </button>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <!-- Logo -->
        <div class="flex justify-center animate-fade-in">
          <img :src="kindredLogo" alt="Kindred" class="h-16 w-16 sm:h-20 sm:w-20" />
        </div>

        <!-- Hero Section -->
        <div class="mx-auto max-w-3xl space-y-5 text-center animate-fade-in">
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
            <span v-if="results.name">{{ results.name }}'s relationship check</span>
            <span v-else>Your relationship check</span>
          </p>
          <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight text-ink">
            What keeping up with people is actually costing you
          </h1>
          <p class="text-lg leading-relaxed text-ink/65 sm:text-xl">
            Two currencies, in this order: the attention it takes from you, and
            the money it takes from the business. The first one is the reason the
            second one happens.
          </p>
        </div>

        <!-- High Performer Badge (90+) -->
        <div v-if="results.health_score >= 90" class="bg-ink rounded-2xl shadow-xl p-6 text-white text-center animate-fade-in">
          <h2 class="font-display text-3xl font-medium">You are doing this unusually well</h2>
          <p class="text-lg opacity-95 max-w-2xl mx-auto">
            You are keeping your closest relationships genuinely warm — which, given how easily this slips, is harder than it sounds.
          </p>
        </div>

        <!-- Great Performer Badge (75-89) -->
        <div v-else-if="results.health_score >= 75" class="bg-ink rounded-2xl shadow-xl p-6 text-white text-center animate-fade-in">
          <h2 class="font-display text-3xl font-medium">Most of this is in good shape</h2>
          <p class="text-lg opacity-95 max-w-2xl mx-auto">
            Most of your important relationships are in good shape. The gaps below are the ones worth closing first.
          </p>
        </div>

        <!-- Mental load leads. It is the argument people can check against
             their own week, which the dollar figure below is not. Assessments
             taken before this model existed have no mental_load, and we show
             nothing rather than invent a number for them. -->
        <MentalLoadCard v-if="results.mental_load" :load="results.mental_load" />

        <!-- Runs straight off the attention card, before any money. A page that
             leads with revenue implies the people without a deal attached do not
             count, and those are usually the ones that actually slip. Nothing
             here is measured — deliberately the one section with no number. -->
        <div class="rounded-2xl bg-ink p-6 text-paper sm:p-12">
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred-300">
            What the numbers leave out
          </p>
          <h2 class="mt-5 max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight sm:text-4xl">
            The people who never show up in a figure like that
          </h2>

          <div class="mt-8 grid gap-10 lg:grid-cols-2">
            <div class="space-y-5 text-[1.05rem] leading-relaxed text-paper/75">
              <p>
                Below this, we price your relationships by what they return.
                Before we do: your mother does not have a deal value. Neither
                does the friend who sat with you through the bad year, or the
                mentor who took the call when nobody else would.
              </p>
              <p>
                They are in that contact list too. They are also, almost always,
                the ones that go quiet first — because a client chasing you
                creates a deadline and a brother does not.
              </p>
            </div>

            <div class="space-y-5 text-[1.05rem] leading-relaxed text-paper/75">
              <p>
                This is the part we cannot put a number on, and would not want
                to. But it is the part most people are actually thinking about
                when a name arrives at 2am — and it is already counted in the
                attention figure above, because that cost is real whether or not
                anything is riding on it.
              </p>
              <p class="border-l-2 border-kindred pl-6 text-paper">
                Kindred was built for the whole list. The business case below is
                what makes it easy to justify; this is what makes it worth doing.
              </p>
            </div>
          </div>
        </div>


        <!-- Key Metrics Grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Conservative ROI -->
          <div class="bg-ink text-white rounded-2xl shadow-xl p-8">
            <div class="space-y-4">
              <p class="text-sm uppercase tracking-wide opacity-90 font-semibold">
                Annual Opportunity Cost
              </p>
              <div>
                <p class="font-display text-5xl sm:text-6xl font-medium mb-2">
                  {{ formatCurrency(results.conservative_roi) }}
                </p>
                <p class="text-sm opacity-90 leading-relaxed">
                  The same drift, priced. This is what the relationships that
                  went quiet are likely costing the business each year.
                </p>
              </div>
              <div class="pt-4 border-t border-white border-opacity-20 space-y-2">
                <p class="text-sm leading-relaxed opacity-90">
                  Deals that never opened, referrals that went elsewhere, partnerships
                  that cooled — counted at your own deal size.
                </p>
                <p class="text-xs opacity-75">
                  Full potential: {{ formatCurrency(results.calculated_roi) }} (we show conservative 15% estimate)
                </p>
              </div>
            </div>
          </div>

          <!-- Health Score -->
          <div class="rounded-2xl shadow-xl p-8 text-white"
               :class="getHealthScoreGradient(results.health_score)">
            <div class="space-y-4">
              <p class="text-sm uppercase tracking-wide opacity-90 font-semibold">
                Network Health Score
              </p>
              <div>
                <div class="flex items-end gap-2 mb-2">
                  <p class="font-display text-5xl sm:text-6xl font-medium">
                    {{ results.health_score }}
                  </p>
                  <p class="text-2xl opacity-75 pb-1">/100</p>
                </div>
                <p class="text-lg font-semibold mb-2">{{ results.health_level }}</p>
                <p class="text-sm opacity-90 leading-relaxed">
                  {{ getHealthScoreExplanation(results.health_score) }}
                </p>
              </div>
              <div class="pt-4 border-t border-white border-opacity-20">
                <p class="text-sm font-medium">
                  <strong>Where this sits:</strong> {{ getPercentileText(results.health_score) }}
                </p>
                <p class="text-xs opacity-75 mt-2">
                  {{ getHealthScoreAdvice(results.health_score) }}
                </p>
                <p v-if="results.mental_load" class="text-xs opacity-75 mt-2">
                  Holding this together by memory is what the
                  {{ results.mental_load.occupied_units }} units above are being spent on.
                </p>
              </div>
            </div>
          </div>
        </div>

        
        
        <!-- Tier Breakdown Visualization (NEW) -->
        <TierBreakdownCard
          v-if="hasTierBreakdown"
          :tiers="tierBreakdown"
        />

        <!-- ROI Breakdown -->
        <div class="rounded-2xl border border-ink/12 bg-white p-6 sm:p-10">
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
            Where the cost shows up
          </p>
          <h2 class="mt-4 font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
            The same cost, counted in money
          </h2>
          <p class="mt-3 max-w-2xl leading-relaxed text-ink/60">
            Broken down by where the opportunity goes when a relationship goes quiet.
          </p>

          <!-- A ledger, not three alarm-coloured boxes. The severity is carried
               by the numbers and the ember rule, not by red/orange/yellow. -->
          <dl class="mt-8 divide-y divide-ink/10 border-t border-ink/10">
            <div
              v-for="row in costRows"
              :key="row.label"
              class="flex items-baseline justify-between gap-6 border-l-2 py-5 pl-5"
              :class="row.emphasis ? 'border-ember' : 'border-transparent'"
            >
              <div class="min-w-0">
                <dt class="font-medium text-ink">{{ row.label }}</dt>
                <p class="mt-1 text-sm leading-relaxed text-ink/55">{{ row.detail }}</p>
              </div>
              <dd class="shrink-0 font-display text-2xl font-medium text-ink sm:text-3xl">
                {{ formatCurrency(row.value) }}
              </dd>
            </div>
          </dl>

          <!-- Total -->
          <div class="mt-8 flex items-baseline justify-between gap-6 border-t border-ink/15 pt-6">
            <h3 class="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink/50">
              Total, per year
            </h3>
            <p class="font-display text-3xl font-medium text-kindred sm:text-4xl">
              {{ formatCurrency(results.conservative_roi) }}
            </p>
          </div>
        </div>

        <!-- Key Insights - Visual Breakdown -->
        <div class="bg-white rounded-2xl border border-ink/12 p-6 sm:p-8 space-y-8">
          <div>
            <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
              The shape of it
            </p>
            <h2 class="mt-4 font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
              What you are actually holding
            </h2>
          </div>

          <!-- Contact Breakdown. A funnel from everyone you know down to the
               few you actually keep — the narrowing is the point, so the three
               read as one row rather than three unrelated coloured tiles. -->
          <div class="grid divide-y divide-ink/10 border-y border-ink/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div class="px-2 py-6 md:px-6">
              <div class="font-display text-4xl font-medium text-ink">
                {{ formatNumber(results.total_contacts) }}
              </div>
              <div class="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
                Total contacts
              </div>
              <p class="mt-2 text-sm text-ink/55">Everyone you have collected</p>
            </div>

            <div class="px-2 py-6 md:px-6">
              <div class="font-display text-4xl font-medium text-ink">
                {{ formatNumber(getBusinessRelevantContacts()) }}
              </div>
              <div class="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
                Business-relevant
              </div>
              <p class="mt-2 text-sm text-ink/55">
                About {{ getBusinessRelevantPercent() }}% for your role
              </p>
            </div>

            <div class="px-2 py-6 md:px-6">
              <div class="font-display text-4xl font-medium text-kindred">
                {{ results.active_maintained }}
              </div>
              <div class="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
                Actively maintained
              </div>
              <p class="mt-2 text-sm text-ink/55">
                {{ getMaintainedPercent() }}% of the ones that matter
              </p>
            </div>
          </div>

          <!-- Benchmark Comparison -->
          <div class="rounded-2xl border border-ink/12 bg-white p-6 sm:p-10">
            <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
              Where you sit
            </p>
            <h3 class="mt-4 mb-8 font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
              Against the only two numbers worth comparing to
            </h3>
            <!--
              This used to rank people against an "average professional" and a
              "top performer" percentage. We have no population to rank anyone
              against, so those bars were invented. It compares you to the two
              things we can actually defend: the ~150 Dunbar puts within reach
              unaided, and your own modelled capacity with a system.
            -->

            <div class="space-y-6">
              <div v-for="row in sitRows" :key="row.label">
                <div class="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span class="text-ink/75">{{ row.label }}</span>
                  <span class="font-mono text-xs text-ink/45">{{ row.note }}</span>
                </div>
                <div class="h-2 w-full overflow-hidden rounded-full bg-ink/8">
                  <div
                    class="h-full rounded-full transition-all duration-700"
                    :style="{ width: barWidth(row.value), backgroundColor: row.color }"
                  ></div>
                </div>
              </div>
            </div>

            <p class="mt-8 border-l-2 border-ink/15 pl-6 text-sm leading-relaxed text-ink/55">
              {{ results.insights.benchmark_comparison }}
            </p>
          </div>

          <!-- Insights -->
          <div class="rounded-2xl border border-ink/12 bg-white p-6 sm:p-10">
            <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
              Read on your answers
            </p>
            <h2 class="mt-4 mb-8 font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
              What this looks like for you
            </h2>

            <div class="space-y-8">
              <!-- Primary Message -->
              <div class="border-l-2 border-kindred pl-6">
                <div class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
                  Your situation
                </div>
                <p class="mt-3 leading-relaxed text-ink/75">
                  {{ results.insights.primary_message }}
                </p>
              </div>

              <!-- Actionable Advice -->
              <div class="border-l-2 border-ember pl-6">
                <div class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
                  Your action plan
                </div>
                <p class="mt-3 leading-relaxed text-ink/75">
                  {{ results.insights.actionable_advice }}
                </p>
              </div>

              <!-- Benchmark Comparison -->
              <div class="border-l-2 border-ink/20 pl-6">
                <div class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
                  Worth knowing
                </div>
                <p class="mt-3 leading-relaxed text-ink/75">
                  {{ results.insights.benchmark_comparison }}
                </p>
              </div>
            </div>
          </div>

          <!-- Action Items. Numbered rather than emoji-led: this is the part
               someone might actually work through, so it should read as a list
               of moves, in order. -->
          <div class="rounded-2xl border border-ink/12 bg-white p-6 sm:p-8">
            <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
              Three moves
            </p>
            <h3 class="mt-4 font-display text-2xl font-medium tracking-tight text-ink">
              {{ getActionTitle() }}
            </h3>

            <ol class="mt-8 divide-y divide-ink/10 border-t border-ink/10">
              <li
                v-for="(item, index) in getActionItems()"
                :key="index"
                class="flex gap-5 py-5"
              >
                <span class="mt-0.5 font-mono text-sm text-kindred">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <div class="min-w-0">
                  <div class="font-medium text-ink">{{ item.title }}</div>
                  <p class="mt-1.5 text-sm leading-relaxed text-ink/60">{{ item.description }}</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-ink rounded-2xl p-8 sm:p-12 text-paper text-center space-y-6">
          <div class="inline-block px-4 py-2 rounded-full mb-4 border border-white/15">
            <span class="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-kindred-300">Your next step</span>
          </div>

          <h2 class="font-display text-3xl sm:text-4xl font-medium tracking-tight">
            {{ getCtaTitle() }}
          </h2>
          <p class="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            {{ getCtaDescription() }}
          </p>

          <div class="flex justify-center pt-4">
            <a
              href="https://cal.com/trykindredapp/demo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-10 py-5 bg-paper text-ink font-medium text-lg rounded-full hover:bg-white transition-colors"
            >
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Book a 20-minute call
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

          <div class="grid sm:grid-cols-3 gap-4 pt-6 max-w-2xl mx-auto">
            <div class="rounded-xl border border-white/15 p-4">
              <div class="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-kindred-300">Length</div>
              <div class="mt-1.5 text-sm">20 minutes</div>
            </div>
            <div class="rounded-xl border border-white/15 p-4">
              <div class="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-kindred-300">Format</div>
              <div class="mt-1.5 text-sm">We walk your results</div>
            </div>
            <div class="rounded-xl border border-white/15 p-4">
              <div class="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-kindred-300">Commitment</div>
              <div class="mt-1.5 text-sm">None</div>
            </div>
          </div>

          <p class="text-sm opacity-75 pt-4">
            Or start on the free plan and skip the call entirely.
          </p>
        </div>

        <!-- Share Encouragement -->
        <div class="bg-ink/[0.04] border border-ink/15 rounded-xl p-6 text-center">
          <p class="text-ink/75 mb-4">
            Know someone who could benefit from this assessment?
          </p>
          <button
            @click="shareResults"
            class="inline-flex items-center px-6 py-3 bg-ink text-paper font-medium rounded-full hover:bg-dusk transition-all"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            Share This Assessment
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getAssessmentResults } from '@/services/assessmentApi'
import { formatCurrency, getPercentileText, formatNumber } from '@/utils/formatters'
import kindredLogo from '@/assets/kindred.svg'
import TierBreakdownCard from '@/components/results/TierBreakdownCard.vue'
import MentalLoadCard from '@/components/results/MentalLoadCard.vue'

const route = useRoute()

// State
const loading = ref(true)
const error = ref(null)
const results = ref(null)

// Computed properties for new tier-based components
const hasTierBreakdown = computed(() => {
  return results.value?.breakdown?.tier_breakdown && results.value.breakdown.tier_breakdown.length > 0
})

const tierBreakdown = computed(() => {
  return results.value?.breakdown?.tier_breakdown || []
})



const totalCapacity = computed(() => {
  if (!hasTierBreakdown.value) return getRoleMaintenanceCap()
  return tierBreakdown.value.reduce((sum, tier) => sum + tier.target_count, 0)
})


// Helper functions for calculations
const getBusinessRelevantPercent = () => {
  if (!results.value) return 0
  const role = results.value.role
  if (role === 'vp-sales' || role === 'business-development') return 30
  if (role === 'founder') return 40
  if (role === 'vc-investor') return 45
  if (role === 'real-estate') return 50
  if (role === 'lawyer') return 35
  if (role === 'consultant') return 35
  if (role === 'recruiter') return 35
  return 30
}

const getBusinessRelevantContacts = () => {
  if (!results.value) return 0
  return Math.round(results.value.total_contacts * (getBusinessRelevantPercent() / 100))
}

const getMaintainedPercent = () => {
  if (!results.value) return 0
  const businessContacts = getBusinessRelevantContacts()
  if (businessContacts === 0) return 0
  return Math.round((results.value.active_maintained / businessContacts) * 100)
}

const getTopPerformerPercent = () => {
  if (!results.value) return 25
  const role = results.value.role
  if (role === 'vp-sales' || role === 'business-development') return 25 // Top sales leaders maintain 20-30%
  if (role === 'founder') return 30 // Top founders maintain 25-35%
  if (role === 'vc-investor') return 35 // Top VCs maintain 30-40%
  if (role === 'real-estate') return 30 // Top agents maintain 25-35%
  if (role === 'lawyer') return 32 // Top partners maintain 28-35%
  if (role === 'consultant') return 35 // Top consultants maintain 30-40%
  if (role === 'recruiter') return 30
  return 25
}

const getOptimalContacts = () => {
  if (!results.value) return 0

  // NEW: Show full tier-based capacity (all 5 tiers)
  if (hasTierBreakdown.value) {
    return totalCapacity.value
  }

  // FALLBACK: Old linear calculation for backward compatibility
  const businessContacts = getBusinessRelevantContacts()
  const targetPercent = (getTopPerformerPercent() + 15) / 2
  const calculated = Math.round(businessContacts * (targetPercent / 100))
  const cap = getRoleMaintenanceCap()
  return Math.min(calculated, cap)
}


const getGapContacts = () => {
  if (!results.value) return 0
  const optimal = getOptimalContacts()
  const current = results.value.active_maintained

  // Gap to reach full capacity
  const gap = optimal - current
  return gap > 0 ? gap : 0
}

// The money breakdown as data rather than three hand-built coloured panels.
const costRows = computed(() => {
  if (!results.value) return []
  const b = results.value.breakdown
  return [
    {
      label: 'Missed pipeline',
      detail: `${b.missed_deals} opportunities that never started, from relationships that went quiet`,
      value: b.missed_pipeline,
      emphasis: true,
    },
    {
      label: 'Lost referrals',
      detail: 'Introductions that do not happen because you are no longer front of mind',
      value: b.lost_referrals,
      emphasis: false,
    },
    {
      label: 'Cold partnerships',
      detail: 'Strategic relationships that have cooled past the point of an easy ask',
      value: b.cold_partnerships,
      emphasis: false,
    },
  ]
})


// The three comparison bars. This used to rank people against an "average
// professional" and a "top performer" percentage — both invented, since we have
// no population to rank anyone against. These are the two we can defend: the
// ~150 Dunbar puts within reach unaided, and their own modelled capacity.
const sitRows = computed(() => {
  if (!results.value) return []
  return [
    {
      label: 'You maintain now',
      note: `${results.value.active_maintained} relationships`,
      value: results.value.active_maintained,
      color: '#F2A65A',
    },
    {
      label: 'Within reach unaided',
      note: "~150 · Dunbar's number",
      value: 150,
      color: 'rgba(23,18,31,0.35)',
    },
    {
      label: 'With a system carrying the tracking',
      note: `${getOptimalContacts()} relationships`,
      value: getOptimalContacts(),
      color: '#7868E6',
    },
  ]
})

// Scales the comparison bars against whichever of the three is largest, so the
// widths stay honest relative to each other rather than to a fixed 100%.
const barWidth = (value) => {
  if (!results.value) return '0%'
  const max = Math.max(results.value.active_maintained, 150, getOptimalContacts(), 1)
  return `${Math.round((value / max) * 100)}%`
}

const getRoleMaintenanceCap = () => {
  if (!results.value) return 180
  const role = results.value.role
  const caps = {
    'vp-sales': 200,
    'founder': 250,
    'vc-investor': 220,
    'real-estate': 220,
    'lawyer': 180,
    'consultant': 200,
    'business-development': 180,
    'recruiter': 180,
    'other': 150
  }
  return caps[role] || 180
}


// Dynamic messaging based on score
// Reclaimed attention, when we have it — it is the number people actually
// respond to, and it is the one that covers family as well as clients.
const reclaimed = () => results.value?.mental_load?.reclaimed_units || 0

const getCtaTitle = () => {
  if (!results.value) return 'Stop carrying this in your head'
  const score = results.value.health_score
  if (score >= 90) return 'You are doing this well. It should not cost you this much.'
  if (score >= 75) return 'You are close. The gap is upkeep, not effort.'
  if (score >= 60) return 'The foundation is there. The system is not.'
  return 'Stop carrying this in your head'
}

const getCtaDescription = () => {
  const units = reclaimed()
  const back = units > 0
    ? ` On your answers, that is about ${units} units of attention back.`
    : ''

  if (!results.value) {
    return 'Kindred keeps the cadence so you do not have to remember it.' + back
  }
  const score = results.value.health_score
  if (score >= 90) {
    return 'You already keep these relationships warm — by holding it all yourself. Kindred takes over the remembering so the same warmth costs you less.' + back
  }
  if (score >= 75) {
    return 'Most of your relationships are in good shape. Kindred watches the rest, so the ones drifting reach you before they are gone.' + back
  }
  if (score >= 60) {
    return 'You have the relationships. What is missing is anything catching them when they go quiet — which is the part a system is genuinely better at than a person.' + back
  }
  return 'Kindred keeps the cadence so you do not have to remember it — for clients, and for the people no deal depends on.' + back
}

const getActionTitle = () => {
  if (!results.value) return 'Where to start'
  const score = results.value.health_score
  if (score >= 90) return 'Keep it going without carrying it'
  if (score >= 75) return 'Close the last gaps'
  if (score >= 60) return 'Turn the foundation into a system'
  return 'Where to start'
}

const getActionItems = () => {
  if (!results.value) return []
  const score = results.value.health_score
  const gap = getGapContacts()

  // Step two is deliberately the same at every score: whatever the business
  // case says, the people without a deal attached are the ones that actually
  // go quiet, and no ROI figure will ever prompt anyone to call them.
  const personalStep = {
    title: 'Write down five people no deal depends on',
    description:
      'Family, old friends, the mentor who took your call. They are the ones with nothing forcing the issue, so they slip first and quietest. Put them in the same system as everyone else.',
  }

  const systemStep = {
    title: 'Hand the remembering over',
    description:
      'Set a cadence per person and let it run. This is the part that frees the attention — not tracking harder, but not having to track at all.',
  }

  if (score >= 90) {
    return [
      {
        title: 'Keep the top tier exactly as it is',
        description:
          results.value.insights.actionable_advice ||
          'You are already keeping these warm. The problem is not the outcome, it is what it costs you to get it.',
      },
      personalStep,
      systemStep,
    ]
  }

  if (score >= 75) {
    return [
      {
        title: 'Put the top tier on a cadence',
        description:
          results.value.insights.actionable_advice ||
          'Find the ten or fifteen most likely to slip in the next six months. They are rarely the ones you are worried about.',
      },
      personalStep,
      systemStep,
    ]
  }

  if (score >= 60) {
    return [
      {
        title: 'Start where the value is concentrated',
        description:
          results.value.insights.actionable_advice ||
          `You have the relationships — about ${gap} have gone cold. Reopening one is far cheaper than finding a new one.`,
      },
      personalStep,
      systemStep,
    ]
  }

  return [
    {
      title: 'Start where the value is concentrated',
      description:
        results.value.insights.actionable_advice ||
        'Not a campaign. A handful of messages. The bar is lower than the guilt suggests.',
    },
    personalStep,
    systemStep,
  ]
}


// Methods
const fetchResults = async () => {
  const assessmentId = route.params.id

  if (!assessmentId) {
    error.value = 'No assessment ID provided'
    loading.value = false
    return
  }

  try {
    loading.value = true
    const data = await getAssessmentResults(assessmentId)
    results.value = data
  } catch (err) {
    error.value = err.message
    console.error('Failed to fetch results:', err)
  } finally {
    loading.value = false
  }
}

const shareResults = async () => {
  const shareData = {
    title: 'My Relationship ROI Assessment',
    text: `I just discovered I'm leaving $${Math.round(results.value.conservative_roi / 1000)}K on the table from neglected relationships! Calculate yours:`,
    url: 'https://kindred.app/assess'
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      // Fallback: Copy to clipboard
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`)
      alert('Link copied to clipboard!')
    }
  } catch (err) {
    console.error('Share failed:', err)
  }
}

// Helper functions for better context
const getHealthScoreGradient = (score) => {
  if (score >= 90) return 'bg-ink'
  if (score >= 70) return 'bg-ink'
  if (score >= 50) return 'bg-ink'
  if (score >= 30) return 'bg-ink'
  return 'bg-ink'
}

const getHealthScoreExplanation = (score) => {
  if (score >= 90) {
    return 'Outstanding. You actively maintain strong relationships across your network, which is genuinely uncommon'
  }
  if (score >= 75) {
    return 'Excellent! You maintain relationships much better than most professionals—you\'re doing great'
  }
  if (score >= 60) {
    return 'Good work! You maintain solid relationships but have room to reach the top tier'
  }
  if (score >= 40) {
    return 'Average. You maintain some relationships but have significant room for improvement'
  }
  if (score >= 25) {
    return 'Below average. Many valuable relationships are going cold and opportunities are being missed'
  }
  return 'Critical. Your network is severely neglected and significant opportunities are being lost'
}

const getHealthScoreAdvice = (score) => {
  if (score >= 90) {
    return 'You\'re a networking superstar—keep up the amazing work! 🌟'
  }
  if (score >= 75) {
    return 'You\'re doing fantastic! A small amount of structure would close the remaining gaps'
  }
  if (score >= 60) {
    return 'You\'re on the right track! Maintaining 15-20 more relationships could boost you to the top tier'
  }
  if (score >= 40) {
    return 'Reaching out to 20-30 more contacts regularly could significantly boost your score and ROI'
  }
  if (score >= 25) {
    return 'Urgent: Reconnect with your top 10-15 most valuable contacts this week'
  }
  return 'Critical action needed: Your network needs immediate attention to prevent further opportunity loss'
}

// Lifecycle
onMounted(() => {
  fetchResults()
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
</style>
