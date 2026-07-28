<template>
  <div class="min-h-screen bg-paper font-sans text-ink antialiased">
    <SiteNav />

    <!-- ── Hero ────────────────────────────────────────────────────────── -->
    <section class="px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
      <div class="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
            A relationship system for founders, operators and executives
          </p>

          <h1 class="mt-5 font-display text-[2.4rem] font-medium leading-[1.06] tracking-[-0.02em] sm:text-[3.1rem] lg:text-[3.5rem]">
            You'd never run your pipeline on memory.<br />
            <span class="text-kindred">So why your relationships?</span>
          </h1>

          <p class="mt-7 max-w-lg text-lg leading-relaxed text-ink/70">
            Every other important thing in your life has a system behind it. The
            people who got you here have your good intentions and nothing else.
            Kindred tracks how often you actually want to be in touch with
            someone, notices when it has been too long, and tells you while it
            still takes four words to fix.
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#get-kindred"
              class="rounded-full bg-ink px-7 py-3.5 text-center font-medium text-paper transition-colors hover:bg-dusk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kindred"
            >
              Get Kindred
            </a>
            <a
              href="#how-it-works"
              class="rounded-full border border-ink/20 px-7 py-3.5 text-center font-medium text-ink/80 transition-colors hover:border-ink/40 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kindred"
            >
              See how it works
            </a>
          </div>

          <p class="mt-6 font-mono text-xs text-ink/40">
            Free to start · Your data stays yours
          </p>
        </div>

        <div>
          <AppPreview />
          <p class="mt-4 pl-1 font-mono text-xs text-ink/40">
            Illustrative — not real contacts.
          </p>
        </div>
      </div>
    </section>

    <!-- ── Who it's for ────────────────────────────────────────────────── -->
    <section class="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <h2 class="max-w-3xl font-display text-3xl leading-[1.12] tracking-[-0.01em] sm:text-[2.7rem]">
          You have built hundreds of relationships.<br class="hidden sm:block" />
          You are actively managing a couple of dozen.
        </h2>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
          Not because you stopped caring — because a couple of dozen is roughly
          what a person can hold without help. Everyone past that number is
          running on luck and on whoever happened to email you this week.
        </p>

        <div class="mt-14 grid gap-6 lg:grid-cols-3">
          <article
            v-for="who in audience"
            :key="who.role"
            class="flex flex-col rounded-2xl border border-ink/10 bg-white p-7 sm:p-8"
          >
            <p class="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-kindred">
              {{ who.role }}
            </p>

            <!-- The gap, as the visual anchor -->
            <div class="mt-6 flex items-end gap-5 border-b border-ink/10 pb-6">
              <div>
                <p class="font-display text-4xl leading-none tracking-tight sm:text-[2.6rem]">
                  {{ who.built }}
                </p>
                <p class="mt-2 font-mono text-[0.6rem] uppercase leading-snug tracking-wide text-ink/45">
                  {{ who.builtLabel }}
                </p>
              </div>
              <div class="pb-1 font-mono text-lg text-ink/25" aria-hidden="true">vs</div>
              <div>
                <p class="font-display text-4xl leading-none tracking-tight text-drift sm:text-[2.6rem]">
                  {{ who.managed }}
                </p>
                <p class="mt-2 font-mono text-[0.6rem] uppercase leading-snug tracking-wide text-ink/45">
                  actively managed
                </p>
              </div>
            </div>

            <h3 class="mt-6 font-display text-xl leading-snug">{{ who.headline }}</h3>
            <p class="mt-3 flex-1 leading-relaxed text-ink/65">{{ who.pain }}</p>

            <!-- What it actually costs -->
            <div class="mt-6 rounded-xl bg-ember/[0.09] px-4 py-3.5">
              <p class="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[#A8632C]">
                What it costs
              </p>
              <p class="mt-1.5 text-[0.95rem] font-medium leading-snug text-ink/85">
                {{ who.cost }}
              </p>
            </div>
          </article>
        </div>

        <p class="mt-12 max-w-3xl border-l-2 border-kindred pl-6 text-lg leading-relaxed text-ink/80">
          And those same few slots have to hold your family too. The people who would never
          chase you are the ones most likely to slip — which is why a tool that
          only covers your professional network has solved the easier half of the
          problem.
        </p>

        <!-- Stage 1: they do not yet believe they have a problem. Measure it. -->
        <div class="mt-14">
          <CtaBand
            eyebrow="Free · 2 minutes · no account"
            title="Put a number on it before you read any further."
            body="The calculator shows what dormant relationships are actually costing you, which layers have thinned out, and who is most likely to slip in the next six months."
            :primary="{ to: '/roi-calculator', label: 'Calculate what you are losing' }"
          />
        </div>
      </div>
    </section>

    <!-- ── The cost ────────────────────────────────────────────────────── -->
    <section class="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
          The mental cost
        </p>
        <h2 class="mt-5 max-w-3xl font-display text-3xl leading-[1.14] tracking-[-0.01em] sm:text-[2.6rem]">
          Carrying it all in your head is the part nobody bills you for.
        </h2>

        <div class="mt-8 grid max-w-4xl gap-6 text-lg leading-relaxed text-ink/70 sm:grid-cols-2 sm:gap-10">
          <p>
            There is a low hum that comes with knowing there are people you owe a
            message. You cannot name all of them, which is exactly why the feeling
            never resolves — it is not a task list you can finish, it is a vague
            debt you carry into every quiet moment.
          </p>
          <p>
            So it costs you twice. Once in the background attention it takes to
            half-remember two hundred people, and again in the small dread that
            arrives when a name finally surfaces and the honest answer to
            <em>how long has it been?</em> is a number you would rather not say.
          </p>
        </div>

        <!-- The emotional cost, made specific -->
        <h3 class="mt-16 font-display text-2xl leading-snug sm:text-[1.9rem]">
          And then there is the part that actually hurts.
        </h3>
        <p class="mt-4 max-w-2xl leading-relaxed text-ink/65">
          Missing a commitment to someone who mattered is not a productivity
          problem. You already know which names these are.
        </p>

        <div class="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-10">
          <article v-for="c in cases" :key="c.title">
            <p class="font-mono text-sm" :style="{ color: c.color }">{{ c.elapsed }}</p>
            <h3 class="mt-4 font-display text-xl leading-snug">{{ c.title }}</h3>
            <p class="mt-3 leading-relaxed text-ink/65">{{ c.body }}</p>
          </article>
        </div>

        <div class="mt-14 max-w-3xl border-l-2 border-kindred pl-6">
          <p class="text-lg leading-relaxed text-ink/80">
            Nobody has ever been comforted by <em>I was busy</em>. The apology
            costs more than the message would have, and it does not buy back the
            wedding you heard about afterwards or the year your father was ill and
            nobody told you because you had not asked.
          </p>
          <p class="mt-4 text-lg leading-relaxed text-ink/80">
            None of it happened because you stopped caring. It happened because
            caring was the only system you had.
          </p>
        </div>
      </div>
    </section>

    <!-- ── The science: why this happens at all ────────────────────────── -->
    <section class="border-t border-ink/10 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
          Why this happens to everyone
        </p>
        <h2 class="mt-5 max-w-3xl font-display text-3xl leading-[1.14] tracking-[-0.01em] sm:text-[2.6rem]">
          There is a hard limit on how many relationships a brain can carry.
          It is about 150.
        </h2>
        <div class="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/70">
          <p>
            In the 1990s the anthropologist Robin Dunbar found that the size of
            a primate's neocortex predicts the size of the group it can hold
            together. Run the numbers for humans and you get roughly
            <strong class="font-semibold text-ink">150 stable relationships</strong> —
            and inside that, tighter layers: about 50 good friends, about 15
            close ones, about 5 you would call at 2am.
          </p>
          <p>
            The layers are not a personality trait. They are a
            <strong class="font-semibold text-ink">memory constraint</strong>.
            You forget who you have not spoken to, so the people who never chase
            you fall out first — and the ones who fall out are almost never the
            ones you would have chosen to lose.
          </p>
        </div>

        <div class="mt-16">
          <DunbarLayers />
        </div>

        <!-- The turn -->
        <div class="mt-16 rounded-2xl bg-ink px-7 py-10 text-paper sm:px-12 sm:py-12">
          <h3 class="max-w-3xl font-display text-2xl leading-snug sm:text-[2rem]">
            Dunbar's number is a limit on unaided memory. Not on how much you
            can care.
          </h3>
          <div class="mt-6 grid gap-6 text-paper/70 sm:grid-cols-2 sm:gap-10">
            <p class="leading-relaxed">
              Writing did not make anyone smarter — it moved the ceiling on what
              a person could remember. Contact lists did the same thing for
              phone numbers: nobody memorises them any more, and nobody
              considers that a loss.
            </p>
            <p class="leading-relaxed">
              The 150 has never moved because nothing ever took the remembering
              off you. That is the entire job Kindred does. Keep your five and
              your fifteen genuinely close, and stop losing the hundreds past
              them by accident.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── How drift actually happens ──────────────────────────────────── -->
    <section class="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
          How it actually happens
        </p>
        <h2 class="mt-5 max-w-3xl font-display text-3xl leading-[1.14] tracking-[-0.01em] sm:text-[2.6rem]">
          It never happens all at once. It happens in the gap between meaning to
          call and calling.
        </h2>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
          Nobody decides to let a friendship go. What actually happens is that
          the message gets heavier every week you do not send it — and the
          heavier it gets, the less likely you are to send it. Watch what you
          have to write:
        </p>

        <div class="mt-14">
          <DriftStages />
        </div>

        <p class="mt-12 max-w-3xl border-l-2 border-kindred pl-6 text-lg leading-relaxed text-ink/80">
          This is the entire opportunity. The fix at week two is trivial and
          takes eleven seconds. The only reason it does not happen is that
          nothing in your life reminds you while it is still eleven seconds long.
        </p>
      </div>
    </section>

    <!-- ── The solution, drawn ─────────────────────────────────────────── -->
    <section class="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-5xl">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
          The technical cost
        </p>
        <h2 class="mt-5 max-w-2xl font-display text-3xl leading-tight tracking-[-0.01em] sm:text-[2.6rem]">
          Five apps doing a bad job of one thing.
        </h2>
        <div class="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/70">
          <p>
            You have noticed this problem already. Most people in your position
            have — which is why you are probably running a system of four or five
            tools taped together right now. Birthdays on Facebook. Follow-ups in
            Reminders. What someone told you last time in a note you will never
            find again. Maybe a spreadsheet you were proud of for three weeks.
          </p>
          <p>
            The trouble is that none of them know about each other. Logging one
            coffee means opening three apps, so eventually you stop logging. The
            spreadsheet goes stale the moment it needs maintaining more than it
            repays. And because nothing holds the whole picture, no tool in the
            stack can answer the only question you actually have:
            <strong class="font-semibold text-ink">who needs me this week?</strong>
          </p>
          <p>
            So the system quietly collapses back into memory — which is where it
            started, and the thing it was built to replace.
          </p>
        </div>

        <div class="mt-14 rounded-2xl border border-ink/10 bg-paper p-6 sm:p-10">
          <NudgeHub />
        </div>

        <!-- What one system buys you that five cannot -->
        <div class="mt-16">
          <h3 class="max-w-2xl font-display text-2xl leading-snug sm:text-[2rem]">
            What one system does that five never can.
          </h3>
          <p class="mt-4 max-w-2xl leading-relaxed text-ink/65">
            The difference is not tidiness. It is that a single system can do
            four things your stack is structurally incapable of.
          </p>

          <div class="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div v-for="v in valueAdd" :key="v.title" class="flex gap-4">
              <span class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-kindred/10 text-kindred">
                <AppIcon :name="v.icon" class="h-[1.15rem] w-[1.15rem]" />
              </span>
              <div>
                <h4 class="font-display text-lg leading-snug">{{ v.title }}</h4>
                <p class="mt-1.5 leading-relaxed text-ink/65">{{ v.body }}</p>
              </div>
            </div>
          </div>

          <p class="mt-10 max-w-3xl border-l-2 border-kindred pl-6 text-lg leading-relaxed text-ink/80">
            Your calendar can tell you it is someone's birthday. Only a system
            that also knows you have not spoken in five months, that she asked
            about your father last time, and that you always call on Sundays can
            tell you what to actually do about it.
          </p>
        </div>
      </div>
    </section>

    <!-- ── The real benefit: mental space ──────────────────────────────── -->
    <section class="border-t border-ink/10 bg-gradient-to-b from-kindred/[0.06] via-transparent to-transparent px-5 py-20 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-5xl">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
          What you actually get back
        </p>
        <h2 class="mt-5 max-w-3xl font-display text-3xl leading-[1.14] tracking-[-0.01em] sm:text-[2.6rem]">
          The point was never a tidier contact list. It is the head space.
        </h2>
        <div class="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/70">
          <p>
            Every relationship you are managing badly takes up room. Not time —
            room. A background process that never quite closes: who you owe, how
            long it has been, what you promised, which app you wrote it in.
          </p>
          <p>
            Hand that to a system and you get the units back. And what you spend
            them on is the real return:
            <strong class="font-semibold text-ink">the capacity to take on
            something hard and new</strong> without the quiet certainty that it
            will cost you the people who got you here. That trade — ambition
            against relationships — is one most people just accept. It is not
            actually necessary.
          </p>
        </div>

        <div class="mt-14 rounded-2xl border border-ink/10 bg-white p-6 sm:p-9">
          <MentalSpace />
        </div>

        <!-- Stage 2: cost established, so now ask for the conversation. -->
        <div class="mt-14">
          <CtaBand
            dark
            eyebrow="20 minutes with the founder"
            title="See it running against your own network."
            body="We set Kindred up with you on the call — your circles, your cadences, the twenty people you cannot afford to lose. You will know inside twenty minutes whether it is for you."
            :primary="{ to: demoLink, label: 'Book a demo call', external: true }"
            :secondary="{ to: '/roi-calculator', label: 'Or take the 2-minute test' }"
          />
        </div>
      </div>
    </section>

    <!-- ── What we believe ─────────────────────────────────────────────── -->
    <section class="bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28">
      <div class="mx-auto max-w-3xl">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/40">
          What we believe
        </p>
        <h2 class="mt-6 font-display text-[1.9rem] leading-[1.28] tracking-[-0.01em] sm:text-[2.4rem]">
          A system for your relationships isn't cold. It's how warmth survives a
          busy decade.
        </h2>
        <!-- The objection, then the answer -->
        <p class="mt-8 max-w-2xl text-xl leading-relaxed text-paper/80">
          The objection is always the same:
          <span class="italic text-paper">"but reaching out should be spontaneous."</span>
        </p>

        <div class="mt-10 grid gap-5 sm:grid-cols-3">
          <div
            v-for="ex in deliberate"
            :key="ex.thing"
            class="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
          >
            <p class="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-paper/40">
              {{ ex.thing }}
            </p>
            <p class="mt-3 text-[1.05rem] leading-snug text-paper">{{ ex.scheduled }}</p>
            <p class="mt-3 text-sm leading-relaxed text-paper/55">{{ ex.verdict }}</p>
          </div>
        </div>

        <div class="mt-12 max-w-2xl space-y-5 text-lg leading-relaxed text-paper/70">
          <p>
            Everywhere else in life we accept that the things we care about most
            are the things we are most deliberate about. Then we get to
            friendship and the rule flips — so the most valuable relationships
            you have end up being the only ones with no system behind them,
            competing for attention against everything that pings.
          </p>
        </div>

        <!-- The heart, alone -->
        <div class="mt-14 flex flex-col items-center text-center">
          <svg viewBox="0 0 815 814" class="h-12 w-12" aria-hidden="true">
            <path
              class="lone-heart"
              d="M557.033 439.616L406.462 590L266.604 450.315L255.967 439.616C217.344 401.041 217.344 338.507 255.967 299.932C275.279 280.644 300.55 271 325.821 271C351.168 271 376.439 280.644 395.75 299.932L406.462 310.63L417.174 299.932C436.486 280.644 461.757 271 487.103 271C512.45 271 537.721 280.644 557.033 299.932C595.656 338.507 595.656 401.041 557.033 439.616Z"
              fill="#7868E6"
            />
          </svg>
          <p class="mt-6 max-w-2xl font-display text-xl leading-relaxed text-paper sm:text-2xl">
            Being deliberate about people is not the opposite of caring about
            them. For anyone with a demanding decade ahead, it is the only
            version of caring that actually holds.
          </p>
        </div>
      </div>
    </section>

    <!-- ── How it works ────────────────────────────────────────────────── -->
    <section id="how-it-works" class="px-5 py-20 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-6xl">
        <h2 class="max-w-2xl font-display text-3xl leading-tight tracking-[-0.01em] sm:text-[2.5rem]">
          Set the cadence. Kindred keeps the books.
        </h2>
        <p class="mt-5 max-w-xl leading-relaxed text-ink/65">
          Ten minutes to set up. After that it runs in the background and asks
          for a few seconds a day.
        </p>

        <div class="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-10">
          <div v-for="(step, i) in steps" :key="step.title">
            <p class="font-mono text-sm text-ink/35">Step {{ i + 1 }}</p>
            <h3 class="mt-3 font-display text-xl leading-snug">{{ step.title }}</h3>
            <p class="mt-3 leading-relaxed text-ink/65">{{ step.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Relationship intelligence ───────────────────────────────────── -->
    <section class="border-t border-ink/10 bg-gradient-to-b from-kindred/[0.05] to-transparent px-5 py-20 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
          Relationship intelligence
        </p>
        <h2 class="mt-5 max-w-3xl font-display text-3xl leading-tight tracking-[-0.01em] sm:text-[2.6rem]">
          You shouldn't have to guess the right rhythm. It learns the one you already keep.
        </h2>
        <p class="mt-5 max-w-2xl leading-relaxed text-ink/65">
          Setting a cadence by hand for two hundred people is its own chore. So
          Kindred reads how you actually behave — who you call, how often, how
          quickly you reply — and does most of the work for you.
        </p>

        <div class="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <ul class="space-y-8">
            <li v-for="item in intelligence" :key="item.title" class="flex gap-4">
              <span class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-kindred shadow-[0_1px_2px_rgba(23,18,31,0.05)]">
                <AppIcon :name="item.icon" class="h-5 w-5" />
              </span>
              <div>
                <h3 class="font-display text-lg leading-snug">{{ item.title }}</h3>
                <p class="mt-1.5 leading-relaxed text-ink/65">{{ item.body }}</p>
              </div>
            </li>
          </ul>

          <!-- Relationship strength, shown rather than described -->
          <div class="self-start rounded-2xl border border-ink/10 bg-white p-6 sm:p-7">
            <div class="flex items-baseline justify-between">
              <h3 class="font-display text-lg">Relationship strength</h3>
              <span class="font-mono text-[0.65rem] uppercase tracking-wide text-ink/40">
                this month
              </span>
            </div>

            <ul class="mt-6 space-y-5">
              <li v-for="s in strengths" :key="s.name">
                <div class="flex items-baseline justify-between gap-3">
                  <span class="text-sm font-medium text-ink">{{ s.name }}</span>
                  <span class="font-mono text-xs" :style="{ color: s.color }">{{ s.state }}</span>
                </div>
                <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/[0.07]">
                  <div
                    class="h-full rounded-full transition-all duration-700"
                    :style="{ width: `${s.value}%`, backgroundColor: s.color }"
                  ></div>
                </div>
                <p class="mt-1.5 font-mono text-[0.62rem] text-ink/40">{{ s.note }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Features ────────────────────────────────────────────────────── -->
    <section class="border-t border-ink/10 bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <h2 class="max-w-2xl font-display text-3xl leading-tight tracking-[-0.01em] sm:text-[2.5rem]">
          What's in it
        </h2>
        <p class="mt-5 max-w-xl leading-relaxed text-ink/65">
          Everything below is in the app today.
        </p>

        <div class="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="f in features" :key="f.title" class="flex gap-4">
            <span class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-paper text-ink/70">
              <AppIcon :name="f.icon" class="h-[1.1rem] w-[1.1rem]" />
            </span>
            <div>
              <h3 class="font-display text-base leading-snug">{{ f.title }}</h3>
              <p class="mt-1.5 text-[0.95rem] leading-relaxed text-ink/65">{{ f.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Not a CRM ───────────────────────────────────────────────────── -->
    <section class="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-24">
      <div class="mx-auto max-w-5xl">
        <h2 class="max-w-3xl font-display text-3xl leading-[1.14] tracking-[-0.01em] sm:text-[2.5rem]">
          Your CRM manages your customers. Kindred manages your network.
          You need both.
        </h2>
        <p class="mt-5 max-w-2xl leading-relaxed text-ink/65">
          It's the first question people ask, so here's the honest answer. If you
          run a CRM at work, keep it — it is very good at the job it was built
          for. That job is simply not this one, and the difference is not
          features. It is who the tool belongs to and what it is counting.
        </p>

        <!-- A real table: it is tabular data, and the header cells give both
             sighted readers and screen readers the column they belong to.
             Scrolls inside its own container on narrow screens. -->
        <div class="mt-12 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table class="w-full min-w-[40rem] border-separate border-spacing-0 text-left">
            <caption class="sr-only">
              How a CRM and Kindred differ across purpose, contents, ownership, prompts and success
            </caption>
            <thead>
              <tr>
                <th scope="col" class="rounded-tl-2xl border-b border-l border-t border-ink/10 bg-ink/[0.03] px-6 py-4 sm:px-8">
                  <span class="sr-only">What we're comparing</span>
                </th>
                <th
                  scope="col"
                  class="border-b border-t border-ink/10 bg-ink/[0.03] px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink/50 sm:px-8"
                >
                  A CRM
                </th>
                <th
                  scope="col"
                  class="rounded-tr-2xl border-b border-r border-t border-ink/10 bg-ink/[0.03] px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-kindred sm:px-8"
                >
                  Kindred
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in comparison" :key="row.dimension">
                <th
                  scope="row"
                  class="border-b border-l border-ink/10 px-6 py-5 align-top font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink/45 sm:px-8"
                  :class="i === comparison.length - 1 ? 'rounded-bl-2xl' : ''"
                >
                  {{ row.dimension }}
                </th>
                <td class="border-b border-ink/10 px-6 py-5 align-top leading-relaxed text-ink/55 sm:px-8">
                  {{ row.crm }}
                </td>
                <td
                  class="border-b border-r border-ink/10 px-6 py-5 align-top font-medium leading-relaxed text-ink sm:px-8"
                  :class="i === comparison.length - 1 ? 'rounded-br-2xl' : ''"
                >
                  {{ row.kindred }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="mt-8 max-w-2xl leading-relaxed text-ink/65">
          The sharpest version: your CRM belongs to your employer and stays
          there when you leave. Kindred is relationship capital you own and carry
          between companies for the rest of your career. Which is exactly why
          your mentor, your first investor and your oldest friend all belong in
          it — and your open opportunities don't.
        </p>
      </div>
    </section>

    <!-- ── Privacy ─────────────────────────────────────────────────────── -->
    <section class="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-24">
      <div class="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[1fr_1.2fr] sm:gap-16">
        <div>
          <h2 class="font-display text-3xl leading-tight tracking-[-0.01em] sm:text-[2.2rem]">
            Yours, and only yours
          </h2>
        </div>
        <div class="space-y-4 leading-relaxed text-ink/65">
          <p>
            Kindred has no advertising business and never will. That single
            decision settles most of the questions people ask about data, so
            here are the answers in plain terms.
          </p>
          <ul class="space-y-3">
            <li v-for="point in privacy" :key="point" class="flex gap-3">
              <span class="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-kindred" aria-hidden="true"></span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── Pricing ─────────────────────────────────────────────────────── -->
    <section id="pricing" class="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-24">
      <div class="mx-auto max-w-5xl">
        <h2 class="font-display text-3xl leading-tight tracking-[-0.01em] sm:text-[2.5rem]">
          Pricing
        </h2>
        <p class="mt-5 max-w-xl leading-relaxed text-ink/65">
          Start free and stay free if the free tier fits. Plus is for people
          managing a real network.
        </p>

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          <div class="flex flex-col rounded-2xl border border-ink/10 bg-white p-7 sm:p-8">
            <h3 class="font-display text-xl">Free</h3>
            <p class="mt-2 font-mono text-2xl">$0</p>
            <p class="mt-1 font-mono text-xs text-ink/45">to see if the habit sticks</p>
            <ul class="mt-6 flex-1 space-y-2.5 text-ink/70">
              <li v-for="item in freeTier" :key="item">{{ item }}</li>
            </ul>
            <a
              href="#get-kindred"
              class="mt-7 rounded-full border border-ink/20 py-3 text-center font-medium text-ink transition-colors hover:border-ink/40"
            >
              Start free
            </a>
          </div>

          <div class="flex flex-col rounded-2xl border-2 border-kindred bg-white p-7 sm:p-8">
            <div class="flex items-baseline justify-between gap-4">
              <h3 class="font-display text-xl">Plus</h3>
              <span class="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-kindred">
                Full system
              </span>
            </div>
            <p class="mt-2 font-mono text-2xl">
              $19.99<span class="text-base text-ink/50">/mo</span>
            </p>
            <p class="mt-1 font-mono text-xs text-ink/45">or $199/year</p>
            <ul class="mt-6 flex-1 space-y-2.5 text-ink/70">
              <li v-for="item in plusTier" :key="item">{{ item }}</li>
            </ul>
            <a
              href="#get-kindred"
              class="mt-7 rounded-full bg-ink py-3 text-center font-medium text-paper transition-colors hover:bg-dusk"
            >
              Get Plus
            </a>
          </div>

          <div class="flex flex-col rounded-2xl border border-ink/10 bg-ink p-7 text-paper sm:p-8">
            <div class="flex items-baseline justify-between gap-4">
              <h3 class="font-display text-xl">Pro</h3>
              <span class="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-kindred-300">
                Network intelligence
              </span>
            </div>
            <p class="mt-2 font-mono text-2xl">
              $49<span class="text-base text-paper/50">/mo</span>
            </p>
            <p class="mt-1 font-mono text-xs text-paper/45">for people whose network is the job</p>
            <ul class="mt-6 flex-1 space-y-2.5 text-paper/75">
              <li v-for="item in proTier" :key="item">{{ item }}</li>
            </ul>
            <a
              href="#get-kindred"
              class="mt-7 rounded-full bg-paper py-3 text-center font-medium text-ink transition-colors hover:bg-white"
            >
              Talk to us about Pro
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Lead magnet ─────────────────────────────────────────────────── -->
    <section class="border-t border-ink/10 bg-gradient-to-b from-kindred/[0.06] to-transparent px-5 py-20 sm:px-8 sm:py-24">
      <div class="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
            Free · 2 minutes · No account
          </p>
          <h2 class="mt-5 font-display text-3xl leading-[1.14] tracking-[-0.01em] sm:text-[2.5rem]">
            Find out which relationships you are quietly losing.
          </h2>
          <p class="mt-5 max-w-xl leading-relaxed text-ink/70">
            Answer a few questions about how you actually keep in touch and get
            your Network Health Score — where your time is going, which layers
            have thinned out, and the specific people most likely to slip in the
            next six months.
          </p>
          <router-link
            to="/roi-calculator"
            class="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition-colors hover:bg-dusk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kindred"
          >
            Get your score
          </router-link>
        </div>

        <div class="rounded-2xl border border-ink/10 bg-white p-7 sm:p-8">
          <p class="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink/45">
            Network health score
          </p>
          <p class="mt-4 font-display text-6xl leading-none tracking-tight">
            <span class="text-ink">—</span><span class="text-2xl text-ink/35">/100</span>
          </p>
          <ul class="mt-7 space-y-3.5">
            <li v-for="row in scorePreview" :key="row.label" class="flex items-center gap-3">
              <AppIcon :name="row.icon" class="h-4 w-4 shrink-0 text-ink/40" />
              <span class="flex-1 text-sm text-ink/70">{{ row.label }}</span>
              <span class="font-mono text-xs text-ink/30">—</span>
            </li>
          </ul>
          <p class="mt-7 font-mono text-[0.62rem] leading-relaxed text-ink/40">
            Your answers stay yours. Nothing is shared or sold.
          </p>
        </div>
      </div>
    </section>

    <!-- ── Writing ─────────────────────────────────────────────────────── -->
    <section class="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <div class="flex items-end justify-between gap-6">
          <h2 class="font-display text-3xl leading-tight tracking-[-0.01em] sm:text-[2.4rem]">
            Writing
          </h2>
          <router-link
            to="/writing"
            class="shrink-0 pb-1 text-sm text-ink/50 transition-colors hover:text-kindred"
          >
            All posts →
          </router-link>
        </div>

        <ul class="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          <li v-for="post in latestPosts" :key="post.slug">
            <router-link
              :to="`/writing/${post.slug}`"
              class="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <time class="shrink-0 font-mono text-xs text-ink/40 sm:w-28" :datetime="post.date">
                {{ formatDate(post.date) }}
              </time>
              <div class="min-w-0">
                <h3 class="font-display text-xl leading-snug transition-colors group-hover:text-kindred">
                  {{ post.title }}
                </h3>
                <p class="mt-1.5 leading-relaxed text-ink/60">{{ post.excerpt }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>

    <!-- ── FAQ ─────────────────────────────────────────────────────────── -->
    <section class="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-24">
      <div class="mx-auto max-w-3xl">
        <h2 class="font-display text-3xl leading-tight tracking-[-0.01em] sm:text-[2.5rem]">
          Questions
        </h2>

        <dl class="mt-12 divide-y divide-ink/10 border-t border-ink/10">
          <div v-for="(item, i) in faq" :key="item.q" class="py-5">
            <dt>
              <button
                type="button"
                class="flex w-full items-start justify-between gap-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kindred"
                :aria-expanded="openFaq === i"
                :aria-controls="`faq-${i}`"
                @click="openFaq = openFaq === i ? null : i"
              >
                <span class="font-display text-lg leading-snug">{{ item.q }}</span>
                <span
                  class="mt-1 shrink-0 font-mono text-lg text-ink/40 transition-transform"
                  :class="openFaq === i ? 'rotate-45' : ''"
                  aria-hidden="true"
                >+</span>
              </button>
            </dt>
            <dd v-show="openFaq === i" :id="`faq-${i}`" class="mt-3 max-w-prose leading-relaxed text-ink/65">
              {{ item.a }}
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ── Get Kindred ─────────────────────────────────────────────────── -->
    <section id="get-kindred" class="border-t border-ink/10 px-5 py-20 sm:px-8 sm:py-28">
      <div class="mx-auto max-w-2xl text-center">
        <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_-12px_rgba(23,18,31,0.35)]">
          <KindredMark class="h-8 w-8" beat />
        </div>

        <h2 class="mt-8 font-display text-3xl leading-[1.12] tracking-[-0.01em] sm:text-[2.9rem]">
          A name came to mind while you were reading this.
        </h2>
        <p class="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
          Start with that one. Kindred takes about ten minutes to set up, and
          from then on it does the remembering — so the next time you think of
          someone, it will be because we told you, not because two years went by.
        </p>
        <p class="mx-auto mt-4 max-w-md leading-relaxed text-ink/55">
          Kindred is in early access and we onboard in small batches — each one
          set up personally, on a call.
        </p>

        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            :href="demoLink"
            class="w-full rounded-full bg-ink px-8 py-4 text-center font-medium text-paper transition-colors hover:bg-dusk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kindred sm:w-auto"
          >
            Book your onboarding call
          </a>
          <router-link
            to="/roi-calculator"
            class="w-full rounded-full border border-ink/20 px-8 py-4 text-center font-medium text-ink/80 transition-colors hover:border-ink/40 hover:text-ink sm:w-auto"
          >
            Take the 2-minute test first
          </router-link>
        </div>

        <p class="mx-auto mt-10 max-w-md border-t border-ink/10 pt-8 text-sm leading-relaxed text-ink/55">
          Not ready for either? Join the waitlist and we'll write when a place
          opens up.
        </p>

        <form v-if="!showSuccess" class="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row" @submit="handleSubmit">
          <label for="firstName" class="sr-only">First name</label>
          <input
            id="firstName"
            v-model="formData.firstName"
            type="text"
            required
            placeholder="First name"
            class="w-full rounded-full border border-ink/20 bg-white px-5 py-3.5 text-ink placeholder:text-ink/35 focus:border-kindred focus:outline-none focus:ring-1 focus:ring-kindred sm:w-40"
          />
          <label for="email" class="sr-only">Email address</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            placeholder="you@example.com"
            class="w-full flex-1 rounded-full border border-ink/20 bg-white px-5 py-3.5 text-ink placeholder:text-ink/35 focus:border-kindred focus:outline-none focus:ring-1 focus:ring-kindred"
          />
          <button
            type="submit"
            :disabled="isSubmitting"
            class="rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition-colors hover:bg-dusk disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kindred"
          >
            {{ isSubmitting ? 'Adding…' : 'Join' }}
          </button>
        </form>

        <p v-else class="mx-auto mt-9 max-w-md rounded-2xl border border-kindred/30 bg-kindred/[0.07] px-6 py-5 text-ink/80">
          You're on the list. We'll be in touch — and in the meantime, go call
          whoever came to mind while you were reading.
        </p>

        <p v-if="submitError" class="mt-4 text-sm text-red-700">{{ submitError }}</p>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import AppPreview from '@/components/AppPreview.vue'
import NudgeHub from '@/components/NudgeHub.vue'
import AppIcon from '@/components/AppIcon.vue'
import DunbarLayers from '@/components/DunbarLayers.vue'
import DriftStages from '@/components/DriftStages.vue'
import MentalSpace from '@/components/MentalSpace.vue'
import CtaBand from '@/components/CtaBand.vue'

// TODO: replace with a real booking link (Calendly/Cal.com) when it exists.
const demoLink = 'mailto:trykindredapp@gmail.com?subject=Kindred%20onboarding%20call&body=Hi%20Henry%2C%0A%0AI%27d%20like%20to%20book%20an%20onboarding%20call.%0A%0AWhat%20I%27m%20trying%20to%20keep%20on%20top%20of%3A%20%0APhone%3A%20iPhone%20%2F%20Android%3A%20%0A'
import KindredMark from '@/components/KindredMark.vue'

const scorePreview = [
  { icon: 'circles', label: 'Which layers have thinned out', },
  { icon: 'strength', label: 'Relationships cooling right now' },
  { icon: 'bell', label: 'People most likely to slip' },
  { icon: 'calendar', label: 'The cadence you can actually keep' },
]
import { getAllPosts, formatDate } from '@/content/posts'

const latestPosts = getAllPosts().slice(0, 3)

// The three ICP profiles, stated plainly so a visitor can self-identify.
const audience = [
  {
    role: 'Revenue leaders',
    built: '800',
    builtLabel: 'buyers, champions and past customers',
    managed: '22',
    headline: 'Deals die on timing, not on merit',
    pain: 'The follow-up landed three weeks late and the product was never the problem. Your CRM tracked the deal all the way down and never once told you the relationship had gone quiet.',
    cost: 'The renewal you had already won, lost to whoever followed up on the Tuesday.',
  },
  {
    role: 'Founders & investors',
    built: '1,500',
    builtLabel: 'people met, investors, intros made',
    managed: '14',
    headline: 'You meet fifty people and keep four',
    pain: 'Every conference adds a pile of genuinely promising conversations that go cold inside a month. You are also the person everyone asks for introductions, and nothing anywhere tracks who you owe.',
    cost: 'The round that closed without you, because the warm intro went cold first.',
  },
  {
    role: 'Operators & partnerships',
    built: '500',
    builtLabel: 'stakeholders across partners and vendors',
    managed: '31',
    headline: 'Networking stops scaling before you do',
    pain: 'Deals now run through six stakeholders across three companies and all of the context lives in your head. What worked at twenty people quietly breaks at two hundred.',
    cost: 'The partnership that stalled when your champion changed jobs and nobody noticed.',
  },
]

// Specific, recognisable situations from this ICP's life.
const cases = [
  {
    elapsed: '14 months',
    color: '#8A8FA3',
    title: 'The one who made the introduction',
    body: 'They made the call that started everything. You meant to stay close. You are now someone they used to know.',
  },
  {
    elapsed: '8 months',
    color: '#C79A8E',
    title: 'The friend you found out about secondhand',
    body: 'They moved, or had the baby, or went through the divorce. You heard it in a group chat.',
  },
  {
    elapsed: 'every launch',
    color: '#F2A65A',
    title: 'The friend who only hears good news',
    body: 'You appear after the raise, the launch, the win. They have noticed the pattern. You have not.',
  },
]

const steps = [
  {
    title: 'Bring in the people who count',
    body: 'Import your phone and email contacts, then mark the ones that actually matter. Most people finish with a few dozen, not a few hundred — that is the point.',
  },
  {
    title: 'Create the relationship',
    body: 'A contact is a phone number; a relationship is what you have with them. Assign one and set how close they are — inner circle, work, family, mentor. The cadence lives on the relationship, so it moves with them when their role in your life changes.',
  },
  {
    title: 'Kindred handles the rest',
    body: 'It watches every cadence at once, surfaces whoever has slipped, and carries the context so the first line is easy. Log a call in two taps and the clock resets. That is the whole loop.',
  },
]

// The four things a stitched-together stack structurally cannot do.
const valueAdd = [
  {
    icon: 'strength',
    title: 'It can rank',
    body: 'Because every signal lives in one place — last contact, cadence, birthday, what they asked for — Kindred can answer who needs you most this week. Five apps holding a fifth of the picture each can only ever list, never prioritise.',
  },
  {
    icon: 'call',
    title: 'Logging survives',
    body: 'One coffee logged in two taps, not opened in three apps. A system only works if the habit is cheap enough to keep, which is exactly where the spreadsheet died.',
  },
  {
    icon: 'spark',
    title: 'It gets better as you use it',
    body: 'Your Reminders app will never notice that you always reply to Marcus within an hour and never call your uncle back. Kindred reads those patterns and adjusts what it asks of you.',
  },
  {
    icon: 'circles',
    title: 'It holds work and home together',
    body: 'Your mother and your biggest customer are both people you cannot afford to lose. Splitting them across a CRM and a birthday reminder means one of them is always on the second-class system.',
  },
]

const intelligence = [
  {
    icon: 'spark',
    title: 'It suggests the cadence',
    body: 'Rather than making you invent a number, Kindred proposes a rhythm from the pattern you have actually kept with someone — then lets you overrule it.',
  },
  {
    icon: 'strength',
    title: 'It scores the relationship, not the contact',
    body: 'Frequency, recency and consistency combine into a strength read, so you can see which relationships are genuinely healthy and which are quietly cooling.',
  },
  {
    icon: 'bell',
    title: 'It picks the moment',
    body: 'Nudges arrive at a civil hour in your own time zone, spaced so you get one thing to act on rather than a backlog — with a hard cap on how much it will ask of you in a day.',
  },
  {
    icon: 'note',
    title: 'It brings the context',
    body: 'Every nudge carries what you last spoke about and what they asked for, so the opening line writes itself instead of costing you ten minutes of scrolling.',
  },
  {
    icon: 'search',
    title: 'It spots the patterns you cannot see',
    body: 'Which relationships are one-directional, who you only contact when you need something, which introductions you never followed up — visible across your whole network at once.',
  },
]

const strengths = [
  { name: 'Priya Shah', state: 'Strong', value: 88, color: '#4C9A6A', note: 'spoke 3 times in 6 weeks · replies fast' },
  { name: 'Dana Whitfield', state: 'Cooling', value: 46, color: '#B4713A', note: 'gaps widening since February' },
  { name: 'Marcus Reed', state: 'At risk', value: 17, color: '#8A8FA3', note: 'longest silence since you met' },
]

const features = [
  {
    icon: 'circles',
    title: 'Circles',
    body: 'Group people by how close they actually are — family, close friends, work, mentors, custom. Each circle carries its own rhythm.',
  },
  {
    icon: 'calendar',
    title: 'Per-circle cadence',
    body: 'Weekly for the handful you cannot let slip, twice a year for the long tail. Set it once and it applies to everyone in that circle.',
  },
  {
    icon: 'call',
    title: 'Interaction logging',
    body: 'Calls, messages, emails, meet-ups and events, each with outcome and context. A couple of taps, not a data-entry chore.',
  },
  {
    icon: 'bell',
    title: 'Smart reminders',
    body: 'Follow-ups and check-ins timed to your cadence, delivered at a sensible hour in your own time zone.',
  },
  {
    icon: 'strength',
    title: 'Relationship strength',
    body: 'A read on which relationships are healthy and which are cooling, from how often and how recently you actually connect.',
  },
  {
    icon: 'timeline',
    title: 'Timeline',
    body: 'The full history with a person in one place — every call, note and meeting — so you can walk in knowing where you left it.',
  },
  {
    icon: 'note',
    title: 'Notes and mentions',
    body: 'Capture what was said and what they asked for. Mention someone in a note and it attaches to their record.',
  },
  {
    icon: 'birthday',
    title: 'Birthdays and occasions',
    body: 'The dates that are unforgivable to miss, with enough warning to do better than a same-day message.',
  },
  {
    icon: 'message',
    title: 'Email and calendar',
    body: 'Connect Gmail and Google Calendar so meetings and messages inform your history instead of sitting in a silo.',
  },
  {
    icon: 'calendar',
    title: 'Calendar sync',
    body: 'Events and reminders sync to Apple Calendar and anything else that speaks CalDAV, so they appear where you already look.',
  },
  {
    icon: 'import',
    title: 'Contact import',
    body: 'Bring in your phone and email contacts, with duplicate detection so you are not tidying up a mess on day one.',
  },
  {
    icon: 'search',
    title: 'Search and filters',
    body: 'Find anyone by circle, company, how long it has been, or what you last talked about.',
  },
  {
    icon: 'friends',
    title: 'Group interactions',
    body: 'Log a dinner or a meeting once and it lands on every person who was there.',
  },
  {
    icon: 'followup',
    title: 'Follow-up chains',
    body: 'Multi-step sequences for the things that need more than one touch — a conference, a raise, a hiring loop.',
  },
  {
    icon: 'shield',
    title: 'Export and delete',
    body: 'Take everything with you in a standard format, or delete the lot. Your relationships are not our asset.',
  },
]

const comparison = [
  {
    dimension: 'Built to',
    crm: 'Close a deal',
    kindred: 'Keep a relationship',
  },
  {
    dimension: 'Holds',
    crm: 'Leads, accounts, opportunities',
    kindred: 'Family, friends, mentors, colleagues',
  },
  {
    dimension: 'Belongs to',
    crm: 'Your employer',
    kindred: 'You',
  },
  {
    dimension: 'You lose it when',
    crm: 'You change jobs',
    kindred: 'Never',
  },
  {
    dimension: 'It knows',
    crm: 'Deal size, stage, close date',
    kindred: 'When you last spoke, and what about',
  },
  {
    dimension: 'It warns you that',
    crm: 'A deal has gone quiet',
    kindred: 'A person has gone quiet',
  },
  {
    dimension: "It's finished when",
    crm: 'The deal closes',
    kindred: 'Never — that is the whole point',
  },
]

const privacy = [
  'No ads on Kindred, now or later — so there is nothing for your data to be worth to anyone but you.',
  'We do not sell it, rent it, or hand it to data brokers. There is no version of the business where that changes.',
  'Contact details are encrypted before they are stored.',
  'It is portable by design: export everything in a standard format, any time, without asking.',
  'Delete your account and the data goes with it, not into a backup we keep for two years.',
]

const freeTier = [
  'Unlimited contacts',
  'Three circles: family, close friends, work',
  'Full interaction logging and timeline',
  'Five active reminders',
  'Notes and birthdays',
]

const deliberate = [
  { thing: 'Anniversaries', scheduled: 'In the calendar, every year.', verdict: 'Nobody has ever called that unromantic.' },
  { thing: 'Sunday calls home', scheduled: 'Same day, same time, for decades.', verdict: 'Nobody has ever called that transactional.' },
  { thing: 'Reaching out to a friend', scheduled: 'Whenever it randomly occurs to you.', verdict: 'Somehow this one is supposed to be left to chance.' },
]

const proTier = [
  'Everything in Plus',
  'Network intelligence — who has gone quiet, who is one-directional, where the openings are',
  'Kindred AI — ask your network questions in plain language',
  'AI-drafted openers using your real history with someone',
  'In-app calls, logged automatically with notes',
  'Introduction tracking — who you owe and who owes you',
  'API access and priority support',
]

const plusTier = [
  'Everything in Free',
  'All circle types, including custom circles',
  'Unlimited reminders, with smart timing and context',
  'Relationship strength and network insights',
  'Email and calendar integrations',
  'Export and priority support',
]

const faq = [
  {
    q: "I've never felt like I needed an app for this. Do I?",
    a: 'Probably not, if you can name the last five people you meant to call and when you last spoke to each. Most people cannot — not because they are careless, but because that is precisely the information memory drops first. The honest test: think of someone who mattered to you five years ago and try to date your last real conversation. If the answer is a shrug, that is the gap.',
  },
  {
    q: 'How much time does this actually take?',
    a: 'About ten minutes to set up, then seconds a day. Logging a call is two taps. If it ever starts to feel like data entry, your cadences are set too tight — loosen them and it goes quiet again. A system you resent is a system you abandon, so it is built to ask for very little.',
  },
  {
    q: 'Is it strange to put my family in something like this?',
    a: 'It feels odd for about a week, then it feels obvious. You already keep their birthdays in a calendar and nobody finds that cold. This is the same instinct applied to the other 364 days.',
  },
  {
    q: 'I already have a CRM at work. Why this too?',
    a: 'Different job, different owner. Your CRM tracks deals and belongs to your employer — you lose it the day you leave. Kindred tracks people and belongs to you, including everyone who will still matter three jobs from now. Most people who use both find they barely overlap.',
  },
  {
    q: 'Will it write or send messages for me?',
    a: 'No, and that is deliberate. Kindred tells you who to reach out to and hands you the context — what you last discussed, what they asked for — so the first line is easy. The words stay yours. Automated warmth is worse than silence, and people can always tell.',
  },
  {
    q: 'What if I fall off it for a month?',
    a: 'Nothing breaks. You come back to a list of who has drifted, ranked, with the context still attached. It is a system for people with demanding lives, which means it has to survive the weeks you ignore it.',
  },
  {
    q: 'What happens to my data if I stop using it?',
    a: 'You export everything in a standard format whenever you want, and deleting your account deletes the data. It is never sold, and Kindred has no advertising business for it to feed.',
  },
]

const openFaq = ref(0)
const formData = ref({ firstName: '', email: '' })
const isSubmitting = ref(false)
const showSuccess = ref(false)
const submitError = ref('')

const handleSubmit = async (event) => {
  event.preventDefault()
  isSubmitting.value = true
  submitError.value = ''

  try {
    const response = await fetch('https://app.loops.so/api/newsletter-form/clu6fo2t000vzmuw9u3mi2v84', {
      method: 'POST',
      body: new URLSearchParams({
        firstName: formData.value.firstName,
        email: formData.value.email,
        userGroup: 'Landing Page Waitlist',
      }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })

    const result = await response.json()

    if (result.success) {
      showSuccess.value = true
      formData.value = { firstName: '', email: '' }
    } else {
      submitError.value = result.message || "That didn't go through. Try again?"
    }
  } catch (e) {
    submitError.value = "That didn't go through. Check your connection and try again."
  } finally {
    isSubmitting.value = false
  }
}
</script>
