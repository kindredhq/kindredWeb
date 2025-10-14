<template>
  <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-xl border-2 border-slate-200 p-6 sm:p-8 space-y-6 animate-slide-up">
    <!-- Header -->
    <div class="text-center">
      <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        Your Optimal Portfolio
      </h3>
      <p class="text-slate-600">
        Strategic breakdown of your {{ totalCapacity }} relationship capacity
      </p>
    </div>

    <!-- Tier Bars -->
    <div class="space-y-4">
      <div
        v-for="(tier, index) in sortedTiers"
        :key="index"
        class="group"
      >
        <!-- Tier Info -->
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <div
              class="w-3 h-3 rounded-full"
              :class="getTierColor(tier.priority)"
            ></div>
            <h4 class="font-bold text-slate-900 text-sm sm:text-base">
              {{ tier.name }}
            </h4>
            <span class="text-xs sm:text-sm text-slate-500">
              ({{ tier.target_count }} contacts)
            </span>
          </div>
          <div class="text-right">
            <div class="font-bold text-slate-900 text-sm sm:text-base">
              {{ formatCurrency(tier.total_value) }}
            </div>
            <div class="text-xs text-slate-500">
              {{ tier.value_multiplier }}x multiplier
            </div>
          </div>
        </div>

        <!-- Visual Bar -->
        <div class="relative">
          <!-- Background bar -->
          <div class="w-full bg-slate-200 rounded-full h-8 overflow-hidden">
            <!-- Total value bar (full width based on percentage) -->
            <div
              class="h-full rounded-full transition-all duration-700 ease-out group-hover:opacity-90 flex items-center"
              :class="getTierGradient(tier.priority)"
              :style="{ width: tier.percentage + '%' }"
            >
              <!-- Network effect overlay (darker portion) -->
              <div
                class="h-full flex items-center justify-center px-3"
                :class="getTierGradientDark(tier.priority)"
                :style="{ width: getNetworkEffectPercent(tier) + '%' }"
              >
                <span class="text-xs font-bold text-white whitespace-nowrap">
                  {{ tier.percentage }}% of portfolio
                </span>
              </div>
            </div>
          </div>

          <!-- Tooltip on hover -->
          <div class="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-1 left-0 right-0 pointer-events-none">
            <div class="bg-slate-900 text-white text-xs rounded-lg p-3 mt-2 shadow-xl">
              <p class="font-semibold mb-1">{{ tier.description }}</p>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span class="text-slate-300">Direct:</span>
                  <span class="font-bold ml-1">{{ formatCurrency(tier.direct_value) }}</span>
                </div>
                <div>
                  <span class="text-slate-300">Network:</span>
                  <span class="font-bold ml-1 text-green-400">+{{ formatCurrency(tier.network_effect_value) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Legend -->
    <div class="pt-6 border-t-2 border-slate-200 space-y-3">
      <div class="flex items-center justify-between text-sm">
        <span class="font-semibold text-slate-700">Total Network Value (3-5 years):</span>
        <span class="text-2xl font-bold text-kindred">
          {{ formatCurrency(totalNetworkValue) }}
        </span>
      </div>
      <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
        <p class="text-sm text-slate-700 leading-relaxed">
          <span class="font-bold text-purple-700">Network Effect Bonus:</span>
          The darker portions show value from referrals, introductions, and compound effects.
          VIPs and Strategic Partners generate 3-5x more value than general contacts!
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
    // Array of tier objects from API
  }
})

const sortedTiers = computed(() => {
  // Sort by priority: critical > high > medium > low
  const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 }
  return [...props.tiers].sort((a, b) => {
    return (priorityOrder[a.priority] || 4) - (priorityOrder[b.priority] || 4)
  })
})

const totalCapacity = computed(() => {
  return props.tiers.reduce((sum, tier) => sum + tier.target_count, 0)
})

const totalNetworkValue = computed(() => {
  return props.tiers.reduce((sum, tier) => sum + tier.total_value, 0)
})

const getNetworkEffectPercent = (tier) => {
  if (tier.total_value === 0) return 0
  return (tier.network_effect_value / tier.total_value) * 100
}

const getTierColor = (priority) => {
  const colors = {
    critical: 'bg-red-500',
    high: 'bg-purple-500',
    medium: 'bg-blue-500',
    low: 'bg-slate-400'
  }
  return colors[priority] || colors.low
}

const getTierGradient = (priority) => {
  const gradients = {
    critical: 'bg-gradient-to-r from-red-400 to-red-500',
    high: 'bg-gradient-to-r from-purple-400 to-purple-500',
    medium: 'bg-gradient-to-r from-blue-400 to-blue-500',
    low: 'bg-gradient-to-r from-slate-300 to-slate-400'
  }
  return gradients[priority] || gradients.low
}

const getTierGradientDark = (priority) => {
  const gradients = {
    critical: 'bg-gradient-to-r from-red-600 to-red-700',
    high: 'bg-gradient-to-r from-purple-600 to-purple-700',
    medium: 'bg-gradient-to-r from-blue-600 to-blue-700',
    low: 'bg-gradient-to-r from-slate-500 to-slate-600'
  }
  return gradients[priority] || gradients.low
}
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
}
</style>
