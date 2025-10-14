<template>
  <div class="bg-white rounded-2xl shadow-xl border-2 border-slate-200 overflow-hidden animate-slide-up">
    <!-- Header -->
    <div class="bg-gradient-to-r from-kindred to-purple-600 text-white p-6 sm:p-8 text-center">
      <h3 class="text-2xl sm:text-3xl font-bold mb-2">
        Your ROI Timeline
      </h3>
      <p class="text-sm sm:text-base opacity-90">
        From strategic relationship management with Kindred
      </p>
    </div>

    <!-- Comparison Grid -->
    <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
      <!-- Year 1 - Conservative -->
      <div class="p-6 sm:p-8 space-y-4">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-2xl">🎯</span>
          </div>
          <div>
            <h4 class="text-lg font-bold text-slate-900">Year 1 Impact</h4>
            <p class="text-sm text-slate-600">Conservative ({{ conservativePercent }}%)</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center border-2 border-blue-200">
          <div class="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
            {{ formatCurrency(year1Value) }}
          </div>
          <div class="text-sm text-slate-700 font-medium">
            Realistic first-year return
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-start gap-2">
            <svg class="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-sm text-slate-700 leading-relaxed">
              Build initial momentum with strategic outreach
            </p>
          </div>
          <div class="flex items-start gap-2">
            <svg class="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-sm text-slate-700 leading-relaxed">
              Focus on {{ topTierCount }} VIP/Partner relationships
            </p>
          </div>
          <div class="flex items-start gap-2">
            <svg class="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-sm text-slate-700 leading-relaxed">
              Early referrals and repeat business begin
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-200">
          <div class="text-center">
            <div class="text-2xl font-bold text-blue-600">
              {{ formatCurrency(Math.round(year1Value / 12)) }}<span class="text-sm font-normal text-slate-600">/mo</span>
            </div>
            <div class="text-xs text-slate-600 mt-1">Average monthly impact</div>
          </div>
        </div>
      </div>

      <!-- Years 3-5 - Full Potential -->
      <div class="p-6 sm:p-8 space-y-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span class="text-2xl">🚀</span>
          </div>
          <div>
            <h4 class="text-lg font-bold text-slate-900">Years 3-5 Potential</h4>
            <p class="text-sm text-slate-600">Network effects multiply</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6 text-center border-2 border-green-400 shadow-lg">
          <div class="text-4xl sm:text-5xl font-bold mb-2">
            {{ formatCurrency(fullPotential) }}
          </div>
          <div class="text-sm font-medium opacity-90">
            Total network value at maturity
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-sm text-slate-700 leading-relaxed">
              <strong>Referral cascades</strong> from strategic partners
            </p>
          </div>
          <div class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-sm text-slate-700 leading-relaxed">
              <strong>Repeat business</strong> from maintained clients
            </p>
          </div>
          <div class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-sm text-slate-700 leading-relaxed">
              <strong>Network effects</strong> compound exponentially
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-green-200">
          <div class="bg-white bg-opacity-60 rounded-lg p-4 text-center">
            <div class="text-xl font-bold text-green-700 mb-1">
              {{ growthMultiplier }}x
            </div>
            <div class="text-xs text-slate-700">
              Growth from Year 1 to maturity
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-t-2 border-slate-200">
      <div class="flex items-center justify-between gap-4 flex-wrap">
        <div class="flex items-center gap-3">
          <span class="text-3xl">💡</span>
          <div>
            <p class="font-bold text-slate-900">Strategic relationships compound over time</p>
            <p class="text-sm text-slate-600">
              Top {{ topTierCount }} relationships generate {{ formatCurrency(topTierValue) }}+ ({{ topTierPercent }}% of total value)
            </p>
          </div>
        </div>
      </div>
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

const growthMultiplier = computed(() => {
  if (props.year1Value === 0) return 0
  return (props.fullPotential / props.year1Value).toFixed(1)
})

const topTierPercent = computed(() => {
  if (props.fullPotential === 0) return 0
  return Math.round((props.topTierValue / props.fullPotential) * 100)
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
  animation-delay: 0.2s;
}
</style>
