<template>
  <div class="border-t pt-8 space-y-6">
    <div class="text-center sm:text-left">
      <h3 class="font-display text-xl sm:text-2xl font-medium text-ink mb-2">
        Get Your Personalized ROI Report
      </h3>
      <p class="text-ink/60">
        We'll email your complete analysis with actionable insights
      </p>
    </div>

    <!-- Email Input -->
    <div class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-ink/75 mb-2">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          :value="email"
          @input="$emit('update:email', $event.target.value)"
          placeholder="your@email.com"
          required
          class="w-full px-4 py-3 bg-white border border-ink/15 rounded-xl text-ink placeholder-ink/35 focus:outline-none focus:ring-2 focus:ring-kindred focus:border-kindred transition-all"
          :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': error }"
        />
        <p v-if="error" class="text-sm text-red-600 mt-1">{{ error }}</p>
      </div>

      <div>
        <label for="name" class="block text-sm font-medium text-ink/75 mb-2">
          Name (Optional)
        </label>
        <input
          id="name"
          type="text"
          :value="name"
          @input="$emit('update:name', $event.target.value)"
          placeholder="John Doe"
          class="w-full px-4 py-3 bg-white border border-ink/15 rounded-xl text-ink placeholder-ink/35 focus:outline-none focus:ring-2 focus:ring-kindred focus:border-kindred transition-all"
        />
      </div>
    </div>

    <!-- Privacy Notice -->
    <div class="bg-paper border border-ink/12 rounded-xl p-4">
      <div class="flex items-start">
        <svg class="w-5 h-5 text-kindred flex-shrink-0 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
        </svg>
        <p class="text-xs text-ink/60 leading-relaxed">
          We respect your privacy. Your data is encrypted and never shared. No spam, ever.
          <router-link to="/privacy" class="text-kindred hover:underline ml-1">Privacy Policy</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  email: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})

defineEmits(['update:email', 'update:name'])
</script>
