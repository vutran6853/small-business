import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/main/Main'
import Battery from '@/components/main/battery/Battery'
import Main2 from '@/components/main/main2/Main2'
import LinesSpools from '@/components/main/linesSpools/LinesSpools'
import TermsOfUse from '@/components/main/termsOfUse/TermsOfUse'

const routes = [
  {
    path: '/', 
    component: Main,
    children: [
      { path: '/', component: Main2 },
      { path: '/battery', component: Battery },
      { path: '/linesSpools', component: LinesSpools },
      { path: '/termsOfUse', component: TermsOfUse }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router