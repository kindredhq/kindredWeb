<template>
  <div class="w-full mb-8">
    <!-- Progress Bar -->
    <div class="relative w-full bg-slate-200 rounded-full h-3 overflow-hidden">
      <div
        class="absolute top-0 left-0 h-full bg-gradient-to-r from-kindred to-purple-600 transition-all duration-500 ease-out rounded-full"
        :style="{ width: `${progress}%` }"
      >
        <div class="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
      </div>
    </div>

    <!-- Step Counter -->
    <div class="flex justify-between items-center mt-3">
      <p class="text-sm font-medium text-slate-600">
        Step {{ currentStep }} of {{ totalSteps }}
      </p>
      <p class="text-sm font-semibold text-kindred">
        {{ progress }}% Complete
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentStep: {
    type: Number,
    required: true,
    default: 1
  },
  totalSteps: {
    type: Number,
    required: true,
    default: 7
  }
})

const progress = computed(() => {
  return Math.round((props.currentStep / props.totalSteps) * 100)
})
</script>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
