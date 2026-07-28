<template>
  <div class="min-h-screen bg-paper font-sans text-ink antialiased">
    <SiteNav />

    <main v-if="post" class="mx-auto max-w-3xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <router-link
        to="/writing"
        class="font-mono text-xs text-ink/45 transition-colors hover:text-kindred"
      >
        ← Writing
      </router-link>

      <header class="mt-8 border-b border-ink/10 pb-10">
        <h1 class="font-display text-[2.1rem] leading-[1.12] tracking-[-0.02em] sm:text-[3rem]">
          {{ post.title }}
        </h1>
        <div class="mt-6 flex items-baseline gap-4 font-mono text-xs text-ink/45">
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <span aria-hidden="true">·</span>
          <span>{{ post.readingTime }}</span>
        </div>
      </header>

      <!-- eslint-disable-next-line vue/no-v-html -- content is our own markdown, not user input -->
      <article class="post mt-10 max-w-prose" v-html="html"></article>

      <!-- Per-post CTA: awareness-stage posts point at the check, not the app -->
      <aside class="mt-20 rounded-2xl border border-ink/10 bg-white px-7 py-8 sm:px-9">
        <h2 class="font-display text-2xl leading-snug">{{ cta.title }}</h2>
        <p class="mt-3 max-w-prose leading-relaxed text-ink/65">{{ cta.body }}</p>
        <router-link
          :to="cta.to"
          class="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-dusk"
        >
          {{ cta.label }}
        </router-link>
      </aside>

      <nav v-if="more.length" class="mt-16 border-t border-ink/10 pt-10">
        <h2 class="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/45">
          Keep reading
        </h2>
        <ul class="mt-6 space-y-5">
          <li v-for="p in more" :key="p.slug">
            <router-link :to="`/writing/${p.slug}`" class="group block">
              <h3 class="font-display text-lg leading-snug transition-colors group-hover:text-kindred">
                {{ p.title }}
              </h3>
              <p class="mt-1 text-sm leading-relaxed text-ink/60">{{ p.excerpt }}</p>
            </router-link>
          </li>
        </ul>
      </nav>
    </main>

    <main v-else class="mx-auto max-w-3xl px-5 py-32 text-center sm:px-8">
      <h1 class="font-display text-3xl">That post doesn't exist</h1>
      <p class="mt-4 text-ink/65">It may have moved, or the link may be wrong.</p>
      <router-link
        to="/writing"
        class="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-dusk"
      >
        See all writing
      </router-link>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { getPost, getAllPosts, renderMarkdown, formatDate } from '@/content/posts'

const route = useRoute()
const post = computed(() => getPost(route.params.slug))
const html = computed(() => (post.value ? renderMarkdown(post.value.body) : ''))
const more = computed(() =>
  getAllPosts().filter((p) => p.slug !== route.params.slug).slice(0, 2),
)

// Posts can override the closing CTA in frontmatter. Awareness-stage pieces
// send people to the relationship check; everything else asks for the app.
const cta = computed(() => ({
  title:
    post.value?.ctaTitle ||
    'Kindred makes sure you never lose touch with the people who matter.',
  body:
    post.value?.ctaBody ||
    'It watches the gaps between you and the people you care about, and taps you on the shoulder before months turn into years.',
  label: post.value?.ctaLabel || 'Get Kindred',
  to: post.value?.ctaTo || '/#get-kindred',
}))

watchEffect(() => {
  document.title = post.value ? `${post.value.title} — Kindred` : 'Writing — Kindred'
})
</script>

<style scoped>
/* Long-form reading: generous measure, quiet rhythm, one accent. */
.post :deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.75;
  color: rgb(23 18 31 / 0.82);
  font-size: 1.075rem;
}

.post :deep(h2) {
  font-family: Fraunces, Georgia, serif;
  font-size: 1.6rem;
  line-height: 1.25;
  letter-spacing: -0.01em;
  margin-top: 3rem;
  margin-bottom: 1.1rem;
}

.post :deep(h3) {
  font-family: Fraunces, Georgia, serif;
  font-size: 1.25rem;
  margin-top: 2.25rem;
  margin-bottom: 0.75rem;
}

.post :deep(strong) {
  font-weight: 600;
  color: #17121f;
}

.post :deep(em) {
  font-style: italic;
}

.post :deep(a) {
  color: #6d5bd0;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.post :deep(ul),
.post :deep(ol) {
  margin: 0 0 1.5rem 1.25rem;
  color: rgb(23 18 31 / 0.82);
  line-height: 1.75;
}

.post :deep(ul) { list-style: disc; }
.post :deep(ol) { list-style: decimal; }
.post :deep(li) { margin-bottom: 0.6rem; padding-left: 0.25rem; }

.post :deep(blockquote) {
  border-left: 2px solid #7868e6;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-family: Fraunces, Georgia, serif;
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgb(23 18 31 / 0.75);
}

.post :deep(hr) {
  border: 0;
  border-top: 1px solid rgb(23 18 31 / 0.12);
  margin: 3rem 0;
}

.post :deep(code) {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9em;
  background: rgb(23 18 31 / 0.05);
  padding: 0.15em 0.4em;
  border-radius: 4px;
}
</style>
