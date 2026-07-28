<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :role="label ? 'img' : 'presentation'"
    :aria-label="label || undefined"
    :aria-hidden="label ? undefined : 'true'"
  >
    <!-- call -->
    <template v-if="name === 'call'">
      <path d="M15.5 13.5 17 12a2 2 0 0 1 2.6-.2l1.2.9a2 2 0 0 1 .3 2.9l-.8.9c-1.2 1.3-3.2 1.4-5.2.3-2-1-4-3-5-5-1.1-2-1-4 .3-5.2l.9-.8a2 2 0 0 1 2.9.3l.9 1.2A2 2 0 0 1 12 9l-1.5 1.5" />
    </template>

    <!-- message -->
    <template v-else-if="name === 'message'">
      <path d="M21 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.4A8 8 0 1 1 21 11.5Z" />
    </template>

    <!-- birthday: cake with a candle -->
    <template v-else-if="name === 'birthday'">
      <path d="M4 20h16" />
      <path d="M4.5 20v-4.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V20" />
      <path d="M4.5 16.5c1.2 0 1.2 1.2 2.4 1.2s1.2-1.2 2.4-1.2 1.2 1.2 2.4 1.2 1.2-1.2 2.4-1.2 1.2 1.2 2.4 1.2 1.2-1.2 2.4-1.2" />
      <path d="M12 13.5V10" />
      <path d="M12 7.2c.9-.7.9-1.7 0-2.7-.9 1-.9 2 0 2.7Z" />
    </template>

    <!-- family / home -->
    <template v-else-if="name === 'family'">
      <path d="M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19v-8.5Z" />
      <path d="M12 16.5c-1.6-1.3-2.6-2.2-2.6-3.3a1.6 1.6 0 0 1 2.6-1.2 1.6 1.6 0 0 1 2.6 1.2c0 1.1-1 2-2.6 3.3Z" />
    </template>

    <!-- work -->
    <template v-else-if="name === 'work'">
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </template>

    <!-- friends -->
    <template v-else-if="name === 'friends'">
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.6a3 3 0 0 1 0 4.8" />
      <path d="M17.5 14.4a5.5 5.5 0 0 1 3 5.1" />
    </template>

    <!-- calendar -->
    <template v-else-if="name === 'calendar'">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3.5V6M16 3.5V6" />
    </template>

    <!-- note -->
    <template v-else-if="name === 'note'">
      <path d="M5 4.5h9L19 9.5V19a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 4 19V6a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M13.5 4.5V10H19" />
      <path d="M8 14h7M8 17h4" />
    </template>

    <!-- follow up / handshake-ish arrow -->
    <template v-else-if="name === 'followup'">
      <path d="M4 12h13" />
      <path d="m13 8 4 4-4 4" />
      <path d="M20 5v14" />
    </template>

    <!-- snooze -->
    <template v-else-if="name === 'snooze'">
      <circle cx="12" cy="12.5" r="7.5" />
      <path d="M12 8.5v4.5l2.8 1.7" />
    </template>

    <!-- bell -->
    <template v-else-if="name === 'bell'">
      <path d="M18 9.5a6 6 0 1 0-12 0c0 4.5-1.5 5.5-1.5 5.5h15S18 14 18 9.5Z" />
      <path d="M10.3 18.5a2 2 0 0 0 3.4 0" />
    </template>

    <!-- relationship strength -->
    <template v-else-if="name === 'strength'">
      <path d="M4 19.5V14M9.3 19.5V9M14.7 19.5v-7M20 19.5v-11" />
      <path d="M3 5.5h18" stroke-opacity="0.25" />
    </template>

    <!-- timeline -->
    <template v-else-if="name === 'timeline'">
      <path d="M7 4.5v15" stroke-opacity="0.35" />
      <circle cx="7" cy="8" r="2" />
      <circle cx="7" cy="16" r="2" />
      <path d="M12 8h8M12 16h5" />
    </template>

    <!-- import -->
    <template v-else-if="name === 'import'">
      <path d="M12 4v10" />
      <path d="m8 10.5 4 4 4-4" />
      <path d="M4.5 17.5V19a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-1.5" />
    </template>

    <!-- search -->
    <template v-else-if="name === 'search'">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </template>

    <!-- privacy -->
    <template v-else-if="name === 'shield'">
      <path d="M12 3.5 5 6.2v5.4c0 4 2.9 7.4 7 8.9 4.1-1.5 7-4.9 7-8.9V6.2Z" />
      <path d="m9.2 12 2 2 3.6-3.6" />
    </template>

    <!-- intelligence -->
    <template v-else-if="name === 'spark'">
      <path d="M12 4.5 13.6 9l4.4 1.5L13.6 12 12 16.5 10.4 12 6 10.5 10.4 9Z" />
      <path d="M18 4v3M19.5 5.5h-3" stroke-opacity="0.5" />
    </template>

    <!-- circles -->
    <template v-else-if="name === 'circles'">
      <circle cx="12" cy="12" r="8.5" stroke-opacity="0.3" />
      <circle cx="12" cy="12" r="5" stroke-opacity="0.6" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </template>
  </svg>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  strokeWidth: { type: [Number, String], default: 1.6 },
  label: { type: String, default: '' },
})
</script>
