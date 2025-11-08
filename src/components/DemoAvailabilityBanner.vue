<template>
  <div class="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-6 mb-8">
    <div class="flex items-start gap-4">
      <!-- Warning Icon -->
      <div class="flex-shrink-0">
        <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1">
        <div class="flex items-center gap-3 mb-3">
          <h3 class="text-xl font-bold text-slate-900">LIMITED DEMO AVAILABILITY</h3>
          <span class="flex items-center gap-1.5 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full animate-pulse">
            <span class="w-2 h-2 bg-white rounded-full"></span>
            LIVE
          </span>
        </div>

        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-3xl font-bold text-orange-600">{{ spotsRemaining }}</span>
            <span class="text-slate-700 font-medium">priority demo slots remaining this week</span>
          </div>

          <div class="space-y-2 text-sm text-slate-700">
            <p class="leading-relaxed">
              <strong>As a {{ scoreLevel }} performer</strong> (Network Health Score: <span class="text-orange-600 font-bold">{{ healthScore }}/100</span>),
              you've earned priority booking access.
            </p>
            <p class="leading-relaxed">
              These spots are reserved exclusively for qualified executives who've completed our ROI assessment.
            </p>
          </div>

          <!-- Live Activity Indicators -->
          <div class="flex flex-col sm:flex-row gap-3 pt-3 border-t border-orange-200">
            <div class="flex items-center gap-2 text-sm">
              <span class="text-lg">🔥</span>
              <span class="text-slate-600">
                <strong class="text-slate-900">{{ viewersToday }}</strong> executives viewed their results today
              </span>
            </div>
            <div class="hidden sm:block text-slate-400">•</div>
            <div class="flex items-center gap-2 text-sm">
              <span class="text-lg">👀</span>
              <span class="text-slate-600">
                <strong class="text-slate-900">{{ currentViewers }}</strong> viewing right now
              </span>
            </div>
          </div>

          <!-- Optional: Countdown Timer -->
          <div v-if="showCountdown" class="pt-3 border-t border-orange-200">
            <div class="flex items-center gap-2 text-sm text-slate-700">
              <svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>
                Priority booking access expires <strong class="text-orange-600">{{ timeRemaining }}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  healthScore: {
    type: Number,
    default: 50
  },
  showCountdown: {
    type: Boolean,
    default: false
  }
})

// Spots remaining logic
const spotsRemaining = ref(5)

// Live activity numbers
const viewersToday = ref(47)
const currentViewers = ref(12)

// Get daily spots from localStorage or generate new
const getDailySpots = () => {
  const today = new Date().toDateString()
  const stored = localStorage.getItem('kindred_demo_spots')

  if (stored) {
    const data = JSON.parse(stored)
    if (data.date === today) {
      return data.spots
    }
  }

  // Generate new random spots for today (3-8 range)
  const newSpots = Math.floor(Math.random() * 6) + 3
  localStorage.setItem('kindred_demo_spots', JSON.stringify({
    date: today,
    spots: newSpots
  }))

  return newSpots
}

// Get realistic viewer counts
const getViewerCounts = () => {
  // Vary by time of day
  const hour = new Date().getHours()

  // More activity during business hours (9am-5pm)
  if (hour >= 9 && hour <= 17) {
    viewersToday.value = Math.floor(Math.random() * 30) + 35 // 35-65
    currentViewers.value = Math.floor(Math.random() * 8) + 8 // 8-16
  } else {
    viewersToday.value = Math.floor(Math.random() * 20) + 20 // 20-40
    currentViewers.value = Math.floor(Math.random() * 5) + 3 // 3-8
  }
}

// Score level based on health score
const scoreLevel = computed(() => {
  if (props.healthScore >= 90) return 'exceptional'
  if (props.healthScore >= 75) return 'high'
  if (props.healthScore >= 60) return 'solid'
  return 'developing'
})

// Countdown timer
const timeRemaining = ref('')
let countdownInterval = null

const updateCountdown = () => {
  const now = new Date()
  const midnight = new Date()
  midnight.setHours(23, 59, 59, 999)

  const diff = midnight - now
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  if (hours > 0) {
    timeRemaining.value = `in ${hours}h ${minutes}m`
  } else {
    timeRemaining.value = `in ${minutes} minutes`
  }
}

onMounted(() => {
  spotsRemaining.value = getDailySpots()
  getViewerCounts()

  if (props.showCountdown) {
    updateCountdown()
    countdownInterval = setInterval(updateCountdown, 60000) // Update every minute
  }

  // Randomly update viewer count every 30 seconds for realism
  const viewerInterval = setInterval(() => {
    currentViewers.value = Math.max(1, currentViewers.value + (Math.random() > 0.5 ? 1 : -1))
  }, 30000)

  onUnmounted(() => {
    if (countdownInterval) clearInterval(countdownInterval)
    clearInterval(viewerInterval)
  })
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
