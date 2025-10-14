<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24">
        <!-- Logo -->
        <div class="flex sm:justify-center mb-8 sm:mb-10">
          <img :src="kindredLogo" alt="Kindred" class="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
        </div>

        <!-- Main Content -->
        <div class="text-left sm:text-center max-w-6xl mx-auto">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Meet <span class="text-kindred">Kindred</span>
          </h1>
          
          <p class="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 mb-6 max-w-5xl sm:mx-auto leading-tight">
            The world's first executive relationship agent.
          </p>
          
          <p class="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 max-w-5xl sm:mx-auto leading-relaxed">
            She doesn't just understand your contacts—she helps you achieve your relationship goals and close the deals everyone else is leaving on the table.
          </p>

          <div class="flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-4 mb-8">
            <router-link
              to="/roi-calculator"
              class="px-8 py-4 bg-kindred text-white text-lg font-semibold rounded-lg hover:bg-kindred-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Calculate Your ROI →
            </router-link>
            <button
              @click="scrollToEmailCapture"
              class="px-8 py-4 border-2 border-kindred text-kindred text-lg font-semibold rounded-lg hover:bg-kindred-50 transition-all duration-300 w-full sm:w-auto"
            >
              Join Waitlist
            </button>
          </div>

          <p class="text-base sm:text-lg text-slate-700 font-medium max-w-3xl sm:mx-auto">
            In an age of AI slop, Kindred reminds you to be human. She helps you nurture both personal and professional relationships—because the people in your life matter more than any algorithm ever will.
          </p>
        </div>
      </div>
    </section>

    <!-- Problem Statement Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How Much Are You Leaving on the Table?
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
          <!-- Problem 1 -->
          <div class="text-left">
            <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <span class="text-3xl">💸</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">The Forgotten Investor</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
              That investor you met at the conference 8 months ago? They just raised a $50M fund. You never followed up.
            </p>
            <p class="text-2xl font-bold text-red-600">
              That's $500K in potential funding, gone.
            </p>
          </div>

          <!-- Problem 2 -->
          <div class="text-left">
            <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <span class="text-3xl">🤝</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">The Cold Partnership</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
              Your VP connection at that Fortune 500? You haven't talked in 6 months. They just greenlit a $2M partnership budget.
            </p>
            <p class="text-2xl font-bold text-red-600">
              Someone else got the deal.
            </p>
          </div>

          <!-- Problem 3 -->
          <div class="text-left">
            <div class="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
              <span class="text-3xl">🎯</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">The Missed Introduction</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
              Your college friend works at your dream client. You keep meaning to ask for an intro.
            </p>
            <p class="text-2xl font-bold text-red-600">
              That's a $100K+ deal waiting to happen. Eventually, it'll go to a competitor.
            </p>
          </div>
        </div>

        <div class="mt-12 text-center space-y-6">
          <p class="text-xl text-slate-700 font-semibold max-w-4xl mx-auto">
            Most executives lose <span class="text-red-600 font-bold">$300K-$2M annually</span> because relationships slip through the cracks.
            But beyond the dollars, they lose something more valuable: <span class="text-kindred font-bold">genuine human connection.</span>
          </p>
          <div>
            <router-link
              to="/roi-calculator"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Calculate What You're Losing
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </router-link>
            <p class="text-sm text-slate-500 mt-3">Free 3-minute assessment • Instant results</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Executive Persona Examples Section -->
    <section class="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Kindred Works for Your World
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            See exactly how she helps executives, managers, and revenue leaders turn relationships into revenue.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Persona 1: Sales VPs -->
          <div class="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-kindred transition-all duration-300">
            <div class="text-5xl mb-4">💼</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">Sales VPs & Directors</h3>
            <p class="text-lg font-semibold text-kindred mb-4">Your Pipeline Depends on Relationships</p>
            
            <div class="space-y-3 text-slate-700 mb-6">
              <p class="text-sm"><strong>Kindred tracks your entire network:</strong> She knows which prospects you met at conferences, when you last talked, and what they care about</p>
              <p class="text-sm"><strong>Surfaces warm paths:</strong> "Your friend Jake works at Acme Corp—they just opened a $500K budget for your solution"</p>
              <p class="text-sm"><strong>Never lets deals go cold:</strong> Reminds you to follow up before they sign with your competitor</p>
            </div>

            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <p class="text-sm text-green-800 italic">
                "Kindred helped me close 3 deals I would have forgotten about. That's <strong>$340K in revenue</strong> I almost left on the table."
              </p>
              <p class="text-xs text-green-700 mt-2">— Marcus R., VP Sales</p>
            </div>
          </div>

          <!-- Persona 2: Founders -->
          <div class="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-kindred transition-all duration-300">
            <div class="text-5xl mb-4">🚀</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">Founders & CEOs</h3>
            <p class="text-lg font-semibold text-kindred mb-4">Your Network Is Your Competitive Advantage</p>
            
            <div class="space-y-3 text-slate-700 mb-6">
              <p class="text-sm"><strong>Investor relationship intelligence:</strong> She tracks every investor you've met, their portfolio moves, and perfect moments to reconnect</p>
              <p class="text-sm"><strong>Warm intro mapping:</strong> "You're 2 connections away from that A16Z partner. Want me to draft the intro request?"</p>
              <p class="text-sm"><strong>Strategic networking:</strong> "That founder you grabbed coffee with just got acquired. Perfect time to congratulate and reconnect"</p>
            </div>

            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <p class="text-sm text-green-800 italic">
                "Kindred identified 3 investor connections I completely forgot about. Closed my seed round <strong>2 months faster</strong>."
              </p>
              <p class="text-xs text-green-700 mt-2">— Sarah C., Founder ($2M raised)</p>
            </div>
          </div>

          <!-- Persona 3: BD Leaders -->
          <div class="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-kindred transition-all duration-300">
            <div class="text-5xl mb-4">🤝</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">Business Development</h3>
            <p class="text-lg font-semibold text-kindred mb-4">Turn Every Connection Into a Partnership</p>
            
            <div class="space-y-3 text-slate-700 mb-6">
              <p class="text-sm"><strong>Partnership pipeline tracking:</strong> She manages your entire BD funnel through relationship stages</p>
              <p class="text-sm"><strong>Multi-stakeholder coordination:</strong> "You need buy-in from 4 people at Target Corp. Here's your relationship map"</p>
              <p class="text-sm"><strong>Perfect timing:</strong> "Your contact at Microsoft just changed roles. Opportunity to restart the partnership conversation"</p>
            </div>

            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <p class="text-sm text-green-800 italic">
                "Kindred helped me land 2 enterprise partnerships by keeping conversations alive. <strong>$600K annual contract value</strong>."
              </p>
              <p class="text-xs text-green-700 mt-2">— Jennifer L., Director of Partnerships</p>
            </div>
          </div>

          <!-- Persona 4: Consultants -->
          <div class="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-kindred transition-all duration-300">
            <div class="text-5xl mb-4">📊</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">Management Consultants</h3>
            <p class="text-lg font-semibold text-kindred mb-4">Client Relationships Drive 80% of Revenue</p>
            
            <div class="space-y-3 text-slate-700 mb-6">
              <p class="text-sm"><strong>Systematic client nurturing:</strong> Never let former clients forget about you with quarterly check-ins</p>
              <p class="text-sm"><strong>Referral intelligence:</strong> "Your client at Deloitte knows 8 decision-makers at your target accounts"</p>
              <p class="text-sm"><strong>Project pipeline:</strong> Tracks every past client and perfect timing for upsell conversations</p>
            </div>

            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <p class="text-sm text-green-800 italic">
                "40% of my new business comes from relationships Kindred helps me maintain. That's <strong>$180K annually</strong>."
              </p>
              <p class="text-xs text-green-700 mt-2">— David P., Management Consultant</p>
            </div>
          </div>

          <!-- Persona 5: Recruiters -->
          <div class="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-kindred transition-all duration-300">
            <div class="text-5xl mb-4">👥</div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">Executive Recruiters</h3>
            <p class="text-lg font-semibold text-kindred mb-4">Your Network IS Your Business Model</p>
            
            <div class="space-y-3 text-slate-700 mb-6">
              <p class="text-sm"><strong>Candidate relationship management:</strong> She tracks every talented person you've met, even if they weren't looking</p>
              <p class="text-sm"><strong>Passive candidate nurturing:</strong> Keeps you top-of-mind with "not right now" candidates who'll be ready in 6 months</p>
              <p class="text-sm"><strong>Hiring manager intelligence:</strong> "Your contact at TechCorp just lost their VP of Eng. Perfect time to pitch"</p>
            </div>

            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <p class="text-sm text-green-800 italic">
                "Kindred helped me place 4 candidates I would have lost track of. <strong>$120K in placement fees</strong> in one quarter."
              </p>
              <p class="text-xs text-green-700 mt-2">— Amanda T., Executive Recruiter</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How Kindred Helps You Show Up
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            She's not a database or a bot. She's your relationship partner—someone who genuinely cares about helping you maintain the connections that make life worth living.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <span class="text-2xl">🧠</span>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">She Remembers What You Forget</h3>
            <ul class="text-slate-600 space-y-3">
              <li>• Knows who you haven't talked to in too long</li>
              <li>• Remembers important details (birthdays, life events, career moves)</li>
              <li>• Spots opportunities to reconnect at the perfect moment</li>
              <li>• Gently reminds you when someone needs your attention</li>
            </ul>
            <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p class="text-sm text-blue-800 italic">
                "Hey, remember Sarah? You haven't talked in 4 months. She just posted about her promotion—perfect time to congratulate her and catch up."
              </p>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <span class="text-2xl">🎯</span>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">She Helps You Be Intentional</h3>
            <ul class="text-slate-600 space-y-3">
              <li>• Tell Kindred what matters to you (career goals, personal connections, both)</li>
              <li>• She suggests who deserves more of your time and attention</li>
              <li>• Creates thoughtful plans for staying connected</li>
              <li>• Helps you show up as your best self in every relationship</li>
            </ul>
            <div class="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p class="text-sm text-purple-800 italic">
                "You mentioned wanting to be better at staying in touch with your college friends. I noticed 3 of them have birthdays this month. Want to plan something?"
              </p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
            <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <span class="text-2xl">⚡</span>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">She Makes It Easy to Care</h3>
            <ul class="text-slate-600 space-y-3">
              <li>• Drafts thoughtful messages that sound like you</li>
              <li>• Reminds you of conversation context before you reach out</li>
              <li>• Keeps track of what matters to each person in your life</li>
              <li>• Learns what genuine connection looks like for you</li>
            </ul>
            <div class="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p class="text-sm text-green-800 italic">
                "Last time you talked to Jake, he mentioned his daughter was applying to colleges. It's been 3 months—want to check in on how that's going?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Join Thousands Building Deeper Connections
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-kindred to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                SC
              </div>
              <div>
                <div class="font-bold text-slate-900">Sarah Chen</div>
                <div class="text-sm text-slate-600">Founder, TechCo</div>
              </div>
            </div>
            <p class="text-slate-700 italic leading-relaxed">
              "Kindred helped me identify 3 investor connections I completely forgot about. 
              Closed my seed round 2 months faster than planned."
            </p>
            <div class="mt-4 text-sm text-green-600 font-semibold">$2M raised</div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                MJ
              </div>
              <div>
                <div class="font-bold text-slate-900">Marcus Johnson</div>
                <div class="text-sm text-slate-600">VP Business Development</div>
              </div>
            </div>
            <p class="text-slate-700 italic leading-relaxed">
              "I used to spend 5 hours a week managing my CRM. Now Kindred does it automatically. 
              I just review and approve—takes 15 minutes."
            </p>
            <div class="mt-4 text-sm text-green-600 font-semibold">2+ hours saved weekly</div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                PP
              </div>
              <div>
                <div class="font-bold text-slate-900">Priya Patel</div>
                <div class="text-sm text-slate-600">Serial Entrepreneur</div>
              </div>
            </div>
            <p class="text-slate-700 italic leading-relaxed">
              "The executive intelligence briefings are like having a chief of staff who actually knows 
              my network better than I do."
            </p>
            <div class="mt-4 text-sm text-green-600 font-semibold">3 successful exits</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-20 bg-gradient-to-b from-white to-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          In an Age of AI Slop, Be Human
        </h2>
        <p class="text-xl text-slate-700 leading-relaxed mb-6">
          While everyone's chasing automation, we believe technology should help you be <em>more</em> human, not less. 
          Kindred doesn't replace your relationships—she helps you show up for the people who matter.
        </p>
        <p class="text-lg text-slate-600 leading-relaxed mb-8">
          Whether it's remembering your colleague's kid started college, checking in on a friend going through a tough time, 
          or reconnecting with that investor at the perfect moment—Kindred handles the system so you can handle the soul.
        </p>
        <div class="space-y-4">
          <div class="inline-block px-6 py-3 bg-kindred-50 border border-kindred-200 rounded-full">
            <span class="text-kindred-700 font-semibold">Personal relationships. Professional success. Human connection.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            One Platform, Endless Possibilities
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Use Case 1 -->
          <div class="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div class="text-4xl mb-4">💰</div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Fundraising</h3>
            <p class="text-slate-600 mb-4 text-sm">
              Identify investors in your extended network. Get warm introduction paths. Track pitch meetings and follow-ups.
            </p>
            <div class="text-sm text-kindred font-medium">
              "3 degrees from Andreessen Horowitz through your friend at Google"
            </div>
          </div>

          <!-- Use Case 2 -->
          <div class="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div class="text-4xl mb-4">🤝</div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Business Development</h3>
            <p class="text-slate-600 mb-4 text-sm">
              Find potential clients/partners in your contacts. Strategic outreach campaigns. Track deal pipeline through relationships.
            </p>
            <div class="text-sm text-kindred font-medium">
              "5 of your contacts work at target companies"
            </div>
          </div>

          <!-- Use Case 3 -->
          <div class="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div class="text-4xl mb-4">👥</div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Hiring</h3>
            <p class="text-slate-600 mb-4 text-sm">
              Identify talent referral sources. Track recruitment conversations. Build candidate pipelines through network.
            </p>
            <div class="text-sm text-kindred font-medium">
              "Your friend at Meta knows 12 React engineers"
            </div>
          </div>

          <!-- Use Case 4 -->
          <div class="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div class="text-4xl mb-4">🌐</div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Networking</h3>
            <p class="text-slate-600 mb-4 text-sm">
              Stay top-of-mind with important contacts. Never let relationships go cold. Strategic re-engagement campaigns.
            </p>
            <div class="text-sm text-kindred font-medium">
              "You haven't talked to [VIP] in 3 months—they just changed jobs"
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Deep Dive Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Master Professional Relationships
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <!-- Left Column -->
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Smart Contact Management</h3>
                <p class="text-slate-600 text-sm">Automatic data enrichment, company and role tracking, LinkedIn integration, contact health scores</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Network Intelligence</h3>
                <p class="text-slate-600 text-sm">Introduction path mapping, industry clustering, geographic insights, relationship strength analysis</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Goal-Based Planning</h3>
                <p class="text-slate-600 text-sm">Strategic action plans, ROI projections, risk assessment, success probability scoring</p>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Autonomous Outreach</h3>
                <p class="text-slate-600 text-sm">Agent-drafted emails, timing optimization, follow-up automation, response tracking</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Executive Briefings</h3>
                <p class="text-slate-600 text-sm">Weekly intelligence reports, opportunity identification, strategic recommendations, network health monitoring</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">Integrations</h3>
                <p class="text-slate-600 text-sm">Gmail/Outlook email, Google/Apple contacts, LinkedIn (coming soon), calendar sync</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Starter Tier -->
          <div class="bg-white rounded-2xl p-8 border-2 border-slate-200">
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
            <p class="text-slate-600 mb-6">Perfect for individual professionals</p>
            <div class="mb-6">
              <span class="text-4xl font-bold text-slate-900">Coming Soon</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-slate-600">Core relationship management</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-slate-600">Basic intelligence features</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-slate-600">Up to 200 contacts</span>
              </li>
            </ul>
          </div>

          <!-- Professional Tier -->
          <div class="bg-gradient-to-br from-kindred to-purple-600 rounded-2xl p-8 border-2 border-kindred-600 relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
              EARLY ACCESS
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Professional</h3>
            <p class="text-kindred-100 mb-6">Your autonomous relationship agent</p>
            <div class="mb-6">
              <span class="text-4xl font-bold text-white">Join Waitlist</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <span class="text-green-300 mr-2">✓</span>
                <span class="text-white">Autonomous execution</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-300 mr-2">✓</span>
                <span class="text-white">Advanced intelligence</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-300 mr-2">✓</span>
                <span class="text-white">Goal-driven action plans</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-300 mr-2">✓</span>
                <span class="text-white">Priority support</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center mt-8">
          <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full">
            <span class="text-2xl mr-2">🎁</span>
            <span class="text-slate-900 font-bold">Early access members get lifetime 50% discount</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Email Capture Section - Major CTA -->
    <section id="email-capture" class="py-24 bg-white border-t-4 border-kindred">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Don't Leave Money on the Table
          </h2>
          <p class="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Join executives who use Kindred to turn dormant relationships into closed deals, funded rounds, and enterprise partnerships.
          </p>

          <!-- Email Form -->
          <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 max-w-xl mx-auto border-2 border-kindred shadow-xl">
            <!-- Success Message -->
            <div v-if="showSuccess" class="bg-green-50 border border-green-400 rounded-xl p-4 mb-6">
              <div class="flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-green-800 font-semibold">🎉 You're on the list! Check your email for confirmation.</span>
              </div>
            </div>

            <!-- Error Message -->
            <div v-if="submitError" class="bg-red-50 border border-red-400 rounded-xl p-4 mb-6">
              <div class="flex items-center justify-center">
                <svg class="w-6 h-6 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                <span class="text-red-800 font-semibold">{{ submitError }}</span>
              </div>
            </div>

            <form @submit="handleSubmit" class="space-y-4">
              <div class="grid sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="firstName"
                  v-model="formData.firstName"
                  placeholder="First name" 
                  class="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-kindred focus:border-kindred transition-all"
                  required
                  :disabled="isSubmitting"
                />
                <input 
                  type="email" 
                  name="email"
                  v-model="formData.email"
                  placeholder="Work email" 
                  class="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-kindred focus:border-kindred transition-all"
                  required
                  :disabled="isSubmitting"
                />
              </div>
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-8 py-4 bg-kindred text-white text-lg font-bold rounded-xl hover:bg-kindred-600 transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">Joining...</span>
                <span v-else>Get Executive Early Access</span>
              </button>
            </form>

            <div class="mt-8 space-y-2 text-slate-700">
              <p class="font-semibold text-slate-900">✨ What You'll Get:</p>
              <ul class="text-sm space-y-1">
                <li>✓ Network intelligence report showing hidden opportunities</li>
                <li>✓ Relationship gap analysis (where you're leaving money)</li>
                <li>✓ Early access pricing: 50% lifetime discount</li>
                <li>✓ Personal onboarding with relationship strategy session</li>
              </ul>
            </div>

            <p class="mt-6 text-xs text-slate-500">
              We respect your privacy. No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="space-y-4">
          <!-- FAQ Item 1 -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <button 
              @click="toggleFaq(0)"
              class="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
            >
              <span class="font-semibold text-slate-900 text-lg">How is Kindred different from a CRM like Salesforce or HubSpot?</span>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform" 
                :class="{ 'rotate-180': openFaq === 0 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === 0" class="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p class="text-slate-700 leading-relaxed">
                Traditional CRMs are designed for sales teams tracking leads and deals. Kindred is an intelligent agent designed for professionals who need to manage strategic relationships. We focus on relationship intelligence and autonomous support, not deal pipelines. Think "relationship agent" not "sales tracking tool."
              </p>
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <button 
              @click="toggleFaq(1)"
              class="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
            >
              <span class="font-semibold text-slate-900 text-lg">How does Kindred know who to contact and when?</span>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform" 
                :class="{ 'rotate-180': openFaq === 1 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === 1" class="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p class="text-slate-700 leading-relaxed">
                Kindred analyzes your goals, contact history, professional context, and relationship health to make strategic recommendations. Your agent learns your patterns and suggests optimal outreach timing, conversation starters, and relationship-building actions. For example, if your goal is fundraising, we identify investor connections, map warm introduction paths, and suggest the best time to reach out.
              </p>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <button 
              @click="toggleFaq(2)"
              class="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
            >
              <span class="font-semibold text-slate-900 text-lg">Is my data secure and private?</span>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform" 
                :class="{ 'rotate-180': openFaq === 2 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === 2" class="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p class="text-slate-700 leading-relaxed">
                Absolutely. Your contact data is encrypted, never sold, and only used to provide you with intelligence. We're building enterprise-grade security from day one. You own your data and can export or delete it anytime.
              </p>
            </div>
          </div>

          <!-- FAQ Item 4 -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <button 
              @click="toggleFaq(3)"
              class="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
            >
              <span class="font-semibold text-slate-900 text-lg">How much time does it take to use Kindred?</span>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform" 
                :class="{ 'rotate-180': openFaq === 3 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === 3" class="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p class="text-slate-700 leading-relaxed">
                Most users spend 15-30 minutes per week reviewing your agent's suggestions and approving recommended actions. Kindred handles the heavy lifting of analysis and planning. You stay in control with final approval.
              </p>
            </div>
          </div>

          <!-- FAQ Item 5 -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <button 
              @click="toggleFaq(4)"
              class="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
            >
              <span class="font-semibold text-slate-900 text-lg">Can Kindred send emails on my behalf?</span>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform" 
                :class="{ 'rotate-180': openFaq === 4 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === 4" class="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p class="text-slate-700 leading-relaxed">
                Kindred drafts personalized emails for your review. You always approve before anything is sent. Think of it as having a smart assistant who writes drafts—you make the final call.
              </p>
            </div>
          </div>

          <!-- FAQ Item 6 -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <button 
              @click="toggleFaq(5)"
              class="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
            >
              <span class="font-semibold text-slate-900 text-lg">What if I don't have many contacts?</span>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform" 
                :class="{ 'rotate-180': openFaq === 5 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === 5" class="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p class="text-slate-700 leading-relaxed">
                Kindred works with networks of any size. Even with 50-100 professional contacts, we can identify strategic opportunities and help you build stronger relationships. The value grows as your network grows.
              </p>
            </div>
          </div>

          <!-- FAQ Item 7 -->
          <div class="border border-slate-200 rounded-xl overflow-hidden">
            <button 
              @click="toggleFaq(6)"
              class="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
            >
              <span class="font-semibold text-slate-900 text-lg">When will Kindred be available?</span>
              <svg 
                class="w-5 h-5 text-slate-400 transition-transform" 
                :class="{ 'rotate-180': openFaq === 6 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === 6" class="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <p class="text-slate-700 leading-relaxed">
                We're currently in private beta with select users. Join the waitlist for early access—we're onboarding new members weekly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8 mb-12">
          <!-- Brand Column -->
          <div class="md:col-span-1">
            <div class="flex items-center mb-4">
              <img :src="kindredLogo" alt="Kindred" class="h-8 w-8 mr-2" />
              <span class="text-xl font-bold">Kindred</span>
            </div>
            <p class="text-slate-400 text-sm mb-4">
              Nurturing meaningful connections, together
            </p>
            <a href="mailto:info@kindredapp.co" class="text-slate-400 hover:text-white text-sm transition-colors">
              info@kindredapp.co
            </a>
          </div>

          <!-- Product Column -->
          <div>
            <h4 class="font-semibold mb-4">Product</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-slate-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white transition-colors">Use Cases</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          <!-- Company Column -->
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="https://kindred.productlane.com/roadmap" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Social Column -->
          <div>
            <h4 class="font-semibold mb-4">Connect</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-slate-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" class="text-slate-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-slate-800 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2024 Kindred. All rights reserved.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <router-link to="/privacy" class="hover:text-white transition-colors">Privacy Policy</router-link>
              <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import kindredLogo from '@/assets/kindred.svg'

// Form state
const formData = ref({
  firstName: '',
  email: ''
})
const isSubmitting = ref(false)
const showSuccess = ref(false)
const submitError = ref('')

// FAQ state
const openFaq = ref(null)

// Scroll to email capture
const scrollToEmailCapture = () => {
  document.getElementById('email-capture')?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'center'
  })
}

// Toggle FAQ
const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

// Handle form submission
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
        userGroup: 'Landing Page Waitlist'
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    
    const result = await response.json()
    
    if (result.success) {
      showSuccess.value = true
      formData.value = { firstName: '', email: '' }
      
      // Hide success message after 8 seconds
      setTimeout(() => {
        showSuccess.value = false
      }, 8000)
    } else {
      submitError.value = result.message || 'Something went wrong. Please try again.'
    }
  } catch (error) {
    submitError.value = 'Network error. Please check your connection and try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slideDown 0.3s ease-out;
}
</style>
