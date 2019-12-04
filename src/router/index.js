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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
