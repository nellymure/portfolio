import { setI18nLocale, getI18nLocale, SUPPORT_LOCALES } from '@/i18n/i18n'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = {
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
      name: routes.HOME.name,
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/fr',
      children: [
        {
          name: `fr.${routes.ABOUT.name}`,
          path: 'a-propos',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
    {
      path: '/en',
      children: [
        {
          name: `en.${routes.ABOUT.name}`,
          path: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
    {
      path: '/:catchAll(.*)?',
      component: () => import('@/views/errors/NotFoundView.vue'),
    },
  ],
})

function getI18nLocaleForRoute() {
  return getI18nLocale().split('-').shift()
}

router.beforeEach((to, _from) => {
  if (to.path == '/') {
    return
  }

  const localeUrlSegment = to.path.split('/')
  const locale = localeUrlSegment[1]
  if (!SUPPORT_LOCALES.includes(locale)) {
    return { path: `/${getI18nLocaleForRoute()}${to.path}` }
  }
  setI18nLocale(locale)
})

router.afterEach((to, from) => {
  to.meta.transition = routes.HOME.name === from.name ? 'slide-right' : 'fade'
})

interface Route {
  name: string
}

export function getRouteName(route: Route) {
  return route.name == routes.HOME.name ? route.name : `${getI18nLocaleForRoute()}.${route.name}`
}

export default router
