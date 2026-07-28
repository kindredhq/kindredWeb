<template>
  <!--
    The limit, and what happens when something else does the remembering.
    The grey bar is segmented into Dunbar's actual layers so the numbers mean
    something; the purple bar carries straight through the line.
    Animates once, on scroll into view.
  -->
  <figure ref="root">
    <svg
      viewBox="0 0 700 275"
      class="w-full"
      role="img"
      aria-label="Unaided, you can hold about 150 relationships, split into layers of 5, 15, 50 and 150. With Kindred the bar continues past that limit."
    >
      <!-- Unaided, split into the layers -->
      <text x="60" y="70" font-family="Karla, sans-serif" font-size="14" fill="#17121F" fill-opacity="0.75">
        On your own
      </text>

      <g :class="shown ? 'bar' : 'bar-idle'">
        <rect
          v-for="(seg, i) in segments"
          :key="seg.n"
          :x="xFor(seg.from)"
          y="82"
          :width="Math.max(xFor(seg.n) - xFor(seg.from), 2)"
          height="36"
          :fill="seg.fill"
          :rx="i === 0 ? 6 : 0"
        />
        <line
          v-for="seg in segments.slice(1)"
          :key="`d-${seg.n}`"
          :x1="xFor(seg.from)"
          y1="82"
          :x2="xFor(seg.from)"
          y2="118"
          stroke="#FDFBF8"
          stroke-width="2"
        />
      </g>

      <!-- Counts only; the narrow inner layers have no room for words here -->
      <g font-family="IBM Plex Mono, monospace" font-size="11" fill="#17121F" fill-opacity="0.6">
        <text
          v-for="(seg, i) in segments"
          :key="`l-${seg.n}`"
          :x="xFor(seg.n)"
          :y="i % 2 === 0 ? 136 : 150"
          text-anchor="middle"
        >
          {{ seg.n }}
        </text>
      </g>

      <!-- With a system -->
      <text x="60" y="192" font-family="Karla, sans-serif" font-size="14" fill="#5b47a8">
        With Kindred
      </text>
      <rect
        x="60"
        y="204"
        width="628"
        height="36"
        rx="6"
        fill="#7868E6"
        :class="shown ? 'bar grow' : 'bar-idle'"
      />
      <text
        x="672"
        y="227"
        text-anchor="end"
        font-family="IBM Plex Mono, monospace"
        font-size="11"
        fill="#FDFBF8"
      >
        NO CEILING
      </text>

      <!-- The limit itself -->
      <line
        :x1="xFor(150)"
        y1="50"
        :x2="xFor(150)"
        y2="252"
        stroke="#17121F"
        stroke-opacity="0.55"
        stroke-width="1.5"
        stroke-dasharray="5 4"
      />
      <text
        :x="xFor(150)"
        y="40"
        text-anchor="middle"
        font-family="IBM Plex Mono, monospace"
        font-size="11"
        fill="#17121F"
        fill-opacity="0.65"
      >
        DUNBAR'S LIMIT ≈ 150
      </text>
      <text
        :x="xFor(150) + 14"
        y="105"
        font-family="IBM Plex Mono, monospace"
        font-size="11"
        fill="#17121F"
        fill-opacity="0.45"
      >
        memory runs out
      </text>
    </svg>

    <!-- The layers, named where there is room to name them -->
    <ul class="mt-5 flex flex-wrap gap-x-6 gap-y-2">
      <li v-for="seg in segments" :key="`k-${seg.n}`" class="flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-sm" :style="{ backgroundColor: seg.fill }" aria-hidden="true"></span>
        <span class="font-mono text-[0.7rem] text-ink/70">{{ seg.n }}</span>
        <span class="text-sm text-ink/55">{{ seg.label }}</span>
      </li>
    </ul>

    <figcaption class="mt-5 max-w-3xl text-sm leading-relaxed text-ink/60">
      The grey bar is what a person can carry from memory alone, split into the
      layers Dunbar described. The dashed line is not a matter of effort — it is
      where remembering runs out. Kindred does the remembering, so the line stops
      being the ceiling.
    </figcaption>
  </figure>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 0–400 relationships across the plot area.
const X0 = 60
const X1 = 688
const MAX = 400

function xFor(n) {
  return X0 + (n / MAX) * (X1 - X0)
}

// Dunbar's layers, drawn to scale as segments of the same bar.
const segments = [
  { from: 0, n: 5, label: 'call at 2am', fill: 'rgba(120,104,230,0.55)' },
  { from: 5, n: 15, label: 'closest', fill: 'rgba(242,166,90,0.55)' },
  { from: 15, n: 50, label: 'good friends', fill: 'rgba(138,143,163,0.5)' },
  { from: 50, n: 150, label: 'you can hold', fill: 'rgba(138,143,163,0.3)' },
]

const root = ref(null)
const shown = ref(false)
let observer

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = true
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        shown.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.35 },
  )
  if (root.value) observer.observe(root.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
/* Held at zero until the figure scrolls into view, then eased out once. */
.bar-idle {
  transform: scaleX(0);
  transform-box: fill-box;
  transform-origin: left center;
}

.bar {
  transform-box: fill-box;
  transform-origin: left center;
  transform: scaleX(0);
  animation: grow-bar 1000ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.bar.grow {
  animation-delay: 420ms;
  animation-duration: 1300ms;
}

@keyframes grow-bar {
  to {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .bar,
  .bar-idle {
    transform: scaleX(1);
    animation: none;
  }
}
</style>
