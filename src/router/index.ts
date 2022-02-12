import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignUpPage from '../views/SignUpPage.vue';
import Forgot_Pass from '../views/Forgot_Pass.vue';
import SignUpAdmin from '../views/SignUpAdmin.vue';
import TermsandCon from '../views/TermsandCon.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/terms',
    name: 'Terms and Condition',
    component: TermsandCon
  },
  {
  path: '/forgot_pass',
  name: 'Forgot Pass',
  component: Forgot_Pass
  },
  {
    path: '/signup_admin',
    name: 'Sign Up Admin',
    component: SignUpAdmin
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUpPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
