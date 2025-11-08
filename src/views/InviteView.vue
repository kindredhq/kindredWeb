<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Main Content -->
    <main class="flex-1 flex items-center justify-center px-4 py-6">
      <!-- Error State -->
      <div v-if="error || (inviteInvalid && !loading)" class="max-w-md w-full text-center">
        <div class="flex justify-center mb-8">
          <img :src="kindredLogo" alt="Kindred" class="h-20 w-20" />
        </div>
        
        <div class="bg-red-50 border-2 border-red-200 rounded-2xl p-8 mb-6">
          <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
          <h2 class="text-2xl font-bold text-slate-900 mb-2">Invalid Invite Code</h2>
          <p class="text-slate-600 mb-4">
            {{ error || 'This invite code is not valid or has expired.' }}
          </p>
        </div>

        <a
          href="/"
          class="inline-block px-8 py-4 bg-kindred text-white text-lg font-bold rounded-xl hover:bg-kindred-600 transition-all duration-300"
        >
          Go to Homepage
        </a>
      </div>

      <!-- Valid Invite State -->
      <div v-else class="max-w-md w-full text-center">
        <!-- Inviter Profile Picture or Initials -->
        <div class="flex justify-center mb-3 sm:mb-4">
          <!-- Loading skeleton -->
          <div v-if="loading" class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-200 animate-pulse"></div>
          
          <!-- Profile picture if available -->
          <div v-else-if="inviterPhoto" class="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-kindred">
            <img :src="inviterPhoto" :alt="inviterName" class="w-full h-full object-cover" />
          </div>
          
          <!-- Initials fallback -->
          <div v-else class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-kindred to-purple-600 flex items-center justify-center text-white text-lg sm:text-xl font-bold">
            {{ inviterInitials }}
          </div>
        </div>

        <!-- Personalized Headline -->
        <h1 class="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          <span v-if="loading" class="inline-block bg-slate-200 rounded animate-pulse h-10 w-96 max-w-full"></span>
          <span v-else>Congratulations! {{ inviterName }} has invited you to join Kindred</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">
          Join top performing professionals who are maintaining their relationships better and closing more deals.
        </p>

        <!-- Invite Code Card -->
        <div class="bg-slate-50 rounded-2xl p-5 mb-5 border border-slate-200 shadow-sm">
          <p class="text-xs sm:text-sm text-slate-600 mb-1.5 font-medium">Your invite code</p>
          <div class="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-wider">
            {{ inviteCode }}
          </div>
          
          <!-- Copy Button -->
          <button
            @click="copyInviteCode"
            class="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-slate-300 text-slate-900 text-sm sm:text-base font-semibold rounded-xl hover:bg-slate-50 hover:border-kindred transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg v-if="!copied" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            <svg v-else class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span :class="{ 'text-green-600': copied }">
              {{ copied ? 'Copied!' : 'Copy invite code' }}
            </span>
          </button>
        </div>

        <!-- Download Button -->
        <a
          :href="downloadUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full px-6 sm:px-8 py-3 bg-kindred text-white text-base sm:text-lg font-bold rounded-xl hover:bg-kindred-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 mb-2"
        >
          Download Kindred
        </a>

        <!-- Helper Text -->
        <p class="text-xs sm:text-sm text-slate-500">
          Use code <span class="font-semibold text-slate-700">{{ inviteCode }}</span> when onboarding to join the private beta
        </p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-3 px-4 border-t border-slate-200">
      <div class="max-w-4xl mx-auto">
        <!-- Logo and Name -->
        <div class="flex items-center justify-center gap-2 mb-2">
          <img :src="kindredLogo" alt="Kindred" class="h-6 w-6" />
          <span class="text-sm font-semibold text-slate-900">Kindred</span>
        </div>
        
        <!-- Links -->
        <div class="flex flex-row items-center justify-center gap-3 text-xs text-slate-600">
          <router-link to="/" class="hover:text-kindred transition-colors">
            Home
          </router-link>
          <span>•</span>
          <router-link to="/privacy" class="hover:text-kindred transition-colors">
            Privacy
          </router-link>
          <span>•</span>
          <a href="mailto:info@kindredapp.co" class="hover:text-kindred transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import kindredLogo from '@/assets/kindred.svg'

const route = useRoute()

// Invite data
const inviteCode = ref(route.params.inviteCode || '000000')
const inviterName = ref('Henry') // Default inviter name (will be updated from API when available)
const inviterPhoto = ref(null) // Will be populated from API if available
const copied = ref(false)
const loading = ref(true)
const error = ref(null)
const inviteInvalid = ref(false)

// API URL from environment
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080'

// Download URL
const downloadUrl = ref('https://testflight.apple.com/join/BWsWaHhJ')

// Compute inviter initials from name
const inviterInitials = computed(() => {
  if (!inviterName.value) return 'K'
  
  const names = inviterName.value.trim().split(' ')
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase()
  }
  return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase()
})

// Copy invite code to clipboard
const copyInviteCode = async () => {
  try {
    await navigator.clipboard.writeText(inviteCode.value)
    copied.value = true
    
    // Reset after 2 seconds
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = inviteCode.value
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}

// Fetch invite data from API
onMounted(async () => {
  loading.value = true
  error.value = null
  inviteInvalid.value = false
  
  try {
    const response = await fetch(`${apiUrl}/invites/${inviteCode.value}/validate`)
    
    if (!response.ok) {
      if (response.status === 404) {
        inviteInvalid.value = true
        error.value = 'This invite code could not be found.'
      } else {
        throw new Error('Unable to connect to the server. Please check your connection.')
      }
      return
    }
    
    const result = await response.json()
    
    // API returns: { status: true, message: "...", data: { valid, inviter: { name, photo }, ... } }
    if (result.status && result.data) {
      const { data } = result
      
      // Check if invite is valid
      if (!data.valid) {
        inviteInvalid.value = true
        error.value = data.message || 'This invite code is not valid.'
        return
      }
      
      // Set inviter name and photo if available
      if (data.inviter) {
        inviterName.value = data.inviter.name || 'Someone'
        inviterPhoto.value = data.inviter.photo || null
      }
      
      // Log validation info
      console.log('Invite validated:', {
        valid: data.valid,
        inviterName: inviterName.value,
        hasPhoto: !!inviterPhoto.value
      })
    } else {
      inviteInvalid.value = true
      error.value = result.message || 'Unable to validate invite code.'
    }
  } catch (err) {
    console.error('Error fetching invite data:', err)
    error.value = err.message || 'Unable to connect to the server. Please check your connection.'
    inviteInvalid.value = true
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* Add any custom animations if needed */
</style>
