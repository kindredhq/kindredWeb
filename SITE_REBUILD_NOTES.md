# Kindred Site Rebuild — What Changed and What's Next

Working notes from the July 2026 relaunch. Read [ICP_AND_SITE_BRIEF.md](./ICP_AND_SITE_BRIEF.md)
first — it defines who the site is for and what may be claimed. This file is
the record of what got built and what is still open.

---

## Where things stand

**Live on `main`** (kindredhq/kindredWeb → Netlify). The site went from a
single waitlist page to a full product site with content, legal pages, pricing
and working checkout.

**Not yet deployed:** the Kindred server changes on `feat/pulse-and-env`
(kindredhq/KindredServer). That branch is deliberately separate — it targets
lab-core and lets us make backend changes without touching what is currently
serving the live app. See [LAB_MIGRATION.md](../kindredserver/LAB_MIGRATION.md).

---

## What was built

### Design system
- **Type:** Fraunces (display), Karla (body), IBM Plex Mono (data/eyebrows)
- **Colour:** warm `paper` base, `ink` for dark sections, `kindred` purple as
  the brand accent, `ember` and `drift` as a semantic pair (warm = in contact,
  cool = drifting)
- **`KindredMark.vue`** renders the logo inline with **colours and stroke
  weight locked to the brand artwork**. They are not props and must not become
  props. On dark surfaces the mark sits on a light chip rather than being
  recoloured. The only permitted variation is the beating heart.

### Homepage (`HomeView.vue`)
Built around the argument that the audience runs systems for everything except
their relationships. Section order matters — it maps to the buyer journey from
"I don't have this problem" to "book a call":

1. Hero — interactive app preview with cycling nudges (real dates, icons, no fake links)
2. Who it's for — three ICP profiles with the built-vs-managed gap as the visual anchor
3. **The mental cost** — the background attention that carrying it all consumes
4. **The emotional cost** — three specific, recognisable scenarios
5. Dunbar — the ~150 limit, drawn as a segmented bar, and why a system moves it
6. **How drift happens** — a timeline where the message physically grows from 6 to 61 words
7. **The technical cost** — the four-or-five-tool stack, and why it collapses
8. Nudge hub — scattered tools feeding in, Kindred nudges flowing out (purple out, grey in)
9. What one system does that five cannot
10. **Mental space** — a 100-unit attention grid, and what the reclaimed units buy
11. What we believe — systems are warmth, not coldness
12. How it works · relationship intelligence · features · not-a-CRM · privacy
13. Pricing · founding members · lead magnet · writing · FAQ · CTA

### Components worth knowing about
| Component | What it does |
|---|---|
| `AppPreview` | Hero app UI. Genuinely interactive (filters, row selection), zero fake links |
| `NudgeHub` | Tools → Kindred → people, with travelling pulses. Makes one pass then settles |
| `DunbarLayers` | The 150 limit as a segmented bar, animates on scroll |
| `DriftStages` | Timeline showing the message growing over time |
| `MentalSpace` | 100-unit attention grid. **Reuse this for the assessment results** |
| `CtaBand` | Stage-matched CTA, light or dark |
| `KindredMark` | Brand-locked logo |
| `AppIcon` | Icon set (call, message, birthday, family, work, strength, etc.) |

### Content
- File-based markdown blog at `/writing` — drop a `.md` in `src/content/blog/`
- Four posts. **"The five-name test"** is the awareness-stage entry point and
  routes to the assessment rather than the app
- Posts can override their closing CTA via frontmatter (`ctaTitle`, `ctaBody`,
  `ctaLabel`, `ctaTo`)

### Legal
- **Terms of Use** created at `/terms` (did not previously exist)
- **Privacy policy** restyled, plus two sections added:
  - **§16 Google API Services** — the Limited Use disclosure Google requires.
    Kindred requests `gmail.readonly`, `gmail.send`, `gmail.compose` — restricted
    scopes. This also corrected §1, which wrongly claimed metadata-only access
  - **§17 Subprocessors** — Anthropic, Google Cloud, Firebase, Twilio, Loops,
    with what each sees. States plainly that nudges and the assistant send
    contact names, notes and history to Anthropic

### Pricing and payments
| Tier | Price | For |
|---|---|---|
| Free | $0 | 3 relationships, 5 nudges/week — mirrors `limits.go` |
| Plus | $19/mo · $190/yr | Consumers who want more |
| Pro | $49/mo · $490/yr | Professionals — the ICP, highlighted tier |
| Founding | price TBD | First 50, by application, locked for life |

- Stripe Payment Links wired to Plus and Pro
- Cal.com (`cal.com/trykindredapp/demo`) for demos and founding applications
- Founding priced **annually, not one-time** — nudges and chat are per-user
  inference costs, so a lifetime fee would buy a permanent liability

### Assessment (`/roi-calculator`)
Restyled onto site tokens, shared nav and footer, now 8 questions. The results
page was rebuilt separately — see below.

---

## Claims removed (and why this matters)

A recurring theme. The following were on the site and are now gone because they
could not be supported:

- "Currently serving 97 elite executives" — invented user count
- `DemoAvailabilityBanner` — **randomly generated** "spots remaining" each day,
  plus hardcoded viewer counts under a pulsing LIVE badge
- `getPercentileText` returning "Top 1%" / "Top 10%" from a hardcoded lookup
  with no population to rank against
- Five variants of "you're in the top 5% of professionals"
- "With Kindred, top performers maintain 180-250+ key relationships"
- "Early adopter pricing (50% off)" — a discount that does not exist
- "Most people in this ICP…" — internal jargon leaked into customer-facing copy

**Rule going forward:** no user counts, no percentiles, no outcome statistics,
no scarcity we do not actually track. Scenarios are fine; statistics are not.
Dunbar is citable because it is real published research.

---

## Done: mental load in the assessment

Shipped 2026-07-30. The assessment answered "what is this costing me?" only in
money, which is the weaker half — people discount a dollar figure a stranger
calculated for them. Attention they can check against their own week, and
recognition converts better than argument.

### The model
`kindredserver/pkg/services/mental_load.go`. Attention out of 100 units,
matching the grid `MentalSpace.vue` uses on the homepage, so the same picture
appears either side of the click.

| Input | Feeds |
|---|---|
| `active_maintained` | the carry — saturating, never runaway |
| `lost_contacts` | the debt — people you know you have dropped |
| `mental_load_frequency` *(new question)* | intrusion — the direct measure |
| `last_outreach` | staleness multiplier, 0.85–1.25 |

Output: occupied / free / residual / reclaimed, plus named bands that always
sum to 100. Ceiling of 78 so it never claims someone has nothing left.

**It is a model, not a measurement.** The response carries a `note` saying so
and the UI always renders it. Do not remove that.

**The new question** — "How often does a name pop into your head that you feel
you should reach out to?" — is step 4 of 8. It is the only question that
measures the cost directly rather than inferring it, and people answer honestly
because there is no right answer to perform. Optional on the wire so older
clients keep working; a blank scores as the **middle** case, never the worst.

### What it touched
- `055_add_mental_load_to_assessments.sql` — two nullable columns. Pre-2026-07
  rows have no honest value to backfill, so the results page omits the section
  rather than invent one
- `models.MentalLoad` + JSONB round-trip, 4 SELECTs, the INSERT, the validator
- Loops now gets `mental_load_occupied` / `_reclaimed` / `_level` as merge fields
- `MentalLoadCard.vue` leads the results page

### Verified end to end
Real Go server against the local `kindred` DB, real form submission, real
round-trip out of Postgres — matching the unit tests exactly (54 occupied /
47 reclaimed / 93 free for the reference founder). Run with
`LOOPS_API_KEY=dev-invalid-no-outbound` so no email is sent; two
`@example.invalid` rows are in the dev DB from those runs.

**Note for anyone testing this:** `CreateAssessment` spawns a goroutine that
calls Loops *and sends a real email*. Always override the key locally.

---

## Results page rebuild

The results page had never actually been restyled — only the questionnaire had.
It was still on the pre-rebuild palette: `bg-red-50` / `bg-orange-50` cost rows,
`text-blue-900` / `text-purple-900` insight headings, emoji-led action items,
`bg-opacity` + `backdrop-blur` panels, and three components
(`TierBreakdownCard`, `YearComparison`, `StrategicFocusCard`) that were entirely
gradient-and-slate. All now on paper/ink/kindred with Fraunces + Plex Mono.

**Bugs found while doing it:**
- `priorityOrder[a.priority] || 4` — `critical` maps to `0`, and `0 || 4` is
  `4`, so the **most valuable tier sorted last**, contradicting the copy above
  it. Now `?? 4`
- Seven-figure currency at `text-5xl` in a half-width column overflowed on
  mobile. Compact format + responsive sizing
- The `% of portfolio` label sat *inside* the bar fill, so narrow tiers clipped it
- Insight strings divided by 1000 unconditionally, printing **`$6423K`**. Added
  `compactMoney` → `$6.4M`

**The money/warmth balance.** Henry: *"the report a bit too money focus."* The
page now leads with attention, and carries a deliberately number-free section —
*"The people who never show up in a figure like that"* — about family, old
friends and mentors. Step 2 of the action plan is the same at every score:
write down five people no deal depends on. The `lost_contacts` question was
reframed to include them, which is safe because that field feeds **no** money
calculation — only the attention model.

---

## Also open

**Site**
- Founding membership price undecided
- Results-page hero still says "Your Network Analysis" in one mid-page heading;
  the rest now leads with attention
- The assessment still asks for a deal value up front, which sets a
  transactional tone before the attention question lands. Worth testing the
  reverse order
- Founding members page is promised in copy but does not exist
- Three older blog posts still in the pre-ICP voice
- 39 dependabot vulnerabilities (pre-existing, from the old Vue/Vite tree)

**Product / compliance**
- **`gmail.readonly` and `gmail.send` are restricted scopes** — Google requires
  a third-party security assessment (CASA) annually for production. Check the
  Cloud Console verification status before public launch. Consider whether
  `gmail.send`/`compose` are needed at all, since the site says Kindred does not
  write messages for you
- Payment → access is manual. No webhook yet (the MarkShare pattern can be reused)
- `limits.go` has Plus nudges at `-1` (unlimited). Intent is to cap them —
  the site copy deliberately avoids the word "unlimited" for Plus nudges so the
  two do not contradict
- AI allowances are described on the site but not metered per-user anywhere in
  the server, so Pro and founding currently behave identically
- Terms and privacy need a lawyer, plus entity name, address and governing law
- Confirm the Anthropic no-training claim matches your actual agreement

**Server (`feat/pulse-and-env`, unmerged)**
- Rotate the four exposed keys — they are in git history
- Then provision Kindred on lab-core and flip `PULSE_ENABLED` on
