<template>
  <div class="animate-fade-in">
    <!-- Question Header -->
    <div class="mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-base sm:text-lg text-slate-600">
        {{ subtitle }}
      </p>
    </div>

    <!-- Question Content (slot) -->
    <div class="space-y-3">
      <slot></slot>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
      <button
        v-if="showBack"
        type="button"
        @click="$emit('back')"
        class="flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Back
      </button>
      <div v-else></div>

      <button
        v-if="showNext"
        type="button"
        @click="$emit('next')"
        :disabled="!canProceed"
        class="px-6 py-3 bg-kindred text-white font-semibold rounded-lg hover:bg-kindred-600 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  showBack: {
    type: Boolean,
    default: true
  },
  showNext: {
    type: Boolean,
    default: true
  },
  canProceed: {
    type: Boolean,
    default: true
  }
})

defineEmits(['back', 'next'])
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}
</style>
