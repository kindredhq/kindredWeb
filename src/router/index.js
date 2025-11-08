import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import AssessmentView from '../views/AssessmentView.vue'
import ResultsView from '../views/ResultsView.vue'
import InviteView from '../views/InviteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicy
    },
    {
      path: '/roi-calculator',
      name: 'roi-calculator',
      component: AssessmentView,
      meta: {
        title: 'ROI Calculator | Kindred'
      }
    },
    {
      path: '/results/:id',
      name: 'results',
      component: ResultsView,
      meta: {
        title: 'Your Results | Kindred'
      }
    },
    {
      path: '/invite/:inviteCode',
      name: 'invite',
      component: InviteView,
      meta: {
        title: 'Join Kindred | Invite'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
