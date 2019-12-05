import Vue from 'vue'
import VueRouter from 'vue-router'
import UserRouting from '../views/user/user-routing'
import Home from '../views/user/Home'
import About from '../views/user/About'
import Team from '../views/user/team'
import ViewTeam from '../views/user/view-team'
import News from '../views/user/news'
import ReadNews from '../views/user/read-news'
import TeamRegistration from '../views/user/team-registration'
import Contact from '../views/user/contact'
import Sponsored from '../views/user/sponsored'

import AdminAuth from '../views/admin/auth'
import AdminRouting from '../views/admin/admin-routing'
import Dashboard from '../views/admin/dashboard'
import Banner from '../views/admin/banner/banner'
import SponsoredCompany from '../views/admin/sponsored/sponsored'
import AllTeam from '../views/admin/team/all-team'
import AddTeam from '../views/admin/team/add-team'
import AllNews from '../views/admin/news/all-news'
import AddNews from '../views/admin/news/add-news'
import Profile from '../views/admin/admin-profile'


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
      { path: 'team', component: Team },
      { path: 'team/:id', component: ViewTeam },
      { path: 'news', component: News },
      { path: 'news/:id', component: ReadNews },
      { path: 'registration', component: TeamRegistration },
      { path: 'contact', component: Contact },
      { path: 'sponsored', component: Sponsored }
    ]
  },
  { path: '/admin', component: AdminAuth },
  {
    path: '/menu',
    component: AdminRouting,
    children: [
      { path: '', redirect: '/menu/dashboard' },
      { path: 'dashboard', component: Dashboard },
      { path: 'banners', component: Banner },
      { path: 'sporser', component: SponsoredCompany },
      { path: 'teams', component: AllTeam },
      { path: 'add-team', component: AddTeam },
      { path: 'news', component: AllNews },
      { path: 'add-news', component: AddNews },
      { path: 'profile', component: Profile }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
