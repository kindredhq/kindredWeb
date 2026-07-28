<template>
  <header class="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
      <router-link
        to="/"
        class="flex items-center gap-2.5 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kindred"
      >
        <KindredMark class="h-7 w-7 text-ink" />
        <span class="font-display text-lg font-semibold text-ink">Kindred</span>
      </router-link>

      <div class="flex items-center gap-5 sm:gap-7">
        <router-link
          to="/roi-calculator"
          class="hidden rounded text-sm text-ink/60 transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kindred sm:block"
        >
          Free score
        </router-link>
        <router-link
          to="/writing"
          class="rounded text-sm text-ink/60 transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kindred"
        >
          Articles
        </router-link>
        <router-link
          to="/#get-kindred"
          class="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-dusk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kindred"
        >
          Get Kindred
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import KindredMark from '@/components/KindredMark.vue'
</script>
