<template>
  <!--
    Drift as a timeline, because drift is a thing that happens over time.
    The rail cools from ember to grey as it descends, and the message blocks
    grow with it — four words, then an explanation, then an apology. The
    growing block IS the argument: the longer you leave it, the more the
    message costs, and the less likely you are to send it.
  -->
  <ol ref="root" class="relative">
    <!-- The rail -->
    <div
      class="absolute bottom-4 left-[9px] top-3 w-px bg-gradient-to-b from-ember via-[#C79A8E] to-drift sm:left-[11px]"
      aria-hidden="true"
    ></div>

    <li
      v-for="(s, i) in stages"
      :key="s.time"
      class="relative pb-12 pl-9 transition-all duration-700 last:pb-0 sm:pl-14"
      :class="shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'"
      :style="{ transitionDelay: `${i * 180}ms` }"
    >
      <!-- Node -->
      <span
        class="absolute left-0 top-2 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 bg-paper sm:h-[23px] sm:w-[23px]"
        :style="{ borderColor: s.color }"
        aria-hidden="true"
      >
        <span class="h-1.5 w-1.5 rounded-full" :style="{ backgroundColor: s.color }"></span>
      </span>

      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p class="font-mono text-sm" :style="{ color: s.color }">{{ s.time }}</p>
        <span class="text-ink/20" aria-hidden="true">·</span>
        <p class="font-mono text-[0.68rem] uppercase tracking-wide text-ink/40">
          {{ s.words }} words to write
        </p>
      </div>

      <h3 class="mt-2 font-display text-xl leading-snug sm:text-[1.4rem]">{{ s.title }}</h3>

      <!-- What you would actually have to type -->
      <div
        class="mt-4 max-w-xl rounded-2xl rounded-tl-sm px-5 py-4 text-[0.95rem] leading-relaxed text-ink/85"
        :style="{ backgroundColor: s.tint }"
      >
        {{ s.message }}
      </div>

      <p class="mt-3 max-w-xl leading-relaxed text-ink/60">{{ s.note }}</p>

      <!-- Where Kindred steps in -->
      <div
        v-if="i === 0"
        class="mt-4 inline-flex items-center gap-2.5 rounded-full bg-kindred/[0.1] py-2 pl-3 pr-4"
      >
        <KindredMark class="h-4 w-4 shrink-0" beat />
        <p class="text-[0.85rem] font-medium leading-snug text-ink/85">
          Kindred reaches you here — while it is still four words
        </p>
      </div>
    </li>
  </ol>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import KindredMark from '@/components/KindredMark.vue'

const stages = [
  {
    time: 'Week 2',
    color: '#B4713A',
    words: 6,
    tint: 'rgba(242,166,90,0.14)',
    title: 'It costs you nothing',
    message: 'Saw this and thought of you.',
    note: 'No preamble, no explaining. You would not even think of it as reaching out.',
  },
  {
    time: 'Month 6',
    color: '#C79A8E',
    words: 28,
    tint: 'rgba(199,154,142,0.16)',
    title: 'Now it needs a reason',
    message:
      'Hey! Sorry, it has been ages — work has been completely mad. How have you been? We should catch up properly at some point soon.',
    note: 'The gap has become part of the message, and you are now apologising before you have said anything.',
  },
  {
    time: 'Year 2',
    color: '#8A8FA3',
    words: 61,
    tint: 'rgba(138,143,163,0.14)',
    title: 'So it never gets sent',
    message:
      'Hi… I know it has been far too long and honestly there is no good excuse. I have started this message a few times. I saw about the move and I felt terrible that I heard it from someone else. I would love to catch up if you are open to it — completely understand if things have moved on.',
    note: 'This is the version that sits in drafts. The cost of writing it finally exceeded the cost of not writing it.',
  },
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
    ([e]) => {
      if (e.isIntersecting) {
        shown.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 },
  )
  if (root.value) observer.observe(root.value)
})

onUnmounted(() => observer?.disconnect())
</script>
