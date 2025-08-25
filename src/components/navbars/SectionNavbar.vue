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
      <router-link class="btn-about" :to="{ name: getRouteName(routes.ABOUT) }">
        <div class="title">
          {{ t('buttons.about') }}
        </div>
      </router-link>
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
.btn-about {
  margin-left: 1em;
}
</style>
