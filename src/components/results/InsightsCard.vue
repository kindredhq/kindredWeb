<template>
  <div class="bg-white border-2 rounded-2xl p-6 sm:p-8 space-y-6 animate-slide-up"
       :class="borderColorClass">
    <!-- Header -->
    <div>
      <div class="flex items-center mb-3">
        <span class="text-3xl mr-3">{{ icon }}</span>
        <h3 class="text-xl sm:text-2xl font-bold text-slate-900">
          {{ title }}
        </h3>
      </div>
    </div>

    <!-- Insights List -->
    <div class="space-y-4">
      <div v-for="(insight, index) in insights" :key="index"
           class="flex items-start gap-4 p-4 rounded-lg transition-all hover:bg-slate-50">
        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg"
             :class="getIconBgClass(index)">
          {{ insight.emoji }}
        </div>
        <div class="flex-1">
          <p class="text-slate-800 leading-relaxed" :class="insight.highlight ? 'font-semibold' : ''">
            {{ insight.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- Action Button (Optional) -->
    <div v-if="showAction" class="pt-4 border-t border-slate-200">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: '💡'
  },
  insights: {
    type: Array,
    required: true,
    // Array of objects: { text: String, emoji: String, highlight?: Boolean }
  },
  variant: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'purple', 'green', 'orange'].includes(value)
  },
  showAction: {
    type: Boolean,
    default: false
  }
})

const borderColorClass = computed(() => {
  const colors = {
    blue: 'border-blue-200',
    purple: 'border-purple-200',
    green: 'border-green-200',
    orange: 'border-orange-200'
  }
  return colors[props.variant] || colors.blue
})

const getIconBgClass = (index) => {
  const bgClasses = [
    'bg-blue-100',
    'bg-purple-100',
    'bg-green-100',
    'bg-orange-100',
    'bg-pink-100'
  ]
  return bgClasses[index % bgClasses.length]
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
