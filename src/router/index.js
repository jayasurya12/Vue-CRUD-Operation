import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import ContactManager from '../views/ContactManager'
import AddContact from '../views/AddContact'
import EditContact from '../views/EditContact'
import ViewContact from '../views/ViewContact'
import PageNotFound from '../views/PageNotFound'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:"/contacts",
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'ContactManager',
    component: ContactManager
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path:'/contacts/edit/:contactId',
    name:"EditContact",
    component:EditContact
  },
  {
    path:'/contacts/view/:contactId',
    name:"ViewContact",
    component:ViewContact
  },
  {
    path:'/:pathMatch(.*)*',
    name:"pageNotFound",
    component:PageNotFound

  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
