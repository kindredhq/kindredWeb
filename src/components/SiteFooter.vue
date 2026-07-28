<template>
  <footer class="bg-ink px-5 pb-10 pt-16 text-paper sm:px-8 sm:pt-20">
    <div class="mx-auto max-w-6xl">
      <!-- A last word, not just a sitemap -->
      <div class="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-xl">
          <!-- The mark is never recoloured. On dark it sits on a light chip. -->
          <span class="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-paper">
            <KindredMark class="h-9 w-9" beat />
          </span>
          <p class="mt-5 font-display text-2xl leading-snug sm:text-[1.75rem]">
            Somebody just came to mind while you were reading this.
          </p>
          <p class="mt-3 leading-relaxed text-paper/60">
            That is the whole product, really. Kindred just makes sure it happens
            on a Tuesday in March instead of at a funeral.
          </p>
        </div>

        <router-link
          to="/#get-kindred"
          class="shrink-0 self-start rounded-full bg-paper px-7 py-3.5 font-medium text-ink transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kindred lg:self-auto"
        >
          Get Kindred
        </router-link>
      </div>

      <!-- Navigation -->
      <div class="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 class="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-paper/40">Product</h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li><router-link to="/#how-it-works" class="text-paper/75 transition-colors hover:text-paper">How it works</router-link></li>
            <li><router-link to="/#pricing" class="text-paper/75 transition-colors hover:text-paper">Pricing</router-link></li>
            <li><router-link to="/roi-calculator" class="text-paper/75 transition-colors hover:text-paper">Relationship check</router-link></li>
          </ul>
        </div>

        <div>
          <h2 class="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-paper/40">Writing</h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li v-for="post in posts" :key="post.slug">
              <router-link
                :to="`/writing/${post.slug}`"
                class="text-paper/75 transition-colors hover:text-paper"
              >
                {{ post.title }}
              </router-link>
            </li>
            <li><router-link to="/writing" class="text-paper/50 transition-colors hover:text-paper">All posts →</router-link></li>
          </ul>
        </div>

        <div>
          <h2 class="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-paper/40">Company</h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li><router-link to="/privacy" class="text-paper/75 transition-colors hover:text-paper">Privacy</router-link></li>
            <li><router-link to="/terms" class="text-paper/75 transition-colors hover:text-paper">Terms</router-link></li>
            <li>
              <a href="mailto:trykindredapp@gmail.com" class="text-paper/75 transition-colors hover:text-paper">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-paper/40">The promise</h2>
          <p class="mt-4 text-sm leading-relaxed text-paper/60">
            Your relationships are never sold, never used to advertise to you,
            and leave with you if you go.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p class="font-mono text-xs text-paper/40">© {{ year }} Kindred</p>
        <p class="font-mono text-xs text-paper/40">
          Never lose touch with the people who matter.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import KindredMark from '@/components/KindredMark.vue'
import { getAllPosts } from '@/content/posts'

const posts = getAllPosts().slice(0, 2)
const year = new Date().getFullYear()
</script>
