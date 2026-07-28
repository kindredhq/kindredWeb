<template>
  <!--
    The whole argument in one diagram. Above the hub: the five tools people
    actually cobble together to do this today, feeding in. Below: the people,
    and the real things Kindred holds for them — events, reminders, notes and
    nudges. The caption underneath updates as each item travels down the wire.
    Curves use pathLength="1" with a 1/1 dash so stroke-dashoffset draws them
    evenly regardless of length.
  -->
  <figure>
    <!-- What you use today -->
    <p class="mb-4 text-center font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink/40">
      What you use today
    </p>
    <ul class="grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3">
      <li
        v-for="(t, i) in tools"
        :key="t.label"
        class="flex flex-col items-center gap-1.5 rounded-xl border border-dashed border-ink/15 bg-paper/60 px-2 py-2.5 text-center"
        :class="i > 2 ? 'hidden sm:flex' : ''"
      >
        <AppIcon :name="t.icon" class="h-4 w-4 text-ink/35" />
        <span class="truncate font-mono text-[0.6rem] uppercase tracking-wide text-ink/40">
          {{ t.label }}
        </span>
      </li>
    </ul>

    <!-- Tools converge into Kindred -->
    <div class="relative h-14 sm:h-16">
      <svg viewBox="0 0 700 110" preserveAspectRatio="none" class="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          v-for="(t, i) in tools"
          :id="`in-line-${i}`"
          :key="`in-${i}`"
          :d="inboundFor(i)"
          fill="none"
          stroke="#8A8FA3"
          stroke-width="1.2"
          stroke-dasharray="1 1"
          path-length="1"
          stroke-opacity="0.35"
          class="hub-line"
          :style="{ animationDelay: `${i * 90}ms` }"
        />

        <!-- Scattered tools feeding in, continuously -->
        <template v-if="!reduced">
          <circle v-for="(t, i) in tools" :key="`ic-${i}`" r="3" fill="#8A8FA3" opacity="0.65">
            <animateMotion
              :dur="`${3.4 + i * 0.3}s`"
              :begin="`${i * 0.7}s`"
              repeatCount="indefinite"
              calcMode="linear"
            >
              <mpath :href="`#in-line-${i}`" />
            </animateMotion>
          </circle>
        </template>
      </svg>
    </div>

    <!-- The hub -->
    <div class="relative z-10 flex flex-col items-center">
      <div class="flex h-16 w-16 items-center justify-center rounded-2xl border border-ink/10 bg-white shadow-[0_10px_28px_-10px_rgba(23,18,31,0.35)]">
        <KindredMark class="h-9 w-9 text-ink/80" beat />
      </div>
      <p class="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink/50">
        One system
      </p>
    </div>

    <!-- Kindred reaches the people -->
    <div class="relative -mt-1 h-16 sm:h-20">
      <svg viewBox="0 0 700 110" preserveAspectRatio="none" class="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        <path
          v-for="(p, i) in people"
          :id="`hub-line-${i}`"
          :key="`out-${i}`"
          :d="outboundFor(i)"
          fill="none"
          stroke="#7868E6"
          stroke-width="1.4"
          stroke-dasharray="1 1"
          path-length="1"
          :stroke-opacity="i === active ? 0.85 : 0.28"
          class="hub-line transition-[stroke,stroke-opacity] duration-500"
          :style="{ animationDelay: `${i * 110}ms` }"
        />

        <!-- Nudges leaving Kindred, always in flight — one per person -->
        <template v-if="!reduced">
          <!-- Everything leaving Kindred is Kindred purple. Only the inbound
               tool traffic stays grey. -->
          <circle
            v-for="(p, i) in people"
            :key="`oc-${i}`"
            :r="i === active ? 5 : 3.5"
            fill="#7868E6"
            :opacity="i === active ? 1 : 0.5"
            class="transition-all duration-500"
          >
            <animateMotion
              :dur="`${2.6 + i * 0.4}s`"
              :begin="`${0.4 + i * 0.5}s`"
              repeatCount="indefinite"
              calcMode="linear"
            >
              <mpath :href="`#hub-line-${i}`" />
            </animateMotion>
          </circle>
        </template>
      </svg>
    </div>

    <!-- The people, and what Kindred is actually holding for them -->
    <ul class="relative z-10 grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3">
      <li
        v-for="(p, i) in people"
        :key="p.name"
        class="rounded-xl border bg-white px-2.5 py-3 text-center transition-all duration-500"
        :class="i === active
          ? 'border-transparent shadow-[0_10px_24px_-12px_rgba(23,18,31,0.35)]'
          : 'border-ink/10'"
        :style="i === active ? { borderColor: p.color } : null"
      >
        <span
          class="mx-auto flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-500"
          :style="i === active
            ? { backgroundColor: p.tint, color: p.color }
            : { backgroundColor: 'rgba(23,18,31,0.04)', color: 'rgba(23,18,31,0.35)' }"
        >
          <AppIcon :name="p.icon" class="h-4 w-4" />
        </span>
        <p class="mt-2 truncate text-sm font-medium text-ink">{{ p.name }}</p>
        <p
          class="mt-1 font-mono text-[0.58rem] uppercase tracking-wide transition-colors duration-500"
          :style="{ color: i === active ? p.color : 'rgba(23,18,31,0.35)' }"
        >
          {{ p.type }}
        </p>
      </li>
    </ul>

    <!-- Updates as each item lands -->
    <figcaption
      class="mt-6 flex min-h-[3.5rem] items-center justify-center rounded-xl border border-ink/10 bg-paper px-4 py-3 text-center"
      aria-live="polite"
    >
      <transition
        mode="out-in"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-1"
        leave-active-class="transition duration-150 ease-in"
        leave-to-class="opacity-0"
      >
        <p :key="active" class="text-sm leading-snug text-ink/70">
          <span class="font-mono text-[0.62rem] uppercase tracking-wide" :style="{ color: people[active].color }">
            {{ people[active].type }}
          </span>
          <span class="mx-2 text-ink/25" aria-hidden="true">·</span>
          <span class="font-medium text-ink">{{ people[active].name }}</span>
          <span class="text-ink/60"> — {{ people[active].detail }}</span>
        </p>
      </transition>
    </figcaption>
  </figure>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import KindredMark from '@/components/KindredMark.vue'
import AppIcon from '@/components/AppIcon.vue'

// The stack people actually use to do this by hand today.
const tools = [
  { label: 'Notes app', icon: 'note' },
  { label: 'Calendar', icon: 'calendar' },
  { label: 'Reminders', icon: 'bell' },
  { label: 'FB birthdays', icon: 'birthday' },
  { label: 'A spreadsheet', icon: 'work' },
]

const WARM = '#B4713A'
const WARM_TINT = 'rgba(242,166,90,0.16)'
const COOL = '#6d5bd0'
const COOL_TINT = 'rgba(120,104,230,0.12)'

// Real, useful items — not "weekly · 5 weeks", which tells you nothing.
const people = [
  {
    name: 'Mum',
    type: 'Reminder',
    icon: 'call',
    detail: 'call Sunday at 7pm, before she starts asking your sister',
    color: WARM,
    tint: WARM_TINT,
  },
  {
    name: 'Ben & Claire',
    type: 'Event',
    icon: 'birthday',
    detail: 'anniversary Saturday 2 August — book something by Thursday',
    color: WARM,
    tint: WARM_TINT,
  },
  {
    name: 'Marcus Reed',
    type: 'Nudge',
    icon: 'work',
    detail: '14 months quiet — longest gap since he made the investor intro',
    color: COOL,
    tint: COOL_TINT,
  },
  {
    name: 'Dana Whitfield',
    type: 'Note',
    icon: 'note',
    detail: 'wants an intro to your old CTO — you said you would do it in March',
    color: COOL,
    tint: COOL_TINT,
  },
  {
    name: 'Priya Shah',
    type: 'Logged',
    icon: 'message',
    detail: 'called Tuesday, 18 minutes — next check-in due in three weeks',
    color: COOL,
    tint: COOL_TINT,
  },
]

function inboundFor(i) {
  const x = ((i + 0.5) / tools.length) * 700
  return `M ${x} 0 C ${x} 45 350 50 350 110`
}

function outboundFor(i) {
  const x = ((i + 0.5) / people.length) * 700
  return `M 350 0 C 350 55 ${x} 45 ${x} 110`
}

const active = ref(0)
const reduced = ref(false)
let timer

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced.value) return
  timer = setInterval(() => {
    active.value = (active.value + 1) % people.length
  }, 3200)
})

onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.hub-line {
  stroke-dashoffset: 1;
  animation: draw-line 900ms ease-out forwards;
}

@keyframes draw-line {
  to {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hub-line {
    stroke-dashoffset: 0;
    animation: none;
  }
}
</style>
