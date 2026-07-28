<template>
  <!--
    The hero artifact is the product itself, and it genuinely works: the circle
    chips filter, the rows select. Nothing navigates anywhere — every control is
    local state, so it behaves like the app without pretending to be a link.
    Over the top, Kindred's nudges arrive one at a time, alternating between the
    professional and the personal, because holding both in one system is the point.
  -->
  <!-- pt reserves room for the nudge so it never has to cover a person's row -->
  <div class="relative pt-32 sm:pt-28">
    <figure class="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_1px_2px_rgba(23,18,31,0.04),0_18px_50px_-16px_rgba(23,18,31,0.22)]">
      <!-- App bar, with the mark awake -->
      <div class="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
        <div class="flex items-center gap-2.5">
          <KindredMark class="h-6 w-6 text-ink/75" beat />
          <div>
            <p class="font-display text-base font-semibold leading-none">Today</p>
            <p class="mt-1 font-mono text-[0.65rem] text-ink/45">
              {{ todayLabel }} · {{ drifting.length }} drifting
            </p>
          </div>
        </div>

        <div class="flex items-center gap-1">
          <button
            v-for="c in circles"
            :key="c"
            type="button"
            class="rounded-full px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kindred"
            :class="active === c ? 'bg-ink text-paper' : 'bg-paper text-ink/45 hover:text-ink/70'"
            :aria-pressed="active === c"
            @click="active = c"
          >
            {{ c }}
          </button>
        </div>
      </div>

      <!-- People -->
      <ul class="divide-y divide-ink/[0.07]">
        <li v-for="p in visible" :key="p.name">
          <button
            type="button"
            class="w-full px-5 py-3.5 text-left transition-colors hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-kindred"
            :aria-expanded="selected === p.name"
            @click="selected = selected === p.name ? null : p.name"
          >
            <div class="flex items-start gap-3">
              <span
                class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper"
                :style="{ color: p.color }"
              >
                <AppIcon :name="p.icon" class="h-4 w-4" />
              </span>

              <span class="min-w-0 flex-1">
                <span class="flex items-baseline justify-between gap-4">
                  <span class="font-medium text-ink">{{ p.name }}</span>
                  <span class="shrink-0 font-mono text-sm" :style="{ color: p.color }">
                    {{ p.elapsed }}
                  </span>
                </span>

                <span class="mt-0.5 block text-sm leading-snug text-ink/60">{{ p.context }}</span>

                <span class="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.65rem] text-ink/40">
                  <span class="rounded-full bg-paper px-2 py-0.5">{{ p.circle }}</span>
                  <span aria-hidden="true">·</span>
                  <span>every {{ p.cadence }}</span>
                  <span aria-hidden="true">·</span>
                  <span>{{ p.last }}</span>
                </span>
              </span>
            </div>
          </button>

          <div v-if="selected === p.name" class="flex flex-wrap gap-2 px-5 pb-4 pl-16">
            <span
              v-for="a in actions"
              :key="a.label"
              class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs"
              :class="a.primary
                ? 'bg-ink font-medium text-paper'
                : 'border border-ink/15 text-ink/70'"
            >
              <AppIcon :name="a.icon" class="h-3.5 w-3.5" />
              {{ a.label }}
            </span>
          </div>
        </li>
      </ul>

      <!-- Running totals -->
      <div class="grid grid-cols-3 divide-x divide-ink/[0.07] border-t border-ink/10 text-center">
        <div class="px-3 py-3">
          <p class="font-mono text-base text-ink">18</p>
          <p class="mt-0.5 font-mono text-[0.6rem] uppercase tracking-wide text-ink/40">on cadence</p>
        </div>
        <div class="px-3 py-3">
          <p class="font-mono text-base text-ember">{{ drifting.length }}</p>
          <p class="mt-0.5 font-mono text-[0.6rem] uppercase tracking-wide text-ink/40">drifting</p>
        </div>
        <div class="px-3 py-3">
          <p class="font-mono text-base text-ink">6</p>
          <p class="mt-0.5 font-mono text-[0.6rem] uppercase tracking-wide text-ink/40">logged this week</p>
        </div>
      </div>
    </figure>

    <!-- Kindred's nudges, arriving one at a time -->
    <!-- Sits above the card header so it never covers a person's elapsed time -->
    <div class="pointer-events-none absolute right-0 top-0 z-10 w-[18.5rem] max-w-[92%] sm:-right-3 lg:-right-6" aria-live="polite">
      <!-- out-in: one nudge clears before the next arrives, so they never
           stack on top of each other mid-transition. -->
      <transition
        mode="out-in"
        enter-active-class="transition duration-400 ease-out"
        enter-from-class="opacity-0 -translate-y-2 scale-[0.97]"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-to-class="opacity-0 translate-y-1"
      >
        <div
          :key="nudge.title"
          class="overflow-hidden rounded-xl border border-ink/10 bg-white/95 shadow-[0_10px_30px_-8px_rgba(23,18,31,0.3)] backdrop-blur"
        >
          <!-- sender row: this came from Kindred -->
          <div class="flex items-center gap-2 border-b border-ink/[0.07] px-3.5 py-1.5">
            <KindredMark class="h-3.5 w-3.5 shrink-0 text-ink/60" beat />
            <span class="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/45">
              Kindred
            </span>
            <span class="ml-auto font-mono text-[0.6rem] text-ink/35">now</span>
          </div>

          <!-- the nudge itself -->
          <div class="flex gap-3 px-3.5 py-2.5">
            <span
              class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
              :style="{ backgroundColor: nudge.tint, color: nudge.tagColor }"
            >
              <AppIcon :name="nudge.icon" class="h-4 w-4" />
            </span>
            <div class="min-w-0">
              <p class="text-sm font-semibold leading-snug text-ink">{{ nudge.title }}</p>
              <p class="mt-1 text-[0.82rem] leading-snug text-ink/60">{{ nudge.body }}</p>
              <div class="mt-2 flex items-center gap-2">
                <span
                  class="rounded-full px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-wide"
                  :style="{ backgroundColor: nudge.tint, color: nudge.tagColor }"
                >
                  {{ nudge.tag }}
                </span>
                <span class="font-mono text-[0.6rem] text-ink/40">{{ nudge.when }}</span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import KindredMark from '@/components/KindredMark.vue'
import AppIcon from '@/components/AppIcon.vue'

// Real date — the preview should never claim it is Thursday on a Monday.
const todayLabel = new Date().toLocaleDateString('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

const circles = ['All', 'Family', 'Work']
const active = ref('All')
const selected = ref('Mum')

const actions = [
  { label: 'Call', icon: 'call', primary: true },
  { label: 'Message', icon: 'message' },
  { label: 'Log a note', icon: 'note' },
  { label: 'Snooze', icon: 'snooze' },
]

const people = [
  {
    name: 'Mum',
    context: 'You call on Sundays. You have missed five.',
    circle: 'Family',
    group: 'Family',
    cadence: 'week',
    elapsed: '5 weeks',
    last: 'last: call, 22 May',
    icon: 'family',
    color: '#B4713A',
  },
  {
    name: 'Marcus Reed',
    context: 'Introduced you to your lead investor',
    circle: 'Inner circle',
    group: 'Work',
    cadence: 'quarter',
    elapsed: '14 months',
    last: 'last: coffee, Apr 2025',
    icon: 'work',
    color: '#8A8FA3',
  },
  {
    name: 'Ben & Claire',
    context: 'Anniversary on Saturday — you missed it last year',
    circle: 'Close friends',
    group: 'Family',
    cadence: 'month',
    elapsed: '4 months',
    last: 'last: message, 3 Mar',
    icon: 'birthday',
    color: '#B4713A',
  },
  {
    name: 'Dana Whitfield',
    context: 'Former colleague, now runs revenue at a target account',
    circle: 'Work',
    group: 'Work',
    cadence: '6 weeks',
    elapsed: '5 months',
    last: 'last: email, 14 Feb',
    icon: 'followup',
    color: '#8A8FA3',
  },
]

const visible = computed(() =>
  active.value === 'All' ? people : people.filter((p) => p.group === active.value),
)
const drifting = computed(() => people)

// Alternating personal and professional, because the argument for Kindred is
// that one system holds both.
const WARM = { tagColor: '#B4713A', tint: 'rgba(242,166,90,0.16)' }
const COOL = { tagColor: '#6d5bd0', tint: 'rgba(120,104,230,0.12)' }

const nudges = [
  {
    title: 'Call your mother',
    body: 'Five Sundays missed. She usually picks up around seven.',
    tag: 'Family',
    icon: 'call',
    when: 'Sunday, 7:00pm',
    ...WARM,
  },
  {
    title: 'Marcus Reed has gone quiet',
    body: 'Fourteen months. He made the intro to your lead investor and asked to be kept posted.',
    tag: 'Inner circle',
    icon: 'work',
    when: 'Past cadence',
    ...COOL,
  },
  {
    title: "Ben & Claire's anniversary",
    body: 'Saturday. You missed it last year and said you would not again.',
    tag: 'Close friends',
    icon: 'birthday',
    when: 'In 3 days',
    ...WARM,
  },
  {
    title: 'Dana Whitfield moved roles',
    body: 'Now running revenue at an account on your list. Congratulate her before you need anything.',
    tag: 'Work',
    icon: 'followup',
    when: 'Today',
    ...COOL,
  },
  {
    title: '6 people from the summit',
    body: 'Met Tuesday, none logged yet. New contacts go cold in about three weeks.',
    tag: 'Follow up',
    icon: 'friends',
    when: '2 days ago',
    ...COOL,
  },
  {
    title: "Your sister's birthday",
    body: 'Nine days out — enough time to do better than a same-day message.',
    tag: 'Family',
    icon: 'birthday',
    when: 'In 9 days',
    ...WARM,
  },
]

const index = ref(0)
const nudge = computed(() => nudges[index.value % nudges.length])
let timer

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    index.value += 1
  }, 3600)
})

onUnmounted(() => clearInterval(timer))
</script>
