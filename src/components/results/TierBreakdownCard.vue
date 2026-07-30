<template>
  <div class="rounded-2xl border border-ink/12 bg-white p-6 sm:p-10">
    <!-- Header -->
    <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
      Your optimal portfolio
    </p>
    <h3 class="mt-4 font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
      Not all {{ totalCapacity }} are worth the same
    </h3>
    <p class="mt-3 max-w-2xl leading-relaxed text-ink/60">
      A relationship portfolio is weighted. These tiers are modelled for your
      role — the top two carry most of the value.
    </p>

    <!-- Tier rows -->
    <div class="mt-8 divide-y divide-ink/10 border-t border-ink/10">
      <div v-for="(tier, index) in sortedTiers" :key="index" class="py-5">
        <div class="flex items-baseline justify-between gap-4">
          <div class="flex min-w-0 items-baseline gap-2.5">
            <span
              class="h-2.5 w-2.5 shrink-0 translate-y-[-1px] rounded-full"
              :style="{ backgroundColor: tierColor(tier.priority) }"
              aria-hidden="true"
            ></span>
            <h4 class="truncate font-medium text-ink">{{ tier.name }}</h4>
            <span class="shrink-0 font-mono text-xs text-ink/45">
              {{ tier.target_count }}
            </span>
          </div>
          <div class="shrink-0 font-display text-lg font-medium text-ink sm:text-xl">
            {{ formatCurrency(tier.total_value, true) }}
          </div>
        </div>

        <!-- Bar. The label sits outside the fill so it can never be clipped by
             a narrow tier — that was breaking the layout on mobile. -->
        <div class="mt-3 flex items-center gap-3">
          <div class="h-2 flex-1 overflow-hidden rounded-full bg-ink/8">
            <div
              class="h-full rounded-full transition-all duration-700 ease-out"
              :style="{
                width: `${tier.percentage}%`,
                backgroundColor: tierColor(tier.priority),
              }"
            ></div>
          </div>
          <span class="w-24 shrink-0 text-right font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink/45">
            {{ Math.round(tier.percentage) }}% · {{ tier.value_multiplier }}×
          </span>
        </div>

        <p class="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink/55">
          {{ tier.description }}
        </p>
      </div>
    </div>

    <!-- Total -->
    <div class="mt-8 flex items-baseline justify-between gap-6 border-t border-ink/15 pt-6">
      <span class="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink/50">
        Total, over 3–5 years
      </span>
      <span class="font-display text-3xl font-medium text-kindred">
        {{ formatCurrency(totalNetworkValue) }}
      </span>
    </div>

    <p class="mt-6 border-l-2 border-ink/15 pl-6 text-sm leading-relaxed text-ink/55">
      The multiplier is the compounding effect — referrals and introductions a
      relationship generates beyond its own direct value. It is a modelling
      assumption for your role, not a measured rate.
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { formatCurrency } from '@/utils/formatters'

const props = defineProps({
  tiers: {
    type: Array,
    required: true,
    // Array of tier objects from API
  }
})

// Priority reads as depth of the brand purple rather than a traffic-light
// scale — nothing here is an error state.
const TIER_COLORS = {
  critical: '#5B47A8',
  high: '#7868E6',
  medium: '#A78BFA',
  low: '#8A8FA3',
}

const tierColor = (priority) => TIER_COLORS[priority] || TIER_COLORS.low

const sortedTiers = computed(() => {
  // Sort by priority: critical > high > medium > low.
  // `?? 4`, not `|| 4` — critical maps to 0, and `0 || 4` is 4, which sorted
  // the most valuable tier to the bottom.
  const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 }
  return [...props.tiers].sort((a, b) => {
    return (priorityOrder[a.priority] ?? 4) - (priorityOrder[b.priority] ?? 4)
  })
})

const totalCapacity = computed(() => {
  return props.tiers.reduce((sum, tier) => sum + tier.target_count, 0)
})

const totalNetworkValue = computed(() => {
  return props.tiers.reduce((sum, tier) => sum + tier.total_value, 0)
})
</script>
