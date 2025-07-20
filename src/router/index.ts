import { setI18nLocale, getI18nLocale, SUPPORT_LOCALES } from '@/i18n/i18n'
import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalizedLoadedGeneric,
} from 'vue-router'

export const routes = {
  HOME: {
    name: 'home',
  },
  HUB: {
    name: 'hub',
  },
  EXHIBITION: {
    name: 'exhibition',
  },
  EVENTS: {
    name: 'events',
  },
  MEDIATION: {
    name: 'mediation',
  },
  MODELS: {
    name: 'models',
  },
  ABOUT: {
    name: 'about',
  },
  ERROR_NOT_FOUND: {
    name: 'not-found',
  },
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: routes.HOME.name,
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/fr',
      children: [
        {
          name: `fr.${routes.HUB.name}`,
          path: 'hub',
          component: () => import('@/views/HubView.vue'),
        },
        {
          name: `fr.${routes.EXHIBITION.name}`,
          path: 'exposition',
          component: () => import('@/views/sections/ExhibitionView.vue'),
        },
        {
          name: `fr.${routes.EVENTS.name}`,
          path: 'evenementiel',
          component: () => import('@/views/sections/ExhibitionView.vue'),
        },
        {
          name: `fr.${routes.MEDIATION.name}`,
          path: 'mediation',
          component: () => import('@/views/sections/ExhibitionView.vue'),
        },
        {
          name: `fr.${routes.MODELS.name}`,
          path: 'maquettes',
          component: () => import('@/views/sections/ExhibitionView.vue'),
        },
        {
          name: `fr.${routes.ABOUT.name}`,
          path: 'a-propos',
          component: () => import('@/views/AboutView.vue'),
        },
      ],
    },
    {
      path: '/en',
      children: [
        {
          name: `en.${routes.HUB.name}`,
          path: 'hub',
          component: () => import('@/views/HubView.vue'),
        },
        {
          name: `en.${routes.EXHIBITION.name}`,
          path: 'exhibition',
          component: () => import('@/views/sections/ExhibitionView.vue'),
        },
        {
          name: `en.${routes.EVENTS.name}`,
          path: 'events',
          component: () => import('@/views/sections/ExhibitionView.vue'),
        },
        {
          name: `en.${routes.MEDIATION.name}`,
          path: 'mediation',
          component: () => import('@/views/sections/ExhibitionView.vue'),
        },
        {
          name: `en.${routes.MODELS.name}`,
          path: 'models',
          component: () => import('@/views/sections/ExhibitionView.vue'),
        },
        {
          name: `en.${routes.ABOUT.name}`,
          path: 'about',
          component: () => import('@/views/AboutView.vue'),
        },
      ],
    },
    {
      name: routes.ERROR_NOT_FOUND.name,
      path: '/:catchAll(.*)?',
      component: () => import('@/views/errors/NotFoundView.vue'),
    },
  ],
})

function getI18nLocaleForRoute() {
  return getI18nLocale().split('-').shift()
}

function isPreviousPageFromOurDomain(from: RouteLocationNormalizedLoadedGeneric) {
  // If from contains name, then we know previous page
  return from.name && from.name !== null && from.name !== undefined
}

router.beforeEach((to, from) => {
  console.log('go to', to.path)
  // If target the home page
  if (to.path === '/') {
    if (isPreviousPageFromOurDomain(from) && routes.ERROR_NOT_FOUND.name != from.name) {
      // Skip home page and go to the hub if we were already on the website
      return { name: `${getI18nLocaleForRoute()}.${routes.HUB.name}` }
    }
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
