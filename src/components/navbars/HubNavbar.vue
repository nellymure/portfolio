<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import NellyMure from '@/components/NellyMure.vue'
import NavBar from './NavBar.vue'
import { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <NavBar class="hub-navbar">
    <template #left>
      <NellyMure class="nelly-mure" />
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
        "about": "A propos"
      }
    },
    "en": {
      "buttons": {
        "about": "About"
      }
    }
  }
</i18n>

<style lang="css" scoped>
.hub-navbar {
  color: var(--color-hex-orange);
}
.nelly-mure {
  font-size: var(--font-size-4);
}
.btn-about {
  margin-left: 1em;
  text-transform: uppercase;
}
</style>
