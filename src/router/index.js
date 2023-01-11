import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView'
import ContactsView from '../views/ContactsView'
import ReviewsView from '../views/ReviewsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/account',
    name: 'account',
    component: AccountView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewsView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
