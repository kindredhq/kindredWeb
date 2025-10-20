<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="text-center space-y-6">
        <div class="relative">
          <div class="animate-spin rounded-full h-20 w-20 border-b-4 border-kindred mx-auto"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-3xl">🧠</span>
          </div>
        </div>
        <div>
          <p class="text-xl font-semibold text-slate-900 mb-2">Calculating Your ROI...</p>
          <p class="text-slate-600">Analyzing your network and opportunities</p>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen px-4">
      <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-slate-900 mb-2">Unable to Load Results</h2>
        <p class="text-slate-600 mb-6">{{ error }}</p>
        <router-link
          to="/assess"
          class="inline-block px-6 py-3 bg-kindred text-white font-semibold rounded-lg hover:bg-kindred-600 transition-all"
        >
          Take Assessment Again
        </router-link>
      </div>
    </div>

    <!-- Results Display -->
    <div v-else-if="results" class="pb-20">
      <!-- Header -->
      <header class="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <router-link to="/" class="flex items-center text-slate-900 hover:text-kindred transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span class="font-semibold">Home</span>
          </router-link>
          <button
            @click="shareResults"
            class="flex items-center text-slate-600 hover:text-kindred transition-colors font-medium"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            <span class="hidden sm:inline">Share</span>
          </button>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <!-- Logo -->
        <div class="flex justify-center animate-fade-in">
          <img :src="kindredLogo" alt="Kindred" class="h-16 w-16 sm:h-20 sm:w-20" />
        </div>

        <!-- Hero Section -->
        <div class="text-center space-y-4 animate-fade-in">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">
            Your Relationship ROI Analysis
          </h1>
          <p v-if="results.name" class="text-xl sm:text-2xl text-slate-600">
            Hi {{ results.name }}! Here's what we discovered...
          </p>
        </div>

        <!-- High Performer Badge (90+) -->
        <div v-if="results.health_score >= 90" class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white text-center animate-fade-in">
          <div class="flex items-center justify-center mb-3">
            <span class="text-5xl mr-3">🏆</span>
            <h2 class="text-3xl font-bold">Exceptional Network Management!</h2>
          </div>
          <p class="text-lg opacity-95 max-w-2xl mx-auto">
            You're in the <strong>top 5% of professionals</strong> when it comes to maintaining strategic relationships. Your network is one of your greatest assets!
          </p>
        </div>

        <!-- Great Performer Badge (75-89) -->
        <div v-else-if="results.health_score >= 75" class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-6 text-white text-center animate-fade-in">
          <div class="flex items-center justify-center mb-3">
            <span class="text-5xl mr-3">⭐</span>
            <h2 class="text-3xl font-bold">Great Work on Your Network!</h2>
          </div>
          <p class="text-lg opacity-95 max-w-2xl mx-auto">
            You're doing <strong>much better than most professionals</strong> at maintaining relationships. You're close to joining the elite top 5%!
          </p>
        </div>

        <!-- Key Metrics Grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Conservative ROI -->
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-xl p-8">
            <div class="space-y-4">
              <p class="text-sm uppercase tracking-wide opacity-90 font-semibold">
                Annual Opportunity Cost
              </p>
              <div>
                <p class="text-5xl sm:text-6xl font-bold mb-2">
                  {{ formatCurrency(results.conservative_roi) }}
                </p>
                <p class="text-sm opacity-90 leading-relaxed">
                  This is how much revenue you're likely missing each year from neglected professional relationships
                </p>
              </div>
              <div class="pt-4 border-t border-white border-opacity-20 space-y-2">
                <p class="text-sm font-medium">
                  💡 <strong>What this means:</strong> By not actively maintaining your network, you're leaving deals, referrals, and partnerships on the table
                </p>
                <p class="text-xs opacity-75">
                  Full potential: {{ formatCurrency(results.calculated_roi) }} (we show conservative 15% estimate)
                </p>
              </div>
            </div>
          </div>

          <!-- Health Score -->
          <div class="rounded-2xl shadow-xl p-8 text-white"
               :class="getHealthScoreGradient(results.health_score)">
            <div class="space-y-4">
              <p class="text-sm uppercase tracking-wide opacity-90 font-semibold">
                Network Health Score
              </p>
              <div>
                <div class="flex items-end gap-2 mb-2">
                  <p class="text-5xl sm:text-6xl font-bold">
                    {{ results.health_score }}
                  </p>
                  <p class="text-2xl opacity-75 pb-1">/100</p>
                </div>
                <p class="text-lg font-semibold mb-2">{{ results.health_level }}</p>
                <p class="text-sm opacity-90 leading-relaxed">
                  {{ getHealthScoreExplanation(results.health_score) }}
                </p>
              </div>
              <div class="pt-4 border-t border-white border-opacity-20">
                <p class="text-sm font-medium">
                  📊 <strong>Your ranking:</strong> {{ getPercentileText(results.health_score) }}
                </p>
                <p class="text-xs opacity-75 mt-2">
                  {{ getHealthScoreAdvice(results.health_score) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Year 1 vs 3-5 Year Comparison (NEW) -->
        <YearComparison
          v-if="hasTierBreakdown"
          :year1-value="results.conservative_roi"
          :full-potential="results.calculated_roi"
          :conservative-percent="15"
          :top-tier-count="topTierCount"
          :top-tier-value="topTierValue"
        />

        <!-- Strategic Focus Card (NEW) -->
        <StrategicFocusCard
          v-if="hasTierBreakdown"
          :tiers="tierBreakdown"
          :year1-impact="results.conservative_roi"
          :total-capacity="totalCapacity"
        />

        <!-- Tier Breakdown Visualization (NEW) -->
        <TierBreakdownCard
          v-if="hasTierBreakdown"
          :tiers="tierBreakdown"
        />

        <!-- ROI Breakdown -->
        <div class="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8">
          <div class="mb-6">
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Where You're Leaving Money
            </h2>
            <p class="text-slate-600">
              Here's how we calculated your opportunity cost broken down by category:
            </p>
          </div>

          <div class="space-y-4">
            <!-- Missed Pipeline -->
            <div class="flex items-center justify-between p-4 sm:p-6 bg-red-50 border border-red-200 rounded-xl hover:shadow-md transition-shadow">
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <span class="text-2xl mr-3">💸</span>
                  <h3 class="font-bold text-red-900 text-lg">Missed Pipeline</h3>
                </div>
                <p class="text-sm text-red-700">
                  {{ results.breakdown.missed_deals }} potential deals from inactive relationships
                </p>
              </div>
              <div class="text-right ml-4">
                <p class="text-2xl sm:text-3xl font-bold text-red-600">
                  {{ formatCurrency(results.breakdown.missed_pipeline) }}
                </p>
              </div>
            </div>

            <!-- Lost Referrals -->
            <div class="flex items-center justify-between p-4 sm:p-6 bg-orange-50 border border-orange-200 rounded-xl hover:shadow-md transition-shadow">
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <span class="text-2xl mr-3">🤝</span>
                  <h3 class="font-bold text-orange-900 text-lg">Lost Referrals</h3>
                </div>
                <p class="text-sm text-orange-700">
                  Referral opportunities from contacts you've lost touch with
                </p>
              </div>
              <div class="text-right ml-4">
                <p class="text-2xl sm:text-3xl font-bold text-orange-600">
                  {{ formatCurrency(results.breakdown.lost_referrals) }}
                </p>
              </div>
            </div>

            <!-- Cold Partnerships -->
            <div class="flex items-center justify-between p-4 sm:p-6 bg-yellow-50 border border-yellow-200 rounded-xl hover:shadow-md transition-shadow">
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <span class="text-2xl mr-3">❄️</span>
                  <h3 class="font-bold text-yellow-900 text-lg">Cold Partnerships</h3>
                </div>
                <p class="text-sm text-yellow-700">
                  Untapped opportunities from neglected strategic relationships
                </p>
              </div>
              <div class="text-right ml-4">
                <p class="text-2xl sm:text-3xl font-bold text-yellow-600">
                  {{ formatCurrency(results.breakdown.cold_partnerships) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Total -->
          <div class="mt-6 pt-6 border-t-2 border-slate-200">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-slate-900">Total Opportunity Cost</h3>
              <p class="text-3xl sm:text-4xl font-bold text-kindred">
                {{ formatCurrency(results.conservative_roi) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Key Insights - Visual Breakdown -->
        <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg border-2 border-slate-200 p-6 sm:p-8 space-y-8">
          <div class="text-center">
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Your Network Analysis
            </h2>
            <p class="text-slate-600">Here's the full breakdown of your relationship management</p>
          </div>

          <!-- Contact Breakdown -->
          <div class="grid md:grid-cols-3 gap-6">
            <!-- Total Contacts -->
            <div class="bg-white rounded-xl p-6 border-2 border-slate-200 text-center">
              <div class="text-4xl font-bold text-slate-900 mb-2">
                {{ formatNumber(results.total_contacts) }}
              </div>
              <div class="text-sm font-medium text-slate-600 mb-1">Total Contacts</div>
              <div class="text-xs text-slate-500">Your entire network</div>
            </div>

            <!-- Business-Relevant -->
            <div class="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">
                {{ formatNumber(getBusinessRelevantContacts()) }}
              </div>
              <div class="text-sm font-medium text-slate-700 mb-1">Business-Relevant</div>
              <div class="text-xs text-slate-500">
                {{ getBusinessRelevantPercent() }}% can generate opportunities
              </div>
            </div>

            <!-- Currently Maintaining -->
            <div class="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
              <div class="text-4xl font-bold text-green-600 mb-2">
                {{ results.active_maintained }}
              </div>
              <div class="text-sm font-medium text-slate-700 mb-1">Actively Maintaining</div>
              <div class="text-xs text-slate-500">
                {{ getMaintainedPercent() }}% of business contacts
              </div>
            </div>
          </div>

          <!-- The Opportunity Gap / Optimization Potential -->
          <div class="rounded-xl p-6 border-2"
               :class="results.health_score >= 90 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200'">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-slate-900 mb-1">
                  <span v-if="results.health_score >= 90">Optimization Potential</span>
                  <span v-else>The Opportunity Gap</span>
                </h3>
                <p class="text-sm text-slate-600">
                  <span v-if="results.health_score >= 90">How Kindred can help you exceed your limits</span>
                  <span v-else>What you're missing by not maintaining more relationships</span>
                </p>
              </div>
              <span class="text-4xl">
                <span v-if="results.health_score >= 90">🚀</span>
                <span v-else>⚠️</span>
              </span>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-white rounded-lg p-4">
                <div class="text-sm text-slate-600 mb-1">You're maintaining</div>
                <div class="text-2xl font-bold text-slate-900">
                  {{ results.active_maintained }} contacts
                </div>
              </div>
              <div class="bg-white rounded-lg p-4">
                <div class="text-sm text-slate-600 mb-1">
                  <span v-if="hasTierBreakdown">Full capacity (all tiers)</span>
                  <span v-else>You could be maintaining</span>
                </div>
                <div class="text-2xl font-bold text-green-600">
                  {{ getOptimalContacts() }} contacts
                </div>
                <div class="text-xs text-green-700 mt-1 font-medium">
                  <span v-if="hasTierBreakdown">(With Kindred's help)</span>
                  <span v-else>(With Kindred's help)</span>
                </div>
              </div>
            </div>

            <div class="mt-4 p-6 rounded-lg border-2"
                 :class="results.health_score >= 90 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-400' : 'bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-400'">
              <div class="text-center space-y-3">
                <div v-if="hasTierBreakdown" class="space-y-2">
                  <div class="text-sm text-slate-700 font-medium">
                    <span v-if="results.health_score >= 90">
                      With Kindred's automation, you could optimize:
                    </span>
                    <span v-else>
                      But to unlock maximum value, focus on adding:
                    </span>
                  </div>
                  <div class="text-6xl font-bold"
                       :class="results.health_score >= 90 ? 'text-green-600' : 'text-orange-600'">
                    {{ getStrategicGapContacts() }}
                  </div>
                  <div class="text-base text-slate-700 font-semibold">
                    <span v-if="results.health_score >= 90">
                      more VIP & Partner relationships
                    </span>
                    <span v-else>
                      VIP & Strategic Partner relationships
                    </span>
                  </div>
                </div>
                <div v-else class="text-sm text-slate-700 font-medium">
                  By maintaining just <strong class="text-3xl text-orange-600 block my-2">{{ getGapContacts() }}</strong> more strategic relationships
                </div>

                <div class="pt-4 border-t border-orange-300">
                  <div class="text-4xl font-bold text-green-600">
                    {{ formatCurrency(hasTierBreakdown ? topTierValue : results.conservative_roi) }}
                  </div>
                  <div class="text-sm text-slate-600 font-medium mt-2">
                    <span v-if="hasTierBreakdown">
                      Value from these strategic relationships (3-5 years)
                      <span class="block text-xs text-slate-500 mt-1">
                        Year 1 conservative: {{ formatCurrency(Math.round(topTierValue * 0.15)) }}
                      </span>
                    </span>
                    <span v-else>
                      Year 1 opportunity you could capture
                      <span class="block text-xs text-slate-500 mt-1">
                        (3-5 year potential: {{ formatCurrency(results.calculated_roi) }})
                      </span>
                    </span>
                  </div>
                </div>

                <div v-if="hasTierBreakdown" class="mt-3 pt-3 border-t border-orange-300">
                  <div v-if="results.active_maintained < getOptimalContacts()">
                    <!-- User is below capacity -->
                    <div class="grid sm:grid-cols-2 gap-4 text-center">
                      <div class="bg-white bg-opacity-60 rounded-lg p-3">
                        <div class="text-xs text-slate-600 mb-1">Strategic relationships</div>
                        <div class="text-2xl font-bold text-orange-600">
                          {{ results.active_maintained + getStrategicGapContacts() }}
                        </div>
                        <div class="text-xs text-slate-500">
                          ({{ results.active_maintained }} current + {{ getStrategicGapContacts() }} new)
                        </div>
                      </div>
                      <div class="bg-white bg-opacity-60 rounded-lg p-3">
                        <div class="text-xs text-slate-600 mb-1">Remaining capacity</div>
                        <div class="text-2xl font-bold text-green-600">
                          {{ getOptimalContacts() - (results.active_maintained + getStrategicGapContacts()) }}
                        </div>
                        <div class="text-xs text-slate-500">
                          for other relationships
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <!-- User already exceeds optimal capacity - focus on quality -->
                    <div class="bg-white bg-opacity-60 rounded-lg p-4 text-center">
                      <div class="text-sm text-slate-700 font-semibold mb-2">
                        🎯 You're already maintaining {{ results.active_maintained }} relationships!
                      </div>
                      <div class="text-xs text-slate-600">
                        Focus on upgrading <strong class="text-orange-600">{{ getStrategicGapContacts() }}</strong> of your existing relationships to VIP/Partner quality for maximum impact
                      </div>
                    </div>
                  </div>
                  <div class="text-xs text-slate-600 mt-3 text-center">
                    These {{ getStrategicGapContacts() }} strategic relationships generate <strong class="text-slate-900">{{ topTierPercent }}% of your total network value</strong>
                  </div>
                </div>
                <div v-else class="mt-3 pt-3 border-t border-orange-300">
                  <div class="text-xs text-slate-600 mb-1">That's approximately</div>
                  <div class="text-2xl font-bold text-orange-600">
                    {{ formatCurrency(Math.round(results.conservative_roi / getGapContacts())) }}
                  </div>
                  <div class="text-xs text-slate-600">per relationship nurtured</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Missed Deals Breakdown -->
          <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg border-2 border-slate-200 p-6 sm:p-8">
            <div class="text-center mb-6">
              <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 flex items-center justify-center">
                <span class="mr-2">📉</span>
                Missed Deals Breakdown
              </h2>
              <p class="text-slate-600">You're missing <strong class="text-red-600 text-xl">{{ results.breakdown.missed_deals }} deals</strong> annually</p>
            </div>

            <div class="grid sm:grid-cols-2 gap-6">
              <!-- Left: Stats -->
              <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 space-y-4">
                <div class="text-center pb-4 border-b border-red-200">
                  <div class="text-5xl font-bold text-red-600 mb-2">{{ results.breakdown.missed_deals }}</div>
                  <div class="text-sm font-medium text-slate-700">Deals Lost Annually</div>
                </div>
                <div class="text-center pb-4 border-b border-red-200">
                  <div class="text-2xl font-bold text-orange-600 mb-1">
                    1 every {{ Math.ceil(12 / results.breakdown.missed_deals) }} months
                  </div>
                  <div class="text-xs text-slate-600">That's how often you're missing deals</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-slate-900 mb-1">{{ formatCurrency(results.avg_deal_value) }}</div>
                  <div class="text-xs text-slate-600">Average value per deal</div>
                </div>
              </div>

              <!-- Right: Total Impact -->
              <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-6 flex flex-col items-center justify-center text-center">
                <div class="text-sm uppercase tracking-wide opacity-90 mb-3">Total Annual Impact</div>
                <div class="text-5xl font-bold mb-3">{{ formatCurrency(results.conservative_roi) }}</div>
                <p class="text-sm opacity-90 leading-relaxed mb-4">This is what you're leaving on the table every year from neglected relationships</p>
                <div class="pt-4 border-t border-white border-opacity-30 w-full">
                  <div class="text-xs opacity-75 mb-1">Each nurtured relationship =</div>
                  <div class="text-2xl font-bold">
                    {{ formatCurrency(Math.round(results.conservative_roi / getGapContacts())) }}
                  </div>
                  <div class="text-xs opacity-75 mt-1">in annual value</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Kindred Advantage Banner -->
          <div class="bg-gradient-to-r from-kindred to-purple-600 rounded-xl p-6 border-2 border-kindred text-white">
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <span class="mr-2">🚀</span>
              The Kindred Advantage
            </h3>

            <div class="grid sm:grid-cols-2 gap-4 mb-4">
              <div class="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4 text-center">
                <div class="text-sm opacity-90 mb-1">Without Tools</div>
                <div class="text-3xl font-bold">80-100</div>
                <div class="text-xs opacity-75 mt-1">Active relationships (manual effort)</div>
              </div>
              <div class="bg-white bg-opacity-30 backdrop-blur rounded-lg p-4 text-center border-2 border-white border-opacity-40">
                <div class="text-sm opacity-90 mb-1">With Kindred</div>
                <div class="text-3xl font-bold">{{ getRoleMaintenanceCap() }}</div>
                <div class="text-xs opacity-75 mt-1">Active relationships ({{ getCapacityIncrease() }}% increase)</div>
              </div>
            </div>

            <p class="text-sm leading-relaxed opacity-95">
              <strong>Smart reminders, conversation context, and AI automation</strong> let you maintain 2-3x more relationships without burning out. Top Kindred users achieve what was previously impossible—maintaining {{ getRoleMaintenanceCap() }}+ strategic relationships simultaneously.
            </p>
          </div>

          <!-- Benchmark Comparison -->
          <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
            <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span class="mr-2">📊</span>
              How You Compare
            </h3>

            <div class="space-y-4">
              <!-- Your Current Performance -->
              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span class="font-medium text-slate-700">You ({{ getMaintainedPercent() }}%)</span>
                  <span class="text-slate-500">{{ results.active_maintained }} contacts maintained</span>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-3">
                  <div
                    class="bg-red-500 h-3 rounded-full transition-all"
                    :style="{ width: getMaintainedPercent() + '%' }"
                  ></div>
                </div>
              </div>

              <!-- Average Performance -->
              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span class="font-medium text-slate-700">Average Professional (15%)</span>
                  <span class="text-slate-500">{{ Math.round(getBusinessRelevantContacts() * 0.15) }} contacts</span>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-3">
                  <div class="bg-yellow-500 h-3 rounded-full w-[15%]"></div>
                </div>
              </div>

              <!-- Top Performer -->
              <div>
                <div class="flex justify-between text-sm mb-2">
                  <span class="font-medium text-slate-700">Top {{ getRoleLabel() }} ({{ getTopPerformerPercent() }}%)</span>
                  <span class="text-slate-500">{{ getTopPerformerContacts() }} contacts</span>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-3">
                  <div
                    class="bg-green-500 h-3 rounded-full transition-all"
                    :style="{ width: getTopPerformerPercent() + '%' }"
                  ></div>
                </div>
              </div>
            </div>

            <div class="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-l-4 border-purple-500">
              <div class="flex items-start">
                <span class="text-2xl mr-3">📊</span>
                <div class="flex-1">
                  <div class="font-semibold text-slate-900 mb-1">Industry Benchmark:</div>
                  <p class="text-sm text-slate-700 leading-relaxed">
                    {{ results.insights.benchmark_comparison }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- AI-Generated Insights -->
          <div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg border-2 border-slate-200 p-6 sm:p-8 space-y-4">
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center">
              <span class="mr-2">💡</span>
              Personalized Insights
            </h2>

            <!-- Primary Message -->
            <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
              <div class="flex items-start">
                <span class="text-3xl mr-3">📍</span>
                <div class="flex-1">
                  <div class="font-bold text-blue-900 mb-2 text-lg">Your Situation</div>
                  <p class="text-slate-700 leading-relaxed">
                    {{ results.insights.primary_message }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Actionable Advice -->
            <div class="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
              <div class="flex items-start">
                <span class="text-3xl mr-3">🎯</span>
                <div class="flex-1">
                  <div class="font-bold text-green-900 mb-2 text-lg">Your Action Plan</div>
                  <p class="text-slate-700 leading-relaxed">
                    {{ results.insights.actionable_advice }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Benchmark Comparison -->
            <div class="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500">
              <div class="flex items-start">
                <span class="text-3xl mr-3">📊</span>
                <div class="flex-1">
                  <div class="font-bold text-purple-900 mb-2 text-lg">How You Compare</div>
                  <p class="text-slate-700 leading-relaxed">
                    {{ results.insights.benchmark_comparison }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Items -->
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <h3 class="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span class="mr-2">⚡</span>
              {{ getActionTitle() }}
            </h3>

            <div class="space-y-3">
              <div
                v-for="(item, index) in getActionItems()"
                :key="index"
                class="bg-white rounded-lg p-4"
                :class="{
                  'border-l-4 border-green-500': item.color === 'green',
                  'border-l-4 border-blue-500': item.color === 'blue',
                  'border-l-4 border-purple-500': item.color === 'purple'
                }"
              >
                <div class="flex items-start">
                  <span class="text-2xl mr-3">{{ item.emoji }}</span>
                  <div>
                    <div class="font-semibold text-slate-900 mb-1">{{ item.title }}</div>
                    <p class="text-sm text-slate-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-to-br from-kindred to-purple-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-white text-center space-y-6">
          <h2 class="text-3xl sm:text-4xl font-bold">
            {{ getCtaTitle() }}
          </h2>
          <p class="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            {{ getCtaDescription() }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://cal.com/trykindredapp/demo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-8 py-4 bg-white text-kindred font-bold rounded-xl hover:bg-slate-100 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Book a Demo
            </a>
            <a
              href="https://kindred.app/download"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-8 py-4 bg-kindred-500 border-2 border-white text-white font-bold rounded-xl hover:bg-kindred-600 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Try Kindred Free
            </a>
          </div>

          <p class="text-sm opacity-75 pt-2">
            Join 5,000+ professionals managing their networks with Kindred
          </p>
        </div>

        <!-- Social Proof -->
        <div class="text-center space-y-6">
          <p class="text-slate-600 font-medium">Trusted by professionals at:</p>
          <div class="flex flex-wrap justify-center gap-4 sm:gap-8 text-slate-400 text-sm sm:text-base">
            <span class="font-semibold">Fortune 500 Companies</span>
            <span class="hidden sm:inline">•</span>
            <span class="font-semibold">Leading Startups</span>
            <span class="hidden sm:inline">•</span>
            <span class="font-semibold">Top Consulting Firms</span>
          </div>
        </div>

        <!-- Share Encouragement -->
        <div class="bg-slate-100 border border-slate-300 rounded-xl p-6 text-center">
          <p class="text-slate-700 mb-4">
            Know someone who could benefit from this assessment?
          </p>
          <button
            @click="shareResults"
            class="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            Share This Assessment
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getAssessmentResults } from '@/services/assessmentApi'
import { formatCurrency, getPercentileText, formatNumber } from '@/utils/formatters'
import kindredLogo from '@/assets/kindred.svg'
import TierBreakdownCard from '@/components/results/TierBreakdownCard.vue'
import YearComparison from '@/components/results/YearComparison.vue'
import StrategicFocusCard from '@/components/results/StrategicFocusCard.vue'

const route = useRoute()

// State
const loading = ref(true)
const error = ref(null)
const results = ref(null)

// Computed properties for new tier-based components
const hasTierBreakdown = computed(() => {
  return results.value?.breakdown?.tier_breakdown && results.value.breakdown.tier_breakdown.length > 0
})

const tierBreakdown = computed(() => {
  return results.value?.breakdown?.tier_breakdown || []
})

const topTierCount = computed(() => {
  if (!hasTierBreakdown.value || tierBreakdown.value.length < 2) return 45
  return tierBreakdown.value[0].target_count + tierBreakdown.value[1].target_count
})

const topTierValue = computed(() => {
  if (!hasTierBreakdown.value || tierBreakdown.value.length < 2) return 0
  return tierBreakdown.value[0].total_value + tierBreakdown.value[1].total_value
})

const totalCapacity = computed(() => {
  if (!hasTierBreakdown.value) return getRoleMaintenanceCap()
  return tierBreakdown.value.reduce((sum, tier) => sum + tier.target_count, 0)
})

const topTierPercent = computed(() => {
  if (!hasTierBreakdown.value) return 0
  const totalValue = tierBreakdown.value.reduce((sum, tier) => sum + tier.total_value, 0)
  if (totalValue === 0) return 0
  return Math.round((topTierValue.value / totalValue) * 100)
})

// Helper functions for calculations
const getBusinessRelevantPercent = () => {
  if (!results.value) return 0
  const role = results.value.role
  if (role === 'vp-sales' || role === 'business-development') return 30
  if (role === 'founder') return 40
  if (role === 'vc-investor') return 45
  if (role === 'real-estate') return 50
  if (role === 'lawyer') return 35
  if (role === 'consultant') return 35
  if (role === 'recruiter') return 35
  return 30
}

const getBusinessRelevantContacts = () => {
  if (!results.value) return 0
  return Math.round(results.value.total_contacts * (getBusinessRelevantPercent() / 100))
}

const getMaintainedPercent = () => {
  if (!results.value) return 0
  const businessContacts = getBusinessRelevantContacts()
  if (businessContacts === 0) return 0
  return Math.round((results.value.active_maintained / businessContacts) * 100)
}

const getTopPerformerPercent = () => {
  if (!results.value) return 25
  const role = results.value.role
  if (role === 'vp-sales' || role === 'business-development') return 25 // Top sales leaders maintain 20-30%
  if (role === 'founder') return 30 // Top founders maintain 25-35%
  if (role === 'vc-investor') return 35 // Top VCs maintain 30-40%
  if (role === 'real-estate') return 30 // Top agents maintain 25-35%
  if (role === 'lawyer') return 32 // Top partners maintain 28-35%
  if (role === 'consultant') return 35 // Top consultants maintain 30-40%
  if (role === 'recruiter') return 30
  return 25
}

const getOptimalContacts = () => {
  if (!results.value) return 0

  // NEW: Show full tier-based capacity (all 5 tiers)
  if (hasTierBreakdown.value) {
    return totalCapacity.value
  }

  // FALLBACK: Old linear calculation for backward compatibility
  const businessContacts = getBusinessRelevantContacts()
  const targetPercent = (getTopPerformerPercent() + 15) / 2
  const calculated = Math.round(businessContacts * (targetPercent / 100))
  const cap = getRoleMaintenanceCap()
  return Math.min(calculated, cap)
}

const getStrategicGapContacts = () => {
  // This is the gap to reach strategic tier count (VIPs + Partners)
  // Assumes current contacts are NOT strategic quality
  if (!results.value || !hasTierBreakdown.value) return 0

  // The strategic target is the top 2 tiers
  return topTierCount.value
}

const getGapContacts = () => {
  if (!results.value) return 0
  const optimal = getOptimalContacts()
  const current = results.value.active_maintained

  // Gap to reach full capacity
  const gap = optimal - current
  return gap > 0 ? gap : 0
}

const getGapROI = () => {
  if (!results.value) return 0

  const currentMaintained = results.value.active_maintained
  const optimal = getOptimalContacts()
  const gapContacts = getGapContacts()

  // The conservative_roi represents what you're missing from not maintaining enough contacts
  // If you close the gap, you recover a proportional amount of that ROI
  const currentPercent = currentMaintained / optimal
  const targetPercent = 1.0 // Closing the gap = 100% of optimal

  // Recovery: How much of the conservative ROI you can capture by closing the gap
  // If you're at 25% (50/200) and move to 100% (200/200), you capture 75% of the ROI
  const recoveryPercent = Math.min(targetPercent - currentPercent, 0.8) // Cap at 80% recovery

  return Math.round(results.value.conservative_roi * recoveryPercent)
}

const getTopPerformerContacts = () => {
  if (!results.value) return 0
  const businessContacts = getBusinessRelevantContacts()
  return Math.round(businessContacts * (getTopPerformerPercent() / 100))
}

const getRoleLabel = () => {
  if (!results.value) return 'Professional'
  const role = results.value.role
  const labels = {
    'vp-sales': 'Sales Leaders',
    'founder': 'Founders',
    'vc-investor': 'VCs',
    'real-estate': 'Real Estate Agents',
    'lawyer': 'Attorneys',
    'consultant': 'Consultants',
    'business-development': 'BD Leaders',
    'recruiter': 'Recruiters'
  }
  return labels[role] || 'Professionals'
}

const getRoleMaintenanceCap = () => {
  if (!results.value) return 180
  const role = results.value.role
  const caps = {
    'vp-sales': 200,
    'founder': 250,
    'vc-investor': 220,
    'real-estate': 220,
    'lawyer': 180,
    'consultant': 200,
    'business-development': 180,
    'recruiter': 180,
    'other': 150
  }
  return caps[role] || 180
}

const getCapacityIncrease = () => {
  const baseline = 90 // Average without tools (midpoint of 80-100)
  const withKindred = getRoleMaintenanceCap()
  return Math.round(((withKindred - baseline) / baseline) * 100)
}

// Dynamic messaging based on score
const getCtaTitle = () => {
  if (!results.value) return 'Ready to Stop Leaving Money on the Table?'
  const score = results.value.health_score
  if (score >= 90) {
    return 'You\'re Already a Pro—Let\'s Make It Even Better'
  }
  if (score >= 75) {
    return 'You\'re Doing Great—Ready to Reach Elite Status?'
  }
  if (score >= 60) {
    return 'You\'re on the Right Track—Let\'s Unlock More Value'
  }
  return 'Ready to Stop Leaving Money on the Table?'
}

const getCtaDescription = () => {
  if (!results.value) return 'Kindred helps you identify, track, and nurture the relationships that drive your success. Turn those missed opportunities into closed deals.'
  const score = results.value.health_score
  if (score >= 90) {
    return 'You already maintain great relationships. Kindred can help you take it to the next level with automation, intelligent insights, and strategic recommendations.'
  }
  if (score >= 75) {
    return 'You\'re managing your network well. Kindred can help you scale your efforts and join the top 5% of professionals without extra time investment.'
  }
  if (score >= 60) {
    return 'You have a solid foundation. Kindred can help you systematically nurture more relationships and unlock the full potential of your network.'
  }
  return 'Kindred helps you identify, track, and nurture the relationships that drive your success. Turn those missed opportunities into closed deals.'
}

const getActionTitle = () => {
  if (!results.value) return 'Take Action Today'
  const score = results.value.health_score
  if (score >= 90) return 'Keep Up Your Momentum'
  if (score >= 75) return 'Level Up Your Network'
  if (score >= 60) return 'Reach Your Full Potential'
  return 'Take Action Today'
}

const getActionItems = () => {
  if (!results.value) return []
  const score = results.value.health_score

  if (score >= 90) {
    return [
      {
        emoji: '🌟',
        title: 'Maintain Your Excellence',
        description: results.value.insights.actionable_advice || 'Keep doing what you\'re doing—you\'re already in the top tier of professionals',
        color: 'green'
      },
      {
        emoji: '🚀',
        title: 'Automate the Hard Work',
        description: 'Let Kindred handle tracking and reminders so you can focus on the conversations that matter',
        color: 'blue'
      },
      {
        emoji: '💎',
        title: 'Optimize Your Time',
        description: 'Use Kindred\'s AI to identify which relationships deserve more attention and which are healthy',
        color: 'purple'
      }
    ]
  }

  if (score >= 75) {
    return [
      {
        emoji: '🎯',
        title: 'You\'re Close to Elite Status',
        description: results.value.insights.actionable_advice || 'Focus on maintaining just 10-15 more strategic relationships to join the top 5%',
        color: 'green'
      },
      {
        emoji: '📊',
        title: 'Identify Your Top Opportunities',
        description: 'Review your network to find the highest-value relationships that need more attention',
        color: 'blue'
      },
      {
        emoji: '⚡',
        title: 'Let Kindred Scale Your Efforts',
        description: 'Automate relationship tracking and reminders to maintain more connections without extra time',
        color: 'purple'
      }
    ]
  }

  if (score >= 60) {
    return [
      {
        emoji: '📈',
        title: 'Build on Your Solid Foundation',
        description: results.value.insights.actionable_advice || 'You\'re doing well—let\'s get you to the next level by maintaining 15-20 more relationships',
        color: 'green'
      },
      {
        emoji: '🎯',
        title: 'Prioritize High-Value Contacts',
        description: `Identify your top ${getGapContacts()} high-value relationships that have gone cold`,
        color: 'blue'
      },
      {
        emoji: '🔄',
        title: 'Set Up a System',
        description: 'Use Kindred to automatically track and remind you to maintain these relationships',
        color: 'purple'
      }
    ]
  }

  // Default for scores < 60
  return [
    {
      emoji: '🚀',
      title: 'Start Small',
      description: results.value.insights.actionable_advice || 'Begin by reconnecting with 5-10 of your most valuable contacts this week',
      color: 'green'
    },
    {
      emoji: '📋',
      title: 'Review Your Network',
      description: `Identify your top ${getGapContacts()} high-value relationships that have gone cold`,
      color: 'blue'
    },
    {
      emoji: '⚙️',
      title: 'Set a System',
      description: 'Use Kindred to automatically track and remind you to maintain these relationships',
      color: 'purple'
    }
  ]
}

// Methods
const fetchResults = async () => {
  const assessmentId = route.params.id

  if (!assessmentId) {
    error.value = 'No assessment ID provided'
    loading.value = false
    return
  }

  try {
    loading.value = true
    const data = await getAssessmentResults(assessmentId)
    results.value = data
  } catch (err) {
    error.value = err.message
    console.error('Failed to fetch results:', err)
  } finally {
    loading.value = false
  }
}

const shareResults = async () => {
  const shareData = {
    title: 'My Relationship ROI Assessment',
    text: `I just discovered I'm leaving $${Math.round(results.value.conservative_roi / 1000)}K on the table from neglected relationships! Calculate yours:`,
    url: 'https://kindred.app/assess'
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      // Fallback: Copy to clipboard
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`)
      alert('Link copied to clipboard!')
    }
  } catch (err) {
    console.error('Share failed:', err)
  }
}

// Helper functions for better context
const getHealthScoreGradient = (score) => {
  if (score >= 90) return 'bg-gradient-to-br from-green-500 to-green-600'
  if (score >= 70) return 'bg-gradient-to-br from-blue-500 to-blue-600'
  if (score >= 50) return 'bg-gradient-to-br from-yellow-500 to-yellow-600'
  if (score >= 30) return 'bg-gradient-to-br from-orange-500 to-orange-600'
  return 'bg-gradient-to-br from-red-500 to-red-600'
}

const getHealthScoreExplanation = (score) => {
  if (score >= 90) {
    return 'Outstanding! You actively maintain strong relationships across your network—you\'re in the top 5% of professionals'
  }
  if (score >= 75) {
    return 'Excellent! You maintain relationships much better than most professionals—you\'re doing great'
  }
  if (score >= 60) {
    return 'Good work! You maintain solid relationships but have room to reach the top tier'
  }
  if (score >= 40) {
    return 'Average. You maintain some relationships but have significant room for improvement'
  }
  if (score >= 25) {
    return 'Below average. Many valuable relationships are going cold and opportunities are being missed'
  }
  return 'Critical. Your network is severely neglected and significant opportunities are being lost'
}

const getHealthScoreAdvice = (score) => {
  if (score >= 90) {
    return 'You\'re a networking superstar—keep up the amazing work! 🌟'
  }
  if (score >= 75) {
    return 'You\'re doing fantastic! With just a bit more effort, you could join the elite top 5%'
  }
  if (score >= 60) {
    return 'You\'re on the right track! Maintaining 15-20 more relationships could boost you to the top tier'
  }
  if (score >= 40) {
    return 'Reaching out to 20-30 more contacts regularly could significantly boost your score and ROI'
  }
  if (score >= 25) {
    return 'Urgent: Reconnect with your top 10-15 most valuable contacts this week'
  }
  return 'Critical action needed: Your network needs immediate attention to prevent further opportunity loss'
}

// Lifecycle
onMounted(() => {
  fetchResults()
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
</style>
