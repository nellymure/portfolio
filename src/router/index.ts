import { createRouter, createWebHistory } from 'vue-router'

const routes = {
  HOME: {
    name: 'home',
  },
  ABOUT: {
    name: 'about',
  },
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routes.HOME.name,
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/' + routes.ABOUT.name,
      name: routes.ABOUT.name,
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.afterEach((to, from) => {
  to.meta.transition = routes.HOME.name === from.name ? 'slide-right' : 'fade'
})

export { routes }
export default router
