
<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Hero Background Image -->
      <div class="absolute inset-0">
        <img :src="heroImage" alt="Connected Community" class="w-full h-full object-cover object-center opacity-85" />
        <!-- Balanced overlay for text readability while keeping image visible -->
        <div class="absolute inset-0 bg-white/40"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white/60"></div>
      </div>
      
      <!-- Additional floating elements to enhance the dreamy effect -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Subtle floating orbs that complement the image -->
        <div class="absolute top-20 left-20 w-24 h-24 bg-white/30 rounded-full blur-xl animate-float-slow"></div>
        <div class="absolute top-40 right-32 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-float-medium delay-1000"></div>
        <div class="absolute bottom-40 left-1/3 w-28 h-28 bg-purple-300/15 rounded-full blur-xl animate-float-fast delay-500"></div>
      </div>

      <div class="container mx-auto px-6 text-center z-10">
        <!-- Logo -->
        <div class="mb-8 pt-16">
          <img class="w-32 h-32 mx-auto drop-shadow-lg" :src="kindredLogo" alt="Kindred" />
        </div>

        <!-- Main Headline -->
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-md">
          Turn Your Network Into Your<br/>
          <span class="text-kindred font-black drop-shadow-md">
            Competitive Advantage
          </span>
        </h1>

        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-gray-900 mb-8 max-w-4xl mx-auto leading-relaxed font-semibold drop-shadow-md">
          The relationship management system built for executives who manage 200+ business relationships. 
          Never let another $100K opportunity slip away because you forgot to follow up.
        </p>

        <!-- Value Props -->
        <div class="flex flex-wrap justify-center gap-6 mb-12">
          <div class="flex items-center bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-xl border border-green-200">
            <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <span class="text-gray-800 font-semibold">Executive-focused design</span>
          </div>
          <div class="flex items-center bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-xl border border-blue-200">
            <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <span class="text-gray-800 font-semibold">AI-powered reminders</span>
          </div>
          <div class="flex items-center bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-xl border border-purple-200">
            <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
            <span class="text-gray-800 font-semibold">Relationship ROI tracking</span>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-lg mx-auto border border-white/50">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Join the Executive Waitlist</h3>
          <p class="text-gray-700 mb-6 font-medium">Be first to access the relationship management system that turns connections into revenue.</p>
          
          <form class="space-y-4" method="post" action="https://app.loops.so/api/newsletter-form/YOUR_FORM_ENDPOINT">
            <div class="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="firstName" 
                placeholder="First name" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindred focus:border-transparent outline-none transition-all"
                required
              >
              <input 
                type="email" 
                name="email" 
                placeholder="Work email" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindred focus:border-transparent outline-none transition-all"
                required
              >
            </div>
            <input type="hidden" name="userGroup" value="Executive Waitlist">
            <button 
              type="submit" 
              class="w-full bg-gradient-to-r from-kindred to-purple-600 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Early Access
            </button>
          </form>
          
          <p class="text-xs text-gray-500 mt-4">Join 2,500+ executives already on the waitlist</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 relative bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-56 h-32 bg-gradient-to-br from-cyan-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">Built for Executive Success</h2>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Unlike generic CRMs built for sales teams, Kindred focuses on personal relationship ROI, 
            helping you maintain and strengthen your professional networks.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <!-- Feature 1 - Smart Contact Organization -->
          <div class="relative group text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-blue-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <!-- Feature Image Placeholder -->
            <div class="relative w-full h-48 mx-auto mb-6 rounded-xl overflow-hidden">
              <!-- Gradient placeholder that mimics your reference style -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-blue-300"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/40"></div>
              
              <!-- Cloud-like shapes -->
              <div class="absolute top-4 left-6 w-16 h-10 bg-white/60 rounded-full blur-sm animate-float-slow"></div>
              <div class="absolute bottom-8 right-8 w-12 h-8 bg-white/70 rounded-full blur-sm animate-float-medium"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-12 bg-white/50 rounded-full blur-lg"></div>
              
              <!-- People/contact circles representing organization -->
              <div class="absolute bottom-12 left-8 w-6 h-6 bg-blue-500/80 rounded-full"></div>
              <div class="absolute bottom-16 left-16 w-4 h-4 bg-cyan-500/80 rounded-full"></div>
              <div class="absolute bottom-20 left-12 w-5 h-5 bg-blue-600/80 rounded-full"></div>
              
              <!-- Text overlay for easy image replacement -->
              <div class="absolute bottom-2 right-2 text-xs text-blue-600/60 font-medium">
                Smart Organization
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-4 drop-shadow-sm">Smart Contact Organization</h3>
            <p class="text-gray-700 font-medium">
              Group contacts into meaningful circles (Family, Work, Acquaintances). Import from any source with intelligent duplicate detection.
            </p>
          </div>

          <!-- Feature 2 - AI-Powered Reminders -->
          <div class="relative group text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-purple-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <!-- Feature Image Placeholder -->
            <div class="relative w-full h-48 mx-auto mb-6 rounded-xl overflow-hidden">
              <!-- Gradient placeholder matching your reference -->
              <div class="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/40"></div>
              
              <!-- Floating reminder bubbles -->
              <div class="absolute top-6 left-8 w-8 h-6 bg-white/70 rounded-full blur-sm animate-float-medium"></div>
              <div class="absolute bottom-10 right-6 w-6 h-6 bg-white/60 rounded-full blur-sm animate-float-slow"></div>
              <div class="absolute top-1/3 right-1/3 w-10 h-8 bg-white/50 rounded-full blur-lg animate-float-fast"></div>
              
              <!-- AI notification elements -->
              <div class="absolute top-12 right-12 w-3 h-3 bg-purple-500/80 rounded-full animate-ping"></div>
              <div class="absolute bottom-16 left-12 w-2 h-2 bg-pink-500/80 rounded-full animate-ping delay-300"></div>
              
              <div class="absolute bottom-2 right-2 text-xs text-purple-600/60 font-medium">
                AI Reminders
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-4 drop-shadow-sm">AI-Powered Reminders</h3>
            <p class="text-gray-700 font-medium">
              Intelligent timing suggestions for outreach based on your patterns. Context-aware reminders with conversation history.
            </p>
          </div>

          <!-- Feature 3 - Relationship Analytics -->
          <div class="relative group text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-green-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <!-- Feature Image Placeholder -->
            <div class="relative w-full h-48 mx-auto mb-6 rounded-xl overflow-hidden">
              <!-- Gradient placeholder -->
              <div class="absolute inset-0 bg-gradient-to-br from-green-200 via-emerald-100 to-teal-300"></div>
              <div class="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/40"></div>
              
              <!-- Floating data visualization elements -->
              <div class="absolute top-8 left-10 w-12 h-8 bg-white/60 rounded-lg blur-sm animate-float-slow"></div>
              <div class="absolute bottom-12 right-8 w-8 h-10 bg-white/70 rounded-lg blur-sm animate-float-medium"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-6 bg-white/50 rounded-lg blur-lg"></div>
              
              <!-- Chart-like elements -->
              <div class="absolute bottom-8 left-8 w-1 h-8 bg-green-500/80 rounded-full"></div>
              <div class="absolute bottom-8 left-12 w-1 h-12 bg-emerald-500/80 rounded-full"></div>
              <div class="absolute bottom-8 left-16 w-1 h-6 bg-teal-500/80 rounded-full"></div>
              
              <div class="absolute bottom-2 right-2 text-xs text-green-600/60 font-medium">
                Analytics
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-4 drop-shadow-sm">Relationship Analytics</h3>
            <p class="text-gray-700 font-medium">
              Track business ROI from relationships. Relationship strength scoring and interaction frequency analysis.
            </p>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="bg-gradient-to-r from-kindred to-purple-600 rounded-2xl p-8 text-white text-center">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <div class="text-4xl font-bold mb-2">2+ hours</div>
              <div class="text-purple-100">Saved weekly on relationship management</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">40%</div>
              <div class="text-purple-100">Improvement in follow-up consistency</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">$25K+</div>
              <div class="text-purple-100">Average annual value reported by users</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof Section -->
    <section class="py-20 relative overflow-hidden">
      <!-- Subtle background image -->
      <div class="absolute inset-0">
        <img :src="heroImage" alt="Community Background" class="w-full h-full object-cover object-center opacity-10" />
        <div class="absolute inset-0 bg-white/95"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white/20 to-purple-50/30"></div>
      </div>
      
      <!-- Enhanced floating elements that complement the background image -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-40 left-16 w-32 h-20 bg-gradient-to-br from-blue-200/15 to-cyan-200/15 rounded-full blur-2xl animate-float-slow"></div>
        <div class="absolute bottom-32 right-20 w-28 h-36 bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-2xl animate-float-medium delay-1000"></div>
        <div class="absolute top-20 right-1/4 w-24 h-24 bg-white/30 rounded-full blur-xl animate-float-fast delay-500"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Trusted by Revenue Leaders</h2>
          <p class="text-xl text-gray-600">Join executives at leading companies who never let opportunities slip away</p>
        </div>

        <!-- Company Logos with floating effect -->
        <div class="flex flex-wrap justify-center items-center gap-8 mb-16">
          <div class="relative group">
            <div class="bg-gradient-to-r from-gray-200 to-gray-300 h-12 w-32 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"></div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-blue-400/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          </div>
          <div class="relative group">
            <div class="bg-gradient-to-r from-gray-200 to-gray-300 h-12 w-28 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"></div>
            <div class="absolute -top-1 -left-1 w-2 h-2 bg-purple-400/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          </div>
          <div class="relative group">
            <div class="bg-gradient-to-r from-gray-200 to-gray-300 h-12 w-36 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"></div>
            <div class="absolute -bottom-1 -right-1 w-4 h-2 bg-cyan-400/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          </div>
          <div class="relative group">
            <div class="bg-gradient-to-r from-gray-200 to-gray-300 h-12 w-30 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"></div>
            <div class="absolute -top-1 -right-1 w-2 h-4 bg-pink-400/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          </div>
          <div class="relative group">
            <div class="bg-gradient-to-r from-gray-200 to-gray-300 h-12 w-32 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"></div>
            <div class="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          </div>
        </div>

        <!-- Enhanced Testimonials -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Testimonial 1 -->
          <div class="relative group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100/50">
            <!-- Floating quote decoration -->
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-kindred/20 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-kindred" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.5 10c-2.5 0-4.5-2-4.5-4.5S4 1 6.5 1 11 3 11 5.5 9 10 6.5 10zm0-7C5.1 3 4 4.1 4 5.5S5.1 8 6.5 8 9 6.9 9 5.5 7.9 3 6.5 3zm7 7c-2.5 0-4.5-2-4.5-4.5S11 1 13.5 1 18 3 18 5.5 16 10 13.5 10zm0-7C12.1 3 11 4.1 11 5.5S12.1 8 13.5 8 16 6.9 16 5.5 14.9 3 13.5 3z"/>
              </svg>
            </div>
            
            <!-- Success indicator -->
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-500/20 rounded-full animate-pulse"></div>
            
            <div class="flex items-center mb-6">
              <!-- Avatar with success ring -->
              <div class="relative w-14 h-14 mr-4">
                <div class="w-full h-full bg-gradient-to-br from-kindred to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">SC</div>
                <div class="absolute -inset-1 bg-green-400/30 rounded-full animate-ping"></div>
              </div>
              <div>
                <div class="font-bold text-gray-900 text-lg">Sarah Chen</div>
                <div class="text-gray-600">Chief Revenue Officer, TechCorp</div>
                <!-- Success metrics mini-badge -->
                <div class="flex items-center mt-1">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-xs text-green-700 font-medium">$300K+ Revenue Impact</span>
                </div>
              </div>
            </div>
            <p class="text-gray-700 italic text-lg leading-relaxed">
              "Kindred helped me identify $300K in dormant opportunities that I had completely forgotten about. 
              The ROI tracking alone pays for itself."
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div class="relative group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50">
            <!-- Floating quote decoration -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.5 10c-2.5 0-4.5-2-4.5-4.5S4 1 6.5 1 11 3 11 5.5 9 10 6.5 10zm0-7C5.1 3 4 4.1 4 5.5S5.1 8 6.5 8 9 6.9 9 5.5 7.9 3 6.5 3zm7 7c-2.5 0-4.5-2-4.5-4.5S11 1 13.5 1 18 3 18 5.5 16 10 13.5 10zm0-7C12.1 3 11 4.1 11 5.5S12.1 8 13.5 8 16 6.9 16 5.5 14.9 3 13.5 3z"/>
              </svg>
            </div>
            
            <!-- Innovation indicator -->
            <div class="absolute -top-2 -left-2 w-6 h-6 bg-blue-500/20 rounded-full animate-pulse"></div>
            
            <div class="flex items-center mb-6">
              <!-- Avatar with innovation ring -->
              <div class="relative w-14 h-14 mr-4">
                <div class="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">MR</div>
                <div class="absolute -inset-1 bg-blue-400/30 rounded-full animate-ping"></div>
              </div>
              <div>
                <div class="font-bold text-gray-900 text-lg">Marcus Rodriguez</div>
                <div class="text-gray-600">VP of Business Development, ScaleUp Inc</div>
                <!-- Innovation mini-badge -->
                <div class="flex items-center mt-1">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span class="text-xs text-blue-700 font-medium">10x Relationship Scale</span>
                </div>
              </div>
            </div>
            <p class="text-gray-700 italic text-lg leading-relaxed">
              "Finally, a CRM that understands how executives actually work. The smart reminders are game-changing 
              for maintaining relationships at scale."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-20 bg-gradient-to-br from-kindred via-purple-600 to-pink-500">
      <div class="container mx-auto px-6 text-center text-white">
        <h2 class="text-4xl md:text-6xl font-bold mb-6">Ready to Transform Your Network?</h2>
        <p class="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          Join the waitlist for the relationship management system that turns your network into measurable business value.
        </p>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
          <form class="space-y-4" method="post" action="https://app.loops.so/api/newsletter-form/YOUR_FORM_ENDPOINT">
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your work email" 
              class="w-full px-4 py-4 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none"
              required
            >
            <input type="hidden" name="userGroup" value="Final CTA Signup">
            <button 
              type="submit" 
              class="w-full bg-white text-kindred font-bold py-4 px-8 rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Executive Early Access
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center mb-4 md:mb-0">
            <img class="w-8 h-8 mr-3" :src="kindredLogo" alt="Kindred" />
            <span class="text-xl font-bold">Kindred</span>
          </div>
          
          <div class="flex space-x-8">
            <a href="https://kindred.productlane.com/roadmap" target="_blank" rel="noopener noreferrer" 
               class="text-gray-300 hover:text-white transition-colors">
              Product Roadmap
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kindred. The relationship management system for executives.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
  
  
<script setup>
import kindredLogo from '@/assets/kindred.svg'
import heroImage from '@/assets/image (10).png'

// TODO: Add these images when you create them with the same dreamy art style:
// import contactsFeatureImage from '@/assets/contacts-feature.png'      // Floating business people in organized circles
// import remindersFeatureImage from '@/assets/reminders-feature.png'   // AI notifications in dreamy clouds  
// import analyticsFeatureImage from '@/assets/analytics-feature.png'   // Floating data visualizations in clouds
// import testimonialsBackground from '@/assets/testimonials-bg.png'    // Wide cloudscape for testimonials

// The forms are now handled via standard HTML form submission
// to the Loops.so endpoint for better reliability and simplicity
</script>
  
<style scoped>
/* Dreamy floating animations */
@keyframes float-slow {
  0%, 100% { 
    transform: translateY(0px) translateX(0px) rotate(0deg); 
    opacity: 0.6;
  }
  33% { 
    transform: translateY(-15px) translateX(10px) rotate(1deg); 
    opacity: 0.8;
  }
  66% { 
    transform: translateY(-5px) translateX(-8px) rotate(-1deg); 
    opacity: 0.4;
  }
}

@keyframes float-medium {
  0%, 100% { 
    transform: translateY(0px) translateX(0px) rotate(0deg); 
    opacity: 0.5;
  }
  50% { 
    transform: translateY(-20px) translateX(15px) rotate(2deg); 
    opacity: 0.9;
  }
}

@keyframes float-fast {
  0%, 100% { 
    transform: translateY(0px) translateX(0px) rotate(0deg); 
    opacity: 0.7;
  }
  25% { 
    transform: translateY(-8px) translateX(5px) rotate(0.5deg); 
    opacity: 0.3;
  }
  75% { 
    transform: translateY(-12px) translateX(-5px) rotate(-0.5deg); 
    opacity: 0.6;
  }
}

@keyframes pulse-glow {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(120, 104, 230, 0.1);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 40px rgba(120, 104, 230, 0.3);
    transform: scale(1.05);
  }
}

@keyframes drift {
  0% { transform: translateX(-100px) translateY(0px); opacity: 0; }
  10% { opacity: 0.5; }
  90% { opacity: 0.5; }
  100% { transform: translateX(100px) translateY(-20px); opacity: 0; }
}

/* Apply animations */
.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

.animate-drift {
  animation: drift 15s linear infinite;
}

/* Enhanced backdrop blur effects */
.backdrop-blur-dreamy {
  backdrop-filter: blur(20px) saturate(180%);
  background: rgba(255, 255, 255, 0.75);
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom gradient text selection */
::selection {
  background-color: rgba(120, 104, 230, 0.2);
}

/* Enhanced glass morphism */
.glass-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
</style>