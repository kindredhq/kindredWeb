<template>
  <!--
    The results equivalent of MentalSpace.vue on the homepage. Same 100-unit
    grid, same colour language, same before/after toggle — but driven by the
    numbers this person actually gave us rather than the illustrative ones.

    This leads the results page on purpose. The dollar figure is the weaker
    argument: people discount money a stranger calculated for them. Attention
    they can check against their own week, and recognition converts better than
    argument.
  -->
  <section ref="root" class="rounded-2xl border border-ink/12 bg-white p-6 sm:p-10">
    <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
      What it is costing you in attention
    </p>

    <h2 class="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
      {{ load.headline }}
    </h2>

    <!-- Toggle -->
    <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
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
      <li v-for="band in visibleBands" :key="band.key" class="flex items-start gap-3">
        <span
          class="mt-1.5 h-3 w-3 shrink-0 rounded-[3px]"
          :style="{ backgroundColor: band.color }"
          aria-hidden="true"
        ></span>
        <p class="text-[0.95rem] leading-snug text-ink/70">
          <span class="font-mono text-sm text-ink">{{ band.units }}</span>
          <span class="mx-1.5 text-ink/25" aria-hidden="true">·</span>
          {{ band.label }}
        </p>
      </li>
    </ul>

    <!-- The payoff, once they have switched -->
    <div v-if="mode === 'after' && load.reclaimed_units > 0" class="mt-10 border-t border-ink/10 pt-8">
      <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span class="font-display text-5xl font-medium text-kindred">
          {{ load.reclaimed_units }}
        </span>
        <span class="text-lg text-ink/70">units back</span>
      </div>
      <p class="mt-4 max-w-2xl border-l-2 border-kindred pl-6 text-lg leading-relaxed text-ink/80">
        Kindred does not remove the relationships — you still have the
        conversations, and we have left {{ load.residual_units }} units for that.
        What it removes is the tracking, the reconstructing, and the low-grade
        guilt about the ones that have gone quiet.
      </p>
    </div>

    <!-- Says plainly that this is a model. Do not remove this. -->
    <p class="mt-8 border-t border-ink/10 pt-6 text-sm leading-relaxed text-ink/45">
      {{ load.note }}
    </p>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  load: { type: Object, required: true },
})

const FREE = 'rgba(120,104,230,0.16)'

// Keyed to match MentalSpace.vue on the homepage, so someone who read the
// marketing page recognises the picture immediately.
const BAND_COLORS = {
  carry: '#8A8FA3',
  debt: '#C79A8E',
  intrusion: '#B4713A',
  free: FREE,
}

const states = [
  { id: 'before', label: 'Right now' },
  { id: 'after', label: 'With Kindred' },
]

const mode = ref('before')

const beforeBands = computed(() =>
  (props.load.bands || [])
    .filter((b) => b.units > 0)
    .map((b) => ({ ...b, color: BAND_COLORS[b.key] || FREE })),
)

const afterBands = computed(() => [
  {
    key: 'residual',
    label: 'acting on what Kindred surfaces',
    units: props.load.residual_units,
    color: '#7868E6',
  },
  {
    key: 'free',
    label: 'yours',
    units: props.load.free_units_after,
    color: FREE,
  },
])

const visibleBands = computed(() =>
  (mode.value === 'after' ? afterBands.value : beforeBands.value).filter((b) => b.units > 0),
)

const units = computed(() => {
  const out = []
  for (const band of visibleBands.value) {
    for (let i = 0; i < band.units; i += 1) out.push({ color: band.color })
  }
  // Guard against a malformed payload leaving the grid short or overflowing.
  return out.slice(0, 100)
})

const ariaLabel = computed(() =>
  visibleBands.value.map((b) => `${b.units} units ${b.label}`).join('; '),
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
        }, 2800)
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
