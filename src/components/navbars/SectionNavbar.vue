<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import NavBar from './NavBar.vue'
import { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <NavBar class="section-navbar">
    <template #left>
      <router-link :to="{ name: getRouteName(routes.HUB) }">{{ t('buttons.back') }}</router-link>
    </template>
    <template #right>
      <div class="btn-about">{{ t('buttons.about') }}</div>
    </template>
  </NavBar>
</template>

<i18n>
  {
    "fr": {
      "buttons": {
        "about": "A propos",
        "back": "Menu",
      }
    },
    "en": {
      "buttons": {
        "about": "About",
        "back": "Menu",
      }
    }
  }
</i18n>

<style lang="css" scoped>
.section-navbar {
  font-family: var(--font-family-montserrat);
  font-weight: var(--font-weight-semi-bold);
  text-transform: uppercase;
}
.btn-about {
  margin-left: 1em;
}
</style>
