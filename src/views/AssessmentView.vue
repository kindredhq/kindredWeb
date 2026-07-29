<template>
  <div class="min-h-screen bg-paper font-sans text-ink antialiased">
    <SiteNav />

    <!-- Main Content -->
    <main class="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <!-- Header Section -->
      <div class="mb-12" v-if="step === 1">
        <p class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-kindred">
          Relationship check
        </p>

        <h1 class="mt-5 font-display text-3xl sm:text-4xl md:text-[3rem] font-medium leading-[1.12] tracking-tight text-ink">
          Find out which relationships you are quietly losing.
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
          Seven questions about how you actually keep in touch. At the end you
          get your Network Health Score, the layers that have thinned out, and
          the people most likely to slip in the next six months.
        </p>
        <p class="mt-6 font-mono text-xs text-ink/45">
          2 minutes · No account · Your answers stay yours
        </p>
      </div>

      <!-- Progress Bar -->
      <ProgressBar :current-step="step" :total-steps="7" />

      <!-- Assessment Form -->
      <div class="bg-white rounded-2xl border border-ink/12 p-6 sm:p-8 md:p-10">
        <form @submit.prevent="handleSubmit">
          <!-- Step 1: Role -->
          <QuestionCard
            v-if="step === 1"
            title="What's your role?"
            subtitle="Help us personalize your assessment"
            :show-back="false"
            :show-next="false"
          >
            <div class="grid sm:grid-cols-2 gap-3">
              <button
                v-for="option in roleOptions"
                :key="option.value"
                type="button"
                @click="selectAndAdvance('role', option.value)"
                class="p-4 text-left border rounded-xl transition-all hover:border-kindred hover:bg-kindred/[0.06]"
                :class="formData.role === option.value ? 'border-kindred bg-kindred/10 text-kindred-700' : 'border-ink/12 text-ink/75 hover:shadow-md'"
              >
                <div class="flex items-start">
                  <span class="text-2xl mr-3 flex-shrink-0">{{ option.emoji }}</span>
                  <div>
                    <div class="font-semibold mb-1">{{ option.label }}</div>
                    <div class="text-xs opacity-75">{{ option.description }}</div>
                  </div>
                </div>
              </button>
            </div>
          </QuestionCard>

          <!-- Step 2: Total Contacts -->
          <QuestionCard
            v-if="step === 2"
            title="How many professional contacts do you have?"
            subtitle="LinkedIn connections, email contacts, phone numbers, business cards collected over your career"
            @back="prevStep"
            @next="nextStep"
            :can-proceed="formData.total_contacts > 0"
          >
            <!-- Context Banner -->
            <div class="bg-kindred/[0.06] border border-kindred/25 rounded-lg p-4 mb-4">
              <p class="text-sm text-ink/75 leading-relaxed">
                <span class="font-semibold text-kindred-700">Context:</span> Most professionals accumulate <strong>500–3,000 contacts</strong> over a career. Research on social groups puts the number a person can hold unaided at around <strong>150</strong>, with far fewer kept genuinely close.
              </p>
            </div>

            <div class="space-y-3">
              <button
                v-for="option in contactRanges"
                :key="option.value"
                type="button"
                @click="formData.total_contacts = option.value"
                class="w-full p-4 text-left border rounded-xl font-medium transition-all hover:border-kindred hover:bg-kindred/[0.06]"
                :class="formData.total_contacts === option.value ? 'border-kindred bg-kindred/10 text-kindred-700' : 'border-ink/12 text-ink/75 hover:shadow-md'"
              >
                {{ option.label }}
              </button>
            </div>
          </QuestionCard>

          <!-- Step 3: Active Maintained -->
          <QuestionCard
            v-if="step === 3"
            title="How many do you actively maintain?"
            subtitle="Regular check-ins, meaningful conversations, staying in touch"
            @back="prevStep"
            @next="nextStep"
            :can-proceed="formData.active_maintained >= 0"
          >
            <!-- Context Banner -->
            <div class="bg-ember/[0.1] border border-ember/30 rounded-lg p-4 mb-4">
              <p class="text-sm text-ink/75 leading-relaxed">
                <span class="font-semibold text-[#A8632C]">Worth saying:</span> you are not meant to maintain everyone. A low number here is normal — the useful question is whether the people you <em>do</em> maintain are the ones you would have chosen.
              </p>
            </div>

            <div class="space-y-3">
              <button
                v-for="option in maintainedRanges"
                :key="option.value"
                type="button"
                @click="formData.active_maintained = option.value"
                class="w-full p-4 text-left border rounded-xl font-medium transition-all hover:border-kindred hover:bg-kindred/[0.06]"
                :class="formData.active_maintained === option.value ? 'border-kindred bg-kindred/10 text-kindred-700' : 'border-ink/12 text-ink/75 hover:shadow-md'"
              >
                {{ option.label }}
              </button>
            </div>
          </QuestionCard>

          <!-- Step 4: Deal Value -->
          <QuestionCard
            v-if="step === 4"
            title="What's your typical deal/opportunity value?"
            subtitle="Average value of a sale, client project, or business opportunity"
            @back="prevStep"
            @next="nextStep"
            :can-proceed="formData.avg_deal_value >= 0"
          >
            <div class="space-y-3">
              <button
                v-for="option in dealValueRanges"
                :key="option.value"
                type="button"
                @click="formData.avg_deal_value = option.value"
                class="w-full p-4 text-left border rounded-xl font-medium transition-all hover:border-kindred hover:bg-kindred/[0.06]"
                :class="formData.avg_deal_value === option.value ? 'border-kindred bg-kindred/10 text-kindred-700' : 'border-ink/12 text-ink/75 hover:shadow-md'"
              >
                {{ option.label }}
              </button>
            </div>
          </QuestionCard>

          <!-- Step 5: Relationship Percent -->
          <QuestionCard
            v-if="step === 5"
            title="What percentage of your opportunities come through relationships?"
            subtitle="vs. cold outreach, paid advertising, or inbound leads"
            @back="prevStep"
            @next="nextStep"
            :can-proceed="true"
          >
            <div class="space-y-6">
              <div class="text-center">
                <div class="font-display text-6xl font-medium text-kindred mb-4">
                  {{ formData.relationship_percent }}%
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                v-model.number="formData.relationship_percent"
                class="w-full h-3 bg-ink/10 rounded-lg appearance-none cursor-pointer slider"
              />
              <div class="flex justify-between text-xs text-ink/45">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
          </QuestionCard>

          <!-- Step 6: Last Outreach -->
          <QuestionCard
            v-if="step === 6"
            title="When did you last reach out to your top 20 contacts?"
            subtitle="Think about your most important relationships"
            @back="prevStep"
            @next="nextStep"
            :can-proceed="!!formData.last_outreach"
          >
            <div class="space-y-3">
              <button
                v-for="option in outreachOptions"
                :key="option.value"
                type="button"
                @click="formData.last_outreach = option.value"
                class="w-full p-4 text-left border rounded-xl font-medium transition-all hover:border-kindred hover:bg-kindred/[0.06]"
                :class="formData.last_outreach === option.value ? 'border-kindred bg-kindred/10 text-kindred-700' : 'border-ink/12 text-ink/75 hover:shadow-md'"
              >
                <div class="flex items-center justify-between">
                  <span>{{ option.label }}</span>
                  <span v-if="option.emoji" class="text-xl">{{ option.emoji }}</span>
                </div>
              </button>
            </div>
          </QuestionCard>

          <!-- Step 7: Lost Contacts + Email -->
          <div v-if="step === 7">
            <!-- Unlock Priority Access Banner -->
            <div class="bg-kindred/[0.06] border border-kindred/30 rounded-xl p-6 mb-6">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-kindred rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="font-display text-lg font-medium text-ink mb-2">Last question</h3>
                  <p class="text-sm text-ink/75 mb-3">
                    Six of seven done. Answer this one and you get:
                  </p>
                  <div class="grid sm:grid-cols-2 gap-2.5 text-sm">
                    <div v-for="item in unlocks" :key="item" class="flex items-start gap-2.5">
                      <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-kindred" aria-hidden="true"></span>
                      <span class="text-ink/75 leading-snug">{{ item }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <QuestionCard
              title="How many important contacts have you lost touch with?"
              subtitle="People who could help you, but you haven't talked to in 6+ months"
              @back="prevStep"
              :show-next="false"
              :can-proceed="false"
            >
              <div class="space-y-3 mb-6">
                <button
                  v-for="option in lostContactRanges"
                  :key="option.value"
                  type="button"
                  @click="formData.lost_contacts = option.value"
                  class="w-full p-4 text-left border rounded-xl font-medium transition-all hover:border-kindred hover:bg-kindred/[0.06]"
                  :class="formData.lost_contacts === option.value ? 'border-kindred bg-kindred/10 text-kindred-700' : 'border-ink/12 text-ink/75 hover:shadow-md'"
                >
                  {{ option.label }}
                </button>
              </div>

              <!-- Email Capture -->
              <EmailCapture
                v-model:email="formData.email"
                v-model:name="formData.name"
                :error="emailError"
              />

              <!-- Industry Selection (Optional) -->
              <div class="mt-6 pt-6 border-t border-ink/12">
                <label for="industry" class="block text-sm font-medium text-ink/75 mb-2">
                  Industry (Optional)
                </label>
                <select
                  id="industry"
                  v-model="formData.industry"
                  class="w-full px-4 py-3 bg-white border-2 border-ink/15 rounded-lg text-ink focus:outline-none focus:ring-2 focus:ring-kindred focus:border-kindred transition-all"
                >
                  <option value="">Select your industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="consulting">Consulting</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="insurance">Insurance</option>
                  <option value="legal">Legal</option>
                  <option value="media">Media</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
                <p class="text-xs text-ink/45 mt-2">
                  Helps us provide more accurate ROI calculations based on industry benchmarks
                </p>
              </div>
            </QuestionCard>

            <!-- Submit Button -->
            <div class="mt-8 text-center">
              <button
                type="submit"
                :disabled="isSubmitting || !canSubmit"
                class="w-full sm:w-auto px-10 py-4 bg-ink text-paper font-medium text-lg rounded-full hover:bg-dusk transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Calculating Your ROI...
                </span>
                <span v-else class="flex items-center justify-center">
                  See My Results
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <!-- Error Display -->
          <div v-if="submitError" class="mt-6 bg-red-50 border-2 border-red-200 rounded-xl p-4">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="font-semibold text-red-900">Submission Error</p>
                <p class="text-sm text-red-700">{{ submitError }}</p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-8 text-center">
        <p class="text-sm text-ink/45 mb-4">Trusted by executives at:</p>
        <div class="flex justify-center items-center gap-6 text-ink/35">
          <span class="font-semibold">Fortune 500 Companies</span>
          <span>•</span>
          <span class="font-semibold">Top Startups</span>
          <span>•</span>
          <span class="font-semibold">Consulting Firms</span>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ProgressBar from '@/components/assessment/ProgressBar.vue'
import QuestionCard from '@/components/assessment/QuestionCard.vue'
import EmailCapture from '@/components/assessment/EmailCapture.vue'
import { submitAssessment, validateAssessmentData } from '@/services/assessmentApi'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'

// Only things we actually deliver — no invented discounts or scarce slots.
const unlocks = [
  'Your Network Health Score, and what is dragging it down',
  'Which relationship layers have thinned out',
  'The people most likely to slip in the next six months',
  'A cadence you could realistically keep',
]

const router = useRouter()

// Form data
const step = ref(1)
const formData = ref({
  email: '',
  name: '',
  role: '',
  total_contacts: 0,
  active_maintained: 0,
  avg_deal_value: 0,
  relationship_percent: 60,
  last_outreach: '',
  lost_contacts: 0,
  industry: ''
})

// Form state
const isSubmitting = ref(false)
const submitError = ref('')
const emailError = ref('')

// Question options
const roleOptions = [
  {
    value: 'vp-sales',
    label: 'VP Sales / Sales Leader',
    emoji: '💼',
    description: 'Maintain 200+ sales relationships',
    cap: 200
  },
  {
    value: 'founder',
    label: 'Founder / CEO',
    emoji: '🚀',
    description: 'Maintain 250+ investor, customer, partner relationships',
    cap: 250
  },
  {
    value: 'vc-investor',
    label: 'VC / Investor',
    emoji: '💰',
    description: 'Maintain 220+ founder, LP, co-investor relationships',
    cap: 220
  },
  {
    value: 'real-estate',
    label: 'Real Estate Agent / Broker',
    emoji: '🏡',
    description: 'Maintain 220+ past client and sphere relationships',
    cap: 220
  },
  {
    value: 'lawyer',
    label: 'Lawyer / Attorney',
    emoji: '⚖️',
    description: 'Maintain 180+ client and referral relationships',
    cap: 180
  },
  {
    value: 'consultant',
    label: 'Management Consultant',
    emoji: '📊',
    description: 'Maintain 200+ client and project relationships',
    cap: 200
  },
  {
    value: 'business-development',
    label: 'Business Development',
    emoji: '🤝',
    description: 'Maintain 180+ partnership relationships',
    cap: 180
  },
  {
    value: 'recruiter',
    label: 'Executive Recruiter',
    emoji: '👥',
    description: 'Maintain 180+ candidate and client relationships',
    cap: 180
  },
  {
    value: 'other',
    label: 'Other Professional',
    emoji: '💡',
    description: 'Maintain 150+ key professional relationships',
    cap: 150
  }
]

const contactRanges = [
  { value: 200, label: '100-300 contacts' },
  { value: 500, label: '300-700 contacts' },
  { value: 1000, label: '700-1200 contacts' },
  { value: 1750, label: '1200-2000 contacts' },
  { value: 3000, label: '2000+ contacts' }
]

const maintainedRanges = [
  { value: 7, label: '5-10 contacts' },
  { value: 17, label: '10-25 contacts' },
  { value: 37, label: '25-50 contacts' },
  { value: 75, label: '50-100 contacts' },
  { value: 150, label: '100+ contacts' }
]

const dealValueRanges = [
  { value: 5000, label: 'Under $10K' },
  { value: 30000, label: '$10K - $50K' },
  { value: 75000, label: '$50K - $100K' },
  { value: 300000, label: '$100K - $500K' },
  { value: 750000, label: '$500K - $1M' },
  { value: 2000000, label: 'Over $1M' }
]

const outreachOptions = [
  { value: 'this_week', label: 'This week', emoji: '✅' },
  { value: 'this_month', label: 'This month', emoji: '👍' },
  { value: '1-3_months', label: '1-3 months ago', emoji: '⚠️' },
  { value: '3-6_months', label: '3-6 months ago', emoji: '😬' },
  { value: '6+_months', label: '6+ months ago', emoji: '😰' }
]

const lostContactRanges = [
  { value: 2, label: '0-5 contacts' },
  { value: 10, label: '5-15 contacts' },
  { value: 22, label: '15-30 contacts' },
  { value: 40, label: '30-50 contacts' },
  { value: 75, label: '50+ contacts' }
]

// Computed
const canSubmit = computed(() => {
  return formData.value.email &&
         formData.value.email.includes('@') &&
         formData.value.lost_contacts > 0
})

// Methods
const nextStep = () => {
  if (step.value < 7) {
    step.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevStep = () => {
  if (step.value > 1) {
    step.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const selectAndAdvance = (field, value) => {
  formData.value[field] = value
  setTimeout(() => {
    nextStep()
  }, 200)
}

const handleSubmit = async () => {
  submitError.value = ''
  emailError.value = ''

  // Validate email
  if (!formData.value.email || !formData.value.email.includes('@')) {
    emailError.value = 'Please enter a valid email address'
    return
  }

  // Validate all data
  const validation = validateAssessmentData(formData.value)
  if (!validation.isValid) {
    submitError.value = validation.errors[0]
    return
  }

  isSubmitting.value = true

  try {
    const result = await submitAssessment(formData.value)

    // Success - redirect to results page
    router.push(`/results/${result.assessment_id}`)
  } catch (error) {
    submitError.value = error.message
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Custom slider styling */
input[type="range"].slider::-webkit-slider-thumb {
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7868E6 0%, #8b5cf6 100%);
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}

input[type="range"].slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(120, 104, 230, 0.4);
}

input[type="range"].slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7868E6 0%, #8b5cf6 100%);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}

input[type="range"].slider::-moz-range-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(120, 104, 230, 0.4);
}
</style>
