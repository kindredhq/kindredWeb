<template>
  <div class="bg-gradient-to-br rounded-2xl shadow-xl p-8 text-white animate-fade-in"
       :class="gradientClass">
    <div class="space-y-4">
      <!-- Label -->
      <p class="text-sm uppercase tracking-wide opacity-90 font-semibold">
        {{ label }}
      </p>

      <!-- Value -->
      <div>
        <p class="text-5xl sm:text-6xl font-bold mb-2">
          {{ displayValue }}
        </p>
        <p v-if="subtitle" class="text-sm opacity-90 leading-relaxed">
          {{ subtitle }}
        </p>
      </div>

      <!-- Additional Info -->
      <div v-if="extraInfo" class="pt-4 border-t border-white border-opacity-20">
        <p class="text-sm font-medium opacity-90">
          {{ extraInfo }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { formatCurrency, formatNumber } from '@/utils/formatters'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  extraInfo: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'blue', // blue, purple, green, red
    validator: (value) => ['blue', 'purple', 'green', 'red', 'orange'].includes(value)
  },
  isCurrency: {
    type: Boolean,
    default: true
  }
})

const gradientClass = computed(() => {
  const gradients = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
    orange: 'from-orange-500 to-orange-600'
  }
  return gradients[props.variant] || gradients.blue
})

const displayValue = computed(() => {
  if (props.isCurrency) {
    return formatCurrency(props.value)
  }
  return formatNumber(props.value)
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
</style>
