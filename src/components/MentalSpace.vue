<template>
  <!--
    A hundred units of attention. Unmanaged relationships do not just cost you
    the relationships — they occupy working memory with low-grade admin and
    guilt. Hand that to a system and the squares come back, which is the real
    benefit: room to take on something new without quietly abandoning everyone
    who got you here.
  -->
  <figure ref="root">
    <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
      <button
        v-for="s in states"
        :key="s.id"
        type="button"
        class="rounded-full px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kindred"
        :class="mode === s.id
          ? 'bg-ink text-paper'
          : 'border border-ink/15 text-ink/55 hover:text-ink'"
        :aria-pressed="mode === s.id"
        @click="mode = s.id"
      >
        {{ s.label }}
      </button>
      <p class="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/35">
        100 units of attention
      </p>
    </div>

    <!-- The grid -->
    <div
      class="mt-7 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1 sm:gap-1.5"
      role="img"
      :aria-label="ariaLabel"
    >
      <span
        v-for="(unit, i) in units"
        :key="i"
        class="aspect-square rounded-[2px] transition-all duration-500 sm:rounded-[3px]"
        :style="{
          backgroundColor: shown ? unit.color : 'rgba(23,18,31,0.05)',
          transitionDelay: `${(i % 20) * 12 + Math.floor(i / 20) * 24}ms`,
        }"
      ></span>
    </div>

    <!-- Key -->
    <ul class="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
      <li v-for="band in current.bands" :key="band.label" class="flex items-start gap-3">
        <span
          class="mt-1.5 h-3 w-3 shrink-0 rounded-[3px]"
          :style="{ backgroundColor: band.color }"
          aria-hidden="true"
        ></span>
        <p class="text-[0.95rem] leading-snug text-ink/70">
          <span class="font-mono text-sm text-ink">{{ band.n }}</span>
          <span class="mx-1.5 text-ink/25" aria-hidden="true">·</span>
          {{ band.label }}
        </p>
      </li>
    </ul>

    <figcaption class="mt-8 max-w-2xl border-l-2 border-kindred pl-6 text-lg leading-relaxed text-ink/80">
      {{ current.caption }}
    </figcaption>

    <!-- What the reclaimed units are actually for -->
    <div v-if="mode === 'after'" class="mt-10 border-t border-ink/10 pt-8">
      <p class="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/45">
        What 94 units buys you
      </p>
      <ul class="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        <li v-for="use in uses" :key="use" class="flex gap-3">
          <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-kindred" aria-hidden="true"></span>
          <span class="leading-relaxed text-ink/70">{{ use }}</span>
        </li>
      </ul>
    </div>
  </figure>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const FREE = 'rgba(120,104,230,0.16)'

const states = [
  { id: 'before', label: 'On your own' },
  { id: 'after', label: 'With Kindred' },
]

const configs = {
  before: {
    bands: [
      { n: 26, label: 'half-remembering who you owe a message', color: '#8A8FA3' },
      { n: 18, label: 'low-grade guilt about the ones you have dropped', color: '#C79A8E' },
      { n: 14, label: 'reconstructing context before every call', color: '#B4713A' },
      { n: 11, label: 'keeping four apps and a spreadsheet in sync', color: 'rgba(138,143,163,0.55)' },
      { n: 31, label: 'left for actual work', color: FREE },
    ],
    caption:
      'Two thirds of it goes on the admin of caring — not on the people themselves, and not on anything you would call work.',
  },
  after: {
    bands: [
      { n: 6, label: 'acting on what Kindred surfaces', color: '#7868E6' },
      { n: 94, label: 'yours', color: FREE },
    ],
    caption:
      'This is the actual benefit. Not a tidier contact list — the room to say yes to something demanding without knowing, quietly, that it will cost you people you cannot replace.',
  },
}

// Written for this audience specifically — the things a founder or operator
// actually defers when their head is full.
const uses = [
  'Starting the thing you have been circling for two years',
  'The hard hire you keep postponing because it needs three weeks of real thought',
  'Being properly present at dinner instead of half-drafting a message you will not send',
  'Deep work that needs four uninterrupted hours, not four fragmented ones',
  'Saying yes to a board seat, a book, a move — the things that cost attention, not money',
  'Reading something long enough to change your mind about something',
]

const mode = ref('before')
const current = computed(() => configs[mode.value])

const units = computed(() => {
  const out = []
  for (const band of current.value.bands) {
    for (let i = 0; i < band.n; i += 1) out.push({ color: band.color })
  }
  return out
})

const ariaLabel = computed(() =>
  current.value.bands.map((b) => `${b.n} units ${b.label}`).join('; '),
)

const root = ref(null)
const shown = ref(false)
let observer
let timer

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    shown.value = true
    return
  }
  observer = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        shown.value = true
        // Show the payoff once, unprompted, then leave it to the reader.
        timer = setTimeout(() => {
          if (mode.value === 'before') mode.value = 'after'
        }, 2600)
        observer.disconnect()
      }
    },
    { threshold: 0.25 },
  )
  if (root.value) observer.observe(root.value)
})

onUnmounted(() => {
  observer?.disconnect()
  clearTimeout(timer)
})
</script>
