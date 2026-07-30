<template>
  <div class="rounded-2xl border border-ink/12 bg-white p-6 sm:p-10">
    <!-- Header -->
    <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
      Your strategic focus
    </p>
    <h3 class="mt-4 font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
      {{ totalTopTierCount }} relationships carry {{ topTierPercent }}% of the value
    </h3>
    <p class="mt-3 max-w-2xl leading-relaxed text-ink/60">
      That is {{ topTierPercentOfPortfolio }}% of your portfolio doing most of the
      work. If you only ever fix one thing, fix these.
    </p>

    <!-- The two tiers that matter -->
    <div class="mt-8 grid divide-y divide-ink/10 border-y border-ink/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
      <div v-if="vipTier" class="px-1 py-6 sm:pr-8 sm:pl-0">
        <div class="font-display text-4xl font-medium text-ink">
          {{ vipTier.target_count }}
        </div>
        <div class="mt-2 font-medium text-ink">{{ vipTier.name }}</div>
        <p class="mt-2 text-sm leading-relaxed text-ink/55">{{ vipTier.description }}</p>
        <div class="mt-4 flex items-baseline gap-2 border-t border-ink/10 pt-4">
          <span class="font-display text-xl font-medium text-kindred">
            {{ formatCurrency(vipTier.total_value) }}
          </span>
          <span class="font-mono text-xs text-ink/45">{{ vipTier.value_multiplier }}×</span>
        </div>
      </div>

      <div v-if="partnerTier" class="px-1 py-6 sm:pl-8 sm:pr-0">
        <div class="font-display text-4xl font-medium text-ink">
          {{ partnerTier.target_count }}
        </div>
        <div class="mt-2 font-medium text-ink">{{ partnerTier.name }}</div>
        <p class="mt-2 text-sm leading-relaxed text-ink/55">{{ partnerTier.description }}</p>
        <div class="mt-4 flex items-baseline gap-2 border-t border-ink/10 pt-4">
          <span class="font-display text-xl font-medium text-kindred">
            {{ formatCurrency(partnerTier.total_value) }}
          </span>
          <span class="font-mono text-xs text-ink/45">{{ partnerTier.value_multiplier }}×</span>
        </div>
      </div>
    </div>

    <!-- Action plan -->
    <div class="mt-10">
      <p class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
        In what order
      </p>
      <ol class="mt-5 divide-y divide-ink/10 border-t border-ink/10">
        <li v-for="(step, i) in steps" :key="i" class="flex gap-5 py-5">
          <span class="mt-0.5 font-mono text-sm text-kindred">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <div class="min-w-0">
            <div class="font-medium text-ink">{{ step.title }}</div>
            <p class="mt-1.5 text-sm leading-relaxed text-ink/60">{{ step.body }}</p>
          </div>
        </li>
      </ol>
    </div>

    <!-- Bottom stat -->
    <div class="mt-8 grid gap-6 border-t border-ink/15 pt-6 sm:grid-cols-2">
      <div>
        <p class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
          Value per strategic relationship
        </p>
        <p class="mt-2 font-display text-2xl font-medium text-ink">
          {{ formatCurrency(valuePerStrategicRelationship) }}
        </p>
      </div>
      <div>
        <p class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
          Against a general contact
        </p>
        <p class="mt-2 font-display text-2xl font-medium text-kindred">
          {{ strategicMultiplier }}×
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { formatCurrency } from '@/utils/formatters'

const props = defineProps({
  tiers: {
    type: Array,
    required: true,
    // Array of tier breakdown objects from API
  },
  year1Impact: {
    type: Number,
    required: true,
    // conservative_roi from API
  },
  totalCapacity: {
    type: Number,
    default: 180
  }
})

// Find the VIP and Strategic Partner tiers (usually first 2)
const vipTier = computed(() => {
  return props.tiers.find(t => t.priority === 'critical') || props.tiers[0]
})

const partnerTier = computed(() => {
  // Find the tier with highest multiplier after VIP, or second tier
  const nonVipTiers = props.tiers.filter(t => t.priority !== 'critical')
  return nonVipTiers.sort((a, b) => b.value_multiplier - a.value_multiplier)[0] || props.tiers[1]
})

const totalTopTierCount = computed(() => {
  return (vipTier.value?.target_count || 0) + (partnerTier.value?.target_count || 0)
})

const topTierValue = computed(() => {
  return (vipTier.value?.total_value || 0) + (partnerTier.value?.total_value || 0)
})

const topTierPercent = computed(() => {
  const totalValue = props.tiers.reduce((sum, tier) => sum + tier.total_value, 0)
  if (totalValue === 0) return 0
  return Math.round((topTierValue.value / totalValue) * 100)
})

const topTierPercentOfPortfolio = computed(() => {
  if (props.totalCapacity === 0) return 0
  return Math.round((totalTopTierCount.value / props.totalCapacity) * 100)
})

const valuePerStrategicRelationship = computed(() => {
  if (totalTopTierCount.value === 0) return 0
  return Math.round(topTierValue.value / totalTopTierCount.value)
})

const strategicMultiplier = computed(() => {
  // Compare to general network tier (usually last tier)
  const generalTier = props.tiers[props.tiers.length - 1]
  if (!generalTier || generalTier.target_count === 0) return 0

  const generalValue = generalTier.total_value / generalTier.target_count
  if (generalValue === 0) return 0

  return (valuePerStrategicRelationship.value / generalValue).toFixed(1)
})

const steps = computed(() => [
  {
    title: 'Name your VIPs',
    body: `Start with ${Math.round((vipTier.value?.target_count || 20) * 0.5)}–${Math.round((vipTier.value?.target_count || 20) * 0.75)} people who can genuinely change what happens next. Not the biggest names — the ones who would take your call.`,
  },
  {
    title: 'Then the connectors',
    body: `${Math.round((partnerTier.value?.target_count || 30) * 0.5)}–${Math.round((partnerTier.value?.target_count || 30) * 0.75)} people whose networks are worth more to you than their own business. These compound hardest.`,
  },
  {
    title: 'Then let it run',
    body: `Year one is about ${formatCurrency(props.year1Impact)}. The rest arrives later, from referrals you cannot schedule — which is exactly why the cadence has to hold without you remembering it.`,
  },
])
</script>
