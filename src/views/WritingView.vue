<template>
  <div class="min-h-screen bg-paper font-sans text-ink antialiased">
    <SiteNav />

    <main class="mx-auto max-w-4xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <header class="max-w-2xl">
        <h1 class="font-display text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl">
          Writing
        </h1>
        <p class="mt-5 text-lg leading-relaxed text-ink/65">
          Notes on staying close to people — how relationships drift, what
          brings them back, and what we're learning while building Kindred.
        </p>
      </header>

      <ul class="mt-16 divide-y divide-ink/10 border-t border-ink/10">
        <li v-for="post in posts" :key="post.slug">
          <router-link
            :to="`/writing/${post.slug}`"
            class="group block py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kindred"
          >
            <div class="flex items-baseline gap-4 font-mono text-xs text-ink/45">
              <time :datetime="post.date">{{ formatDate(post.date) }}</time>
              <span aria-hidden="true">·</span>
              <span>{{ post.readingTime }}</span>
            </div>
            <h2 class="mt-3 font-display text-2xl leading-snug transition-colors group-hover:text-kindred sm:text-[1.75rem]">
              {{ post.title }}
            </h2>
            <p class="mt-3 max-w-prose leading-relaxed text-ink/65">{{ post.excerpt }}</p>
            <span class="mt-4 inline-block text-sm text-kindred opacity-0 transition-opacity group-hover:opacity-100">
              Read →
            </span>
          </router-link>
        </li>
      </ul>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { getAllPosts, formatDate } from '@/content/posts'

const posts = getAllPosts()
</script>
