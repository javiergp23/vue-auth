import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { auth } from '@/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        login: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
 const authRequired = to.meta.login
 const isAuthenticated = auth.currentUser !== null

 if (authRequired && !isAuthenticated) {
   next({ name: 'LoginView' })
 
   
 }else{
   next()
 }
})

export default router
