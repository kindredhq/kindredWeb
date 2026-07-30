<template>
  <div class="overflow-hidden rounded-2xl border border-ink/12 bg-white">
    <!-- Header -->
    <div class="border-b border-ink/10 p-6 sm:p-10">
      <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
        Your timeline
      </p>
      <h3 class="mt-4 font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
        Relationships pay back slowly, then all at once
      </h3>
      <p class="mt-3 max-w-2xl leading-relaxed text-ink/60">
        The first year is what a system realistically returns. The rest is what
        compounds once the relationships are actually being kept.
      </p>
    </div>

    <!-- Comparison -->
    <div class="grid divide-y divide-ink/10 md:grid-cols-2 md:divide-x md:divide-y-0">
      <!-- Year 1 -->
      <div class="p-6 sm:p-10">
        <div class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
          Year one · conservative {{ conservativePercent }}%
        </div>
        <div class="mt-4 font-display text-4xl font-medium text-ink sm:text-5xl">
          {{ formatCurrency(year1Value) }}
        </div>
        <div class="mt-2 font-mono text-sm text-ink/50">
          {{ formatCurrency(Math.round(year1Value / 12)) }} a month
        </div>

        <ul class="mt-7 space-y-3">
          <li v-for="point in year1Points" :key="point" class="flex gap-3">
            <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden="true"></span>
            <span class="text-sm leading-relaxed text-ink/65">{{ point }}</span>
          </li>
        </ul>
      </div>

      <!-- Years 3-5 -->
      <div class="bg-paper p-6 sm:p-10">
        <div class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-kindred">
          Years three to five · at maturity
        </div>
        <div class="mt-4 font-display text-4xl font-medium text-kindred sm:text-5xl">
          {{ formatCurrency(fullPotential) }}
        </div>
        <div class="mt-2 font-mono text-sm text-ink/50">
          {{ growthMultiplier }}× year one
        </div>

        <ul class="mt-7 space-y-3">
          <li v-for="point in maturityPoints" :key="point" class="flex gap-3">
            <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-kindred" aria-hidden="true"></span>
            <span class="text-sm leading-relaxed text-ink/65">{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer -->
    <div class="border-t border-ink/10 p-6 sm:px-10">
      <p class="border-l-2 border-kindred pl-6 leading-relaxed text-ink/70">
        Your top {{ topTierCount }} relationships account for
        {{ formatCurrency(topTierValue) }} of that —
        <span class="text-ink">{{ topTierPercent }}% of the total</span>. That is
        where a system earns its keep.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { formatCurrency } from '@/utils/formatters'

const props = defineProps({
  year1Value: {
    type: Number,
    required: true,
    // conservative_roi from API
  },
  fullPotential: {
    type: Number,
    required: true,
    // calculated_roi from API (3-5 year value)
  },
  conservativePercent: {
    type: Number,
    default: 15
  },
  topTierCount: {
    type: Number,
    default: 45,
    // Sum of VIPs + Strategic Partners
  },
  topTierValue: {
    type: Number,
    default: 0,
    // Sum of top 2 tiers' total_value
  }
})

const year1Points = computed(() => [
  `Getting a cadence going with your top ${props.topTierCount} relationships`,
  'Reopening the ones that have gone quiet but are not gone',
  'The first referrals that would not have happened otherwise',
])

const maturityPoints = [
  'Referrals arriving from people you have kept warm for years',
  'Repeat business from clients who never had a reason to drift',
  'Introductions two steps out, from relationships you did not have to chase',
]

const growthMultiplier = computed(() => {
  if (props.year1Value === 0) return 0
  return (props.fullPotential / props.year1Value).toFixed(1)
})

const topTierPercent = computed(() => {
  if (props.fullPotential === 0) return 0
  return Math.round((props.topTierValue / props.fullPotential) * 100)
})
</script>
