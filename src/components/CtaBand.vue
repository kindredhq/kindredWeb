<template>
  <!--
    A stage-appropriate ask. Early in the page the reader does not yet believe
    they have a problem, so we ask them to measure it. Later, once the cost is
    established, we ask for the call.
  -->
  <div
    class="flex flex-col gap-6 rounded-2xl px-7 py-8 sm:px-9 sm:py-9 lg:flex-row lg:items-center lg:justify-between"
    :class="dark ? 'bg-ink text-paper' : 'border border-kindred/30 bg-kindred/[0.06]'"
  >
    <div class="max-w-xl">
      <p
        class="font-mono text-[0.65rem] uppercase tracking-[0.16em]"
        :class="dark ? 'text-paper/45' : 'text-kindred'"
      >
        {{ eyebrow }}
      </p>
      <h3
        class="mt-3 font-display text-xl leading-snug sm:text-2xl"
        :class="dark ? 'text-paper' : 'text-ink'"
      >
        {{ title }}
      </h3>
      <p class="mt-2 leading-relaxed" :class="dark ? 'text-paper/65' : 'text-ink/65'">
        {{ body }}
      </p>
    </div>

    <div class="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
      <component
        :is="primary.external ? 'a' : 'router-link'"
        v-bind="primary.external ? { href: primary.to } : { to: primary.to }"
        class="rounded-full px-7 py-3.5 text-center font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kindred"
        :class="dark ? 'bg-paper text-ink hover:bg-white' : 'bg-ink text-paper hover:bg-dusk'"
      >
        {{ primary.label }}
      </component>

      <component
        :is="secondary.external ? 'a' : 'router-link'"
        v-if="secondary"
        v-bind="secondary.external ? { href: secondary.to } : { to: secondary.to }"
        class="rounded-full px-6 py-3.5 text-center text-sm transition-colors"
        :class="dark ? 'text-paper/70 hover:text-paper' : 'text-ink/60 hover:text-ink'"
      >
        {{ secondary.label }}
      </component>
    </div>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  primary: { type: Object, required: true },
  secondary: { type: Object, default: null },
  dark: { type: Boolean, default: false },
})
</script>
