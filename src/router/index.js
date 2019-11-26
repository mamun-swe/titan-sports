import Vue from 'vue'
import VueRouter from 'vue-router'
import UserRouting from '../views/user/user-routing'
import Home from '../views/user/Home'
import About from '../views/user/About'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: '/' },
  {
    path: '/',
    component: UserRouting,
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', component: Home },
      { path: 'about', component: About }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
