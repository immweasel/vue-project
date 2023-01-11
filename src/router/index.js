import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView'
import ContactsView from '../views/ContactsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/account',
    name: 'account',
    component: AccountView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
