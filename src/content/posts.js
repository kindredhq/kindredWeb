import { marked } from 'marked'

// Posts are plain markdown files with a small YAML-ish frontmatter block.
// Adding a post means dropping a .md file in ./blog — no registry to update.
const files = import.meta.glob('./blog/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    // Strip matching surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    data[key] = value
  }
  return { data, body: match[2] }
}

const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    return {
      // Spread first so known fields win, but optional frontmatter (ctaTitle,
      // ctaBody, ctaLabel, ctaTo) passes straight through to the post.
      ...data,
      slug: data.slug || path.split('/').pop().replace(/\.md$/, ''),
      title: data.title || 'Untitled',
      date: data.date || '',
      excerpt: data.excerpt || '',
      readingTime: readingTime(body),
      body,
    }
  })
  // Newest first
  .sort((a, b) => (a.date < b.date ? 1 : -1))

function readingTime(body) {
  const words = body.trim().split(/\s+/).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}

export function getAllPosts() {
  return posts
}

export function getPost(slug) {
  return posts.find((p) => p.slug === slug) || null
}

export function renderMarkdown(body) {
  return marked.parse(body, { mangle: false, headerIds: false })
}

export function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
