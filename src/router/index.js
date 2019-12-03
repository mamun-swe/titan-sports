import Vue from 'vue'
import VueRouter from 'vue-router'
import UserRouting from '../views/user/user-routing'
import Home from '../views/user/Home'
import About from '../views/user/About'
import Contact from '../views/user/contact'
import Sponsored from '../views/user/sponsored'
import TeamRegistration from '../views/user/team-registration'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: '/' },
  {
    path: '/',
    component: UserRouting,
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'registration', component: TeamRegistration },
      { path: 'contact', component: Contact },
      { path: 'sponsored', component: Sponsored }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
