<template>
  <div class="bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-6 sm:p-8 space-y-6 animate-slide-up">
    <!-- Header -->
    <div class="text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full mb-4">
        <span class="text-4xl">🎯</span>
      </div>
      <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        Your Strategic Focus
      </h3>
      <p class="text-slate-600 text-sm sm:text-base">
        Where to focus for maximum ROI
      </p>
    </div>

    <!-- Top Tiers Highlight -->
    <div class="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 space-y-4 border-2 border-slate-200">
      <div class="text-center mb-4">
        <div class="text-5xl font-bold text-slate-900 mb-2">{{ totalTopTierCount }}</div>
        <div class="text-sm text-slate-600 font-medium">strategic relationships</div>
      </div>

      <!-- Two Top Tiers -->
      <div class="grid sm:grid-cols-2 gap-4">
        <!-- VIP Tier -->
        <div
          v-if="vipTier"
          class="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-4 text-center transform hover:scale-105 transition-transform shadow-lg"
        >
          <div class="text-3xl font-bold mb-1">{{ vipTier.target_count }}</div>
          <div class="text-sm font-medium opacity-90 mb-2">{{ vipTier.name }}</div>
          <div class="text-xs opacity-75 mb-2">{{ vipTier.description }}</div>
          <div class="pt-2 border-t border-white border-opacity-30">
            <div class="text-lg font-bold">{{ formatCurrency(vipTier.total_value) }}</div>
            <div class="text-xs opacity-75">{{ vipTier.value_multiplier }}x value</div>
          </div>
        </div>

        <!-- Strategic Partner Tier -->
        <div
          v-if="partnerTier"
          class="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg p-4 text-center transform hover:scale-105 transition-transform shadow-lg"
        >
          <div class="text-3xl font-bold mb-1">{{ partnerTier.target_count }}</div>
          <div class="text-sm font-medium opacity-90 mb-2">{{ partnerTier.name }}</div>
          <div class="text-xs opacity-75 mb-2">{{ partnerTier.description }}</div>
          <div class="pt-2 border-t border-white border-opacity-30">
            <div class="text-lg font-bold">{{ formatCurrency(partnerTier.total_value) }}</div>
            <div class="text-xs opacity-75">{{ partnerTier.value_multiplier }}x value</div>
          </div>
        </div>
      </div>

      <!-- Combined Value -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4 text-center">
        <div class="text-sm text-slate-700 font-medium mb-1">Combined 3-5 Year Value</div>
        <div class="text-3xl sm:text-4xl font-bold text-green-700">{{ formatCurrency(topTierValue) }}</div>
        <div class="text-xs text-slate-600 mt-1">
          {{ topTierPercent }}% of your total network value from {{ topTierPercentOfPortfolio }}% of relationships
        </div>
      </div>
    </div>

    <!-- Action Plan -->
    <div class="space-y-3">
      <div class="flex items-center gap-2 text-slate-900 font-semibold text-sm sm:text-base">
        <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
          <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
        </svg>
        <span>Your Priority Action Plan:</span>
      </div>

      <div class="space-y-2">
        <div class="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            1
          </div>
          <div class="flex-1">
            <p class="font-semibold text-slate-900 mb-1">Identify Your VIPs</p>
            <p class="text-sm text-slate-700 leading-relaxed">
              Start with {{ Math.round(vipTier?.target_count * 0.5) || 10 }}-{{ Math.round(vipTier?.target_count * 0.75) || 15 }} decision-makers who can unlock significant opportunities
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            2
          </div>
          <div class="flex-1">
            <p class="font-semibold text-slate-900 mb-1">Nurture Strategic Partners</p>
            <p class="text-sm text-slate-700 leading-relaxed">
              Build relationships with {{ Math.round(partnerTier?.target_count * 0.5) || 15 }}-{{ Math.round(partnerTier?.target_count * 0.75) || 20 }} connectors who can refer you to their networks
            </p>
          </div>
        </div>

        <div class="flex items-start gap-3 bg-purple-50 border border-purple-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div class="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            3
          </div>
          <div class="flex-1">
            <p class="font-semibold text-slate-900 mb-1">Let Network Effects Multiply</p>
            <p class="text-sm text-slate-700 leading-relaxed">
              Year 1: {{ formatCurrency(year1Impact) }}. Years 3-5: {{ formatCurrency(topTierValue) }} as referrals compound
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Stat -->
    <div class="pt-6 border-t-2 border-slate-200">
      <div class="grid sm:grid-cols-2 gap-4">
        <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
          <p class="text-xs text-slate-600 mb-1 font-medium">Value per strategic relationship</p>
          <p class="text-2xl font-bold text-indigo-700">{{ formatCurrency(valuePerStrategicRelationship) }}</p>
        </div>
        <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
          <p class="text-xs text-slate-600 mb-1 font-medium">vs. general network contact</p>
          <p class="text-2xl font-bold text-orange-700">{{ strategicMultiplier }}x</p>
        </div>
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
</script>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
  animation-fill-mode: both;
  animation-delay: 0.4s;
}
</style>
